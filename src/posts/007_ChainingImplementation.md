---
title: 'Implementing closed addressing'
date: 2020-05-18 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/007_Bariloche.png
subtitle: 'A demonstration how a hash function can be designed and written to implement chaining / closed addressing'
time: '8'
tags:
- Java
- Data Structures
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Create a hash table that uses chaining to resolve hash collisions.<br>
&#8226; Understand how get(), put() and remove() functions can work in the LinkedList.<br>

<br>
<h4>Chaining in a HashTable</h4>
<p>
Chaining, also known as closed addressing, is a technique used in with hash tables and has hash maps to efficiently store the value of keys that have the same hash value.
Please visit my <a target="_blank" href="https://aneesh.co.uk/resolving-hash-collisions"><u>blog</u></a> where I explain how open and closed addressing works if you are unfamiliar with open and closed addressing.
In this post, I will walk through the implementation of closed addressing whereby a hash table will allocate values into a LinkedList for each hash value collision.
</p>

<h4>Implementing chaining, step by step</h4>
<p>
The chained hash table will consist of two classes: <code class="language-java">ChainedHashTable</code>, which will be the hash table, and <code class="language-java">EntryLinkedList</code>, which will be the LinkedList Object appended to each bucket.<br>
A top-down view of the implementation is below:<br>

![Chained hash table diagram](../../src/images/007chainedDiagram.png)

<br>
The ChainedHashTable will have four methods:<br>
&#8226; <strong>put(Key, Value)</strong> to place key-value pairs in the hash table.
&#8226; <strong>hashFunction(Key)</strong> to calculate the hash value of the key.
&#8226; <strong>remove(Key)</strong> to remove key-value pairs from the hash table.
&#8226; <strong>get(Key)</strong> to obtain values from the hash table using the key.
<br>
The bucket at each hash table index will consist of a EntryLinkedList which behaves like a LinkedList, but will provide additional functionality for the hash table implementation.<br>
EntryLinkedList will contain the variables: key (String), value (int) and nextEntryPosition (EntryLinkedList). <code class="language-java">nextEntryPosition</code> will be used to create additional values in each bucket.
</p>
<strong>Class: EntryLinkedList</strong>
<p>

The EntryLinkedList constructor will instantiate the key, value and nextEntryPosition.
There are getters and setters for the value and nextEntryPosition, and getter for the key.<br>

```java{numberLines: true}

public class EntryLinkedList {

    private String key;
    private int value;
    private EntryLinkedList nextEntryPosition;

    EntryLinkedList(String key, int value){
        this.key = key;
        this.value = value;
        this.nextEntryPosition = null;
    }

    public String getKey() {
        return key;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public EntryLinkedList getNextEntryPosition() {
        return nextEntryPosition;
    }

    public void setNextEntryPosition(EntryLinkedList nextEntryPosition) {
        this.nextEntryPosition = nextEntryPosition;
    }
}

```

</p>
<br>
<strong>Class: ChainedHashTable</strong>
<p>
The ChainedHashTable will define the number of buckets in its array and instantiate each to be null.
<br>

```java{numberLines: true}
  private static final int BUCKETS = 16;
    EntryLinkedList[] entryList;

    ChainedHashTable(){
        entryList = new EntryLinkedList[BUCKETS];
        for(int i = 0; i< BUCKETS; i++){
            entryList[i] = null;
        }
    }
```

<br>
The method hashFunction will be used to calculate the hash value of the key. The method will calculate the modulo for the ascii value of the String against the table size:<br>

```java{numberLines: true}
public static int hashFunction(String key){

        int asciiValue = 0;

        for(int i =0; i<key.length(); i++){
            char c = key.charAt(i);
            asciiValue = asciiValue + (int)c;
        }
       
        int hashValue = Math.round(asciiValue % BUCKETS);

        return hashValue;
    }
```
<br>
To add a new key and value into the hash table, the put(Key, Value) function is used.<br>
In the code below, the hash value is calculated on line 2. An if statement will check if there already exists an EntryLinkedList Object in the hash value index of the array. <br>
If there is no Object, it will create a new EntryLinkedList and populate its first position with the value (line 5). If there already exists an EntryLinkedList, the method will loop 
over the existing list to either replace the value of the existing key (line 15), or define the next entry into the EntryLinkedList (line 18).

```java{numberLines: true}
 public void put(String key, int value){
        int hashValue = hashFunction(key);

        if(entryList[hashValue] == null){
            entryList[hashValue] = new EntryLinkedList(key, value);
        }
        else{
            EntryLinkedList hashValueList = entryList[hashValue];

            while (hashValueList.getNextEntryPosition() != null && hashValueList.getKey() != key){
                hashValueList = hashValueList.getNextEntryPosition();
            }

            if (hashValueList.getKey() == key) {
                hashValueList.setValue(value);
            }
            else {
                hashValueList.setNextEntryPosition(new EntryLinkedList(key, value));
            }
        }
    }
```
<br>
The get method will be used to obtain a value from the EntryLinkedList that is stored within the ChainedHashTable. The get method will return -1 if the key 
is not found within the ChainedHashTable (line 4), otherwise it will loop over the EntryLinkedList and return the key if it is found (line 10).

```java{numberLines: true}
public int get(String key) {
        int hashValue = hashFunction(key);
        if (entryList[hashValue] == null) {
            System.out.println("cannot find key");
            return -1;
        } else {
            EntryLinkedList hashValueList = entryList[hashValue];
            while (hashValueList.getNextEntryPosition() != null && hashValueList.getKey() != key) {
                hashValueList = hashValueList.getNextEntryPosition();
            }
            if (hashValueList == null) {
                return -1;
            } else {
                return hashValueList.getValue();
            }
        }
    }
```
<br>
The remove method will be used to remove a key from the EntryLinkedList. The method below will find the key in the ChainedHashTable, identify the previous entry in the LinkedList if it exists
and then reassign the value of the current EntryLinkedList as what would have proceeded it:

```java{numberLines: true}

   public void remove(String key){
        int hashValue = hashFunction(key);
        if(entryList[hashValue] != null){
            EntryLinkedList previousEntry = null;
            EntryLinkedList hashValueList = entryList[hashValue];
            while(hashValueList.getKey() != key && hashValueList.getNextEntryPosition() != null){
                previousEntry = hashValueList;
                hashValueList = hashValueList.getNextEntryPosition();
            }
            if(hashValueList.getKey() == key){
                if(previousEntry == null){
                    entryList[hashValue] = hashValueList.getNextEntryPosition();
                }
                else{
                    previousEntry.setNextEntryPosition(hashValueList.getNextEntryPosition());
                }
            }
        }
    }

```


<br>
<strong>Pulling it together in the main method</strong>
<br>
In the main class, the hash table is tested by creating an instance with entries. An additional method <code class="language-java">printEntryLinkedList()</code> is used to print out the entries in the hash table:

```java{numberLines: true}
public class Main {

    public static void main(String[] args) {

        ChainedHashTable a = new ChainedHashTable();

        a.put("Alex", 47);
        a.put("George", 80);
        a.put("Phillip", 19);
        a.put("Eliza", 97);

        System.out.println("Printing the ChainedHashTable: ");
        a.printEntryLinkedList();
        a.remove("Phillip");

        System.out.println("\nChainedHashTable without Phillip: ");
        a.printEntryLinkedList();
    }
}

```
The output from the main class:

```
Printing the ChainedHashTable: 
[hash value='1'key='George', value=80], null
[hash value='2'key='Alex', value=47], [hash value='2'key='Phillip', value=19], null
[hash value='5'key='Eliza', value=97], null

ChainedHashTable without Phillip: 
[hash value='1'key='George', value=80], null
[hash value='2'key='Alex', value=47], null
[hash value='5'key='Eliza', value=97], null
```

</p>

<br>
<h4>Conclusion</h4>
<p>
The implementation of chaining in a hash table can be implemented with just a few methods that cover its dictionary operations. The performance
of the hash table will have constant time for the dictionary operations making it easier to find and store values.<br>
The optimization of the hash table is dependent on the load factor that can be derived and therefore leaves room to customise the configuration with 
consideration to the use case.<br>
The source code from this blog can be found on GitHub <a target="_blank" href="https://github.com/4neesh/HashTableChainingDemo">here</a>.
</p>

<br>
<small style="float: right;" >Picture: Bariloche, Argentina by <a target="_blank" href="https://unsplash.com/@ggiqueaux">Geronimo Giqueaux</small></a><br>