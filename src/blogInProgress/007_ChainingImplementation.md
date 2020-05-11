---
title: 'Implementing closed addressing'
date: 2020-05-18 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/007_Bariloche.jpg
subtitle: 'A demonstration how a hash function can be designed and written to implement chaining / closed addressing'
time: '8'
tags:
- Java
- Data Structures
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Create a hash table that uses chaining to resolve hash collisions.<br>
&#8226; Understand how LinkedLists can be used within the hash table.<br>
&#8226; Use load factor to validate and update the number of buckets within the hash table.<br>

<br>
<h4>Chaining in a HashTable</h4>
<p>
Chaining, also known as closed addressing, is a technique used with hash tables and  hash maps to efficiently store the value of keys that have the same hash value.
If you are unfamiliar with open and closed addressing, please visit my <a target="_blank" href="https://aneesh.co.uk/resolving-hash-collisions"><u>blog</u></a> where I explain their relationship with hash functions.<br>
In this post, I will walk through the implementation of closed addressing whereby a hash table will allocate values into a LinkedList to resolve hash value collisions.
</p>

<h4>Implementing chaining, step by step</h4>
<p>
The chained hash table will consist of two classes: <code class="language-java">ChainedHash</code>, which will be the hash table, and <code class="language-java">EntryLinkedList</code>, which will be the LinkedList Object appended to each bucket of the ChainedHash.<br>
A top-down view of the implementation is below:<br>

![Chained hash table diagram](../../src/images/007chainedDiagram.png)

<br>
The ChainedHash will use the following methods:<br>
&#8226; <strong>put(Key, Value)</strong> to place key-value pairs in the hash table.
&#8226; <strong>hashFunction(Key)</strong> to calculate the hash value of the key.
&#8226; <strong>validateLoadFactor()</strong> to ensure the upper bound load factor limit has not been breached through entries to the hash table.
<br>
The bucket at each hash table index will consist of an EntryLinkedList Object which contains the variables: key (String), value (int) and nextListEntry (EntryLinkedList). <code class="language-java">nextListEntry</code> will be used to create additional values in each bucket.
</p>
<strong>Class: EntryLinkedList</strong>
<p>

The EntryLinkedList constructor will instantiate the key, value and nextEntryPosition.
There are getters and setters for the value and nextEntryPosition, and getter for the key.<br>

```java{numberLines: true}
    private String key;
    private int value;
    private EntryLinkedList nextListEntry;

    EntryLinkedList(String key, int value) {
        this.key = key;
        this.value = value;
        this.nextListEntry = null;
    }
```

</p>
<br>
<strong>Class: ChainedHash</strong>
<p>
The ChainedHash class instantiates its buckets from the constructor. The MAX_LOAD_FACTOR is a constant value the load factor will be reviewed against. When the ChainedHash is created, all buckets are instantiated to null.
<br>

```java{numberLines: true}
    private double loadFactor;
    EntryLinkedList[] hashTableBuckets;
    private static int numberOfBuckets;
    private double numberOfEntries = 0;
    public static final double MAX_LOAD_FACTOR = 0.75;

    public ChainedHash(int bucketsToCreate){
        numberOfBuckets = bucketsToCreate;
        hashTableBuckets = new EntryLinkedList[numberOfBuckets];
        for (int i = 0; i < numberOfBuckets; i++) {
            hashTableBuckets[i] = null;
        }
    }
    ...

```

<br>
A hashFunction is created to calculate the hash value of the key. The method will sum the ascii values of the string and return the modulo of the sum against the number of buckets:<br>

```java{numberLines: true}
public static int hashFunction(String key) {

        int asciiValue = 0;
        for (int i = 0; i < key.length(); i++) {
            char c = key.charAt(i);
            asciiValue = asciiValue + (int) c;
        }

        int hashValue = Math.round(asciiValue % numberOfBuckets);

        return hashValue;
    }
```
<br>
To add a new key and value into the hash table, the put(Key, Value) function is used.<br>
In the method below, the hash value is calculated on line 2. On line 5, the load factor is evaluated to being less than the MAX_LOAD_FACTOR constant. This method is reviewed later in detail. On line 7, a check is performed if the hash value does not already contain an EntryLinkedList otherwise a new EntryLinkedList is created.  <br>
If EntryLinkedList is null, the put method will create a new EntryLinkedList and populate the first position with the value (line 9). If there already exists an EntryLinkedList, the method will loop over the existing list to either replace the value of the existing key (line 20) or append the next value into the EntryLinkedList (line 23).

```java{numberLines: true}
    public void put(String key, int value) {
        int hashValue = hashFunction(key);
        numberOfEntries++;

        validateLoadFactor();

        if (hashTableBuckets[hashValue] == null) {

            hashTableBuckets[hashValue] = new EntryLinkedList(key, value);

        } else {
            EntryLinkedList hashValueLinkedList = hashTableBuckets[hashValue];

            while (hashValueLinkedList.getNextLinkedValue() != null && !hashValueLinkedList.getKey().equals(key)) {
                hashValueLinkedList = hashValueLinkedList.getNextLinkedValue();
            }

            if (hashValueLinkedList.getKey().equals(key)) {
                hashValueLinkedList.setValue(value);
            } else {
                Application.numberOfCollisions++;
                hashValueLinkedList.setNextListEntry(new EntryLinkedList(key, value));
            }
        }
    }
```
<br>
The validateLoadFactor method will be used to ensure the new load factor of the hash table is not greater than the MAX_LOAD_FACTOR constant. If the load factor is greater than MAX_LOAD_FACTOR, the hash table is replaced by a new one that has double the size of the buckets in the rehash method.

```java{numberLines: true}
  private void validateLoadFactor() {
        if(calculateLoadFactor() > MAX_LOAD_FACTOR){
            System.out.println("Current load factor: " + calculateLoadFactor() );
            numberOfBuckets = numberOfBuckets * 2;
            System.out.println("Buckets raised to: " + numberOfBuckets + " buckets.");
            this.rehash();
        }
    }
```
<br>
The rehash method is used to create a new hash table with the existing key-value pairs included. The new hash table will include double the number of buckets to reduce the load factor. On line 8, the key-value pairs from the preexisting hash table are reallocated buckets into the new hash table. 

```java{numberLines:true}
 private void rehash(){

        EntryLinkedList[] temp = hashTableBuckets;

        hashTableBuckets = new EntryLinkedList[numberOfBuckets];
        for(int i = 0; i< numberOfBuckets /2; i++){
            if(temp[i] != null){
                this.put(temp[i].key, temp[i].value);
            }
        }
    }

```
<br>
<strong>Pulling it together in the main method</strong>
<br>
In the main class, the hash table is tested by creating an instance with entries. There are many System.out.println() lines to help with the analysis of the hash table. An additional method <code class="language-java">printEntryLinkedList()</code> is also used to print out the entries in the hash table.

```java{numberLines: true}
   ChainedHash hashTable = new ChainedHash(4);

        hashTable.put("Alex", 47);
        System.out.println("Printing the hash table: ");
        hashTable.printEntryLinkedList();

        hashTable.put("George", 80);
        System.out.println("\nOne more entry (George, 80)..");
        hashTable.printEntryLinkedList();

        hashTable.put("Phillip", 19);
        System.out.println("\nOne more entry (Phillip, 19)..");
        hashTable.printEntryLinkedList();

        hashTable.put("Eliza", 97);
        System.out.println("\nOne more entry (Eliza, 97)..");
        hashTable.printEntryLinkedList();

        System.out.println("\nOne more entry (John, 90)..");
        hashTable.put("John", 90);
        hashTable.printEntryLinkedList();

        System.out.println("\nOne more entry (Lin, 16)..");
        hashTable.put("Lin", 16);
        hashTable.printEntryLinkedList();

        System.out.println("\nOne more entry (Miranda, 80)..");
        hashTable.put("Miranda", 80);
        hashTable.printEntryLinkedList();

        System.out.println("\nTotal collisions: " + numberOfCollisions);

```
The output from the main class:

```
Printing the hash table: 
[hash value='2', key='Alex', value=47], null

One more entry (George, 80)..
[hash value='1', key='George', value=80], null
[hash value='2', key='Alex', value=47], null

One more entry (Phillip, 19)..
[hash value='1', key='George', value=80], null
[hash value='2', key='Alex', value=47], [hash value='2', key='Phillip', value=19], null
Current load factor: 1.0
Buckets raised to: 8 buckets.

One more entry (Eliza, 97)..
[hash value='1', key='George', value=80], [hash value='5', key='Eliza', value=97], null
[hash value='2', key='Alex', value=47], null

One more entry (John, 90)..
Current load factor: 0.875
Buckets raised to: 16 buckets.
[hash value='15', key='John', value=90], null
[hash value='9', key='George', value=80], null
[hash value='10', key='Alex', value=47], null

One more entry (Lin, 16)..
[hash value='3', key='Lin', value=16], null
[hash value='15', key='John', value=90], null
[hash value='9', key='George', value=80], null
[hash value='10', key='Alex', value=47], null

One more entry (Miranda, 80)..
[hash value='3', key='Lin', value=16], null
[hash value='15', key='John', value=90], null
[hash value='9', key='George', value=80], null
[hash value='10', key='Alex', value=47], null
[hash value='12', key='Miranda', value=80], null


Total collisions: 2
```
<strong>Analysis</strong>
<br>
As each entry is made to the hash table the main method will print out the load factor if it invalidating the maximum load value and the number of buckets that are recreated. At the end of the runtime, the number of collisions are also printed to the console. <br>
Analysis can be derived from the number of times the hash table needs to rehash and the number of collisions that are created. These two metrics can be useful to estimate the effectiveness of the hash table in using memory and the effectiveness of the hash function to assign each key to a unique index position.  

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