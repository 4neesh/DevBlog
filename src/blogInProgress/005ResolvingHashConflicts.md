---
title: 'Resolving hash conflicts with hashtables'
date: 2020-05-04 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/005Riobamba.png
subtitle: 'Understand how Java can resolve the a problem where a hash function creates the same key for more than one input.'
time: '8'
tags:
- Data Structures
- Java
- Algorithms
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; Collisions occur when a hash function computes to the same value for different inputs.<br>
&#8226; Collisions can be resolved witsh open addressing and closed addressing techniques.<br>
&#8226; tbc<br>

<br>
<h4>What are hash functions and why do we use them?</h4>
<p>
Hash functions are used to map data or any arbitrary size into a fixed size. Java uses hash functions in the following key-value data structures:<br>
&#8226; HashMap<br>
&#8226; HashTable<br>

There are just a few differences between HashMap and HashTable. HashMap data is not synchronized, and can therefore perform faster than a HashTable which is synchronized. HashMap allows one null key and any null values, whereas HashTable does not allow any null keys or values. The remainder of this post will reflect upon HashTables for simplicity.<br>
HashTables store data in a key-value pair in an array. When an entry is made to a HashTable, the index position that the data is stored within the array is calculcated through the key. The key is used as an input to a hash function which will produce the integer index position<br>
The hash function that is used is defined by the <code class="language-java">public int hashCode()</code> method of the Object. The example below summarises how a key-value pair of a Person object can be placed within a HashTable.<br>

![HashTable visualisation](../../src/images/005HashTable.png)

</p>
<p>
The example above stores the value (an integer) at the appropriate index, however the value could instead be any kind of Object such as a class. You would then be able to find instances of a class within the HashTable just through the key. 
</p>
<strong>The benefit of HashTable</strong>
<br>
<p>
The HashTable resolves the problem of searching for a value within an array. If we have an array of 100 integers and we would like to find the index of a certain value, we would have to loop through each value until we find it. As a result, the time-complexity of the search would be O(n) (see my post on the Big O notation <a href = "https://aneesh.co.uk/calculating-the-time-complexity-of-algorithms">here</a> for more). HashTable allows us to find the index of a value based upon it's key. As a result, we are able to find the value within the HashTable instantly, regardless of the HashTable size O(1). 
</p>

<br>
<h4>Hashfunction collisions</h4>
<p>
The example visited does not mention the hash function that was used to convert the key (name) into an integer (index position). The below image demonstrates how a index was computed:
</p>

![HashTable visualisation](../../src/images/005HashTable2.png)

<p>
Each index position within the array is known as a 'bucket'. When we use our simple hashfunction to store data, we are assign the data to a free bucket in the array. A collision will occur when the hashfunction computes the same integer (index) for different keys.<br>
If we had a fourth object with a key-value pair of: {"George",81}, the index position would be calculated as so:<br>
"George" ASCII value = 441; 441/8 = 55; 55%8 = 7<br>
The addition of a new entry, "George", will result in a collision with Eliza, who is also stored at index 7.
</p>
<br>
<h4>Resolving collisions</h4>
<p>
When ou r   
</p>
<br>
<h5>Open addressing</h5>
<strong>Linear probing</strong><br>

<strong>Cluster effects</strong><br>

<strong>Quadratic probing</strong><br>

<strong>Double-hash probing</strong><br>

<br>
<h5>Closed addressing</h5>

Although we now have to make an additional move, the time complexity remains at O(1) as it would be O(1 + x) where x is the length of the linked-list.
<br>
<h4>Conclusion</h4>

<br>
<small style="float: right;" >Picture: Riobamba, Ecuador by <a target="_blank" href="https://unsplash.com/@ezekiel">Fernando Tapia</small></a><br>