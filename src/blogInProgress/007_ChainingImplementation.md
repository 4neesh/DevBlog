---
title: 'Implementing closed addressing'
date: 2020-04-27 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/007_Bariloche.png
subtitle: 'A practical demonstration how a hash function can be designed to implement chaining / closed addressing'
time: '8'
tags:
- Java
- Data Structures
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

<br>
<h4>Chaining in a HashTable</h4>
<p>
Chaining, also known as closed addressing, is a technique used in Java HashTables and HashMaps to efficiently multiple values if their keys map to the same hash value.
I have written a blog explaining how open and closed addressing works <a target="_blank" href="https://aneesh.co.uk/resolving-hash-collisions">here</a>. In this post, I 
will walk through the implementation of closed addressing whereby a HashTable will allocate values into a LinkedList within the HashTable for each hash value in the HashTable.
</p>

<h4>Implementing chaining, step by step</h4>
<p>
The HashTable will exist as its own class and will have four key methods:<br>
&#8226; <strong>put(Key, Value)</strong> to place key-value pairs in the HashTable.
&#8226; <strong>hashFunction(Key)</strong> to calculate the hash value of the key.
&#8226; <strong>remove(Key)</strong> to remove key-value pairs from the HashTable.
&#8226; <strong>get(Key)</strong> to obtain values from the HashTable using the key.
<br>
The bucket in each HashTable index will consist of a LinkedList. The LinkedList will be an implementation of the class: EntryLinkedList.<br>
EntryLinkedList will contain the variables: key, value, nextEntryPosition. nextEntryPosition will be used to resolve hash collisions and use positions further in the list to store values.
</p>
<strong>Class: EntryLinkedList</strong>
<p>

The EntryLinkedList constructor will instantiate the key, value and nextEntryPosition. The nextEntryPosition is only defined during a collision, otherwise it is not needed.
There are appropriate getters and setters required for obtaining and setting the value and nextEntryPosition, and obtaining the key.<br>

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
The ChainedHashTable will first instantiate an array of the EntryLinkedList which will form the buckets that the values will be stored in:<br>

```java{numberLines: true}
  private static final int TABLE_SIZE = 64;
    EntryLinkedList[] entryList;
    ChainedHashTable(){
        entryList = new EntryLinkedList[TABLE_SIZE];
        for(int i = 0; i< TABLE_SIZE; i++){
            entryList[i] = null;
        }
    }
```

<br>
The method hashFunction will be used to calculate the hash value of the key:<br>



</p>


<br>
<h4>Conclusion</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: Bariloche, Argentina by <a target="_blank" href="https://unsplash.com/@ggiqueaux">Geronimo Giqueaux</small></a><br>