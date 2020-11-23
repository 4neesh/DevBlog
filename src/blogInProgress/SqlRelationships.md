---
title: 'xxx'
date: 2020-09-28 16:34:00
author: 'Aneesh Mistry'
featuredImage: ../images/xxx.jpg
subtitle: 'xxx'
time: 'xx'
tags:
- Databases
---
<br>
<strong>Key Takeaways</strong><br>
&#8226; The .<br>
&#8226; The .<br>
&#8226; The.<br>

![Merge sort step 2](../../src/images/011MergeSort2.png)


<br>
<h4>Related tables in Relational databases</h4>
<p>
A relational database will consist of multiple tables that do and do not contain relationships between them. 
Relationships between tables can be defined to support dynamic updates across tables and to avoid data inconsistencies. 
Relationships can be defined to describe the relationship of data fields between tables. With relationships, database transactions are 
updated across tables at once. 
</p>
<p>
Relationships between tables are created when they are defined to exist, and when the values of the respected fields involved in the relationship match.
</p>
<br>
<h4>Relationships and keys in tables</h4>
<p>
Before we begin defining relationships in tables, it is important to reflect upon some of the keywords we will use when describing tables and relationships.
</p>
<p>
<strong>Primary key</strong> is a field within a table that is unique for each record. Each table will have a single primary key.<br>
</p>

<p>
<strong>Foreign key</strong> is a field within a table that represents a value of a primary key from another table.<br>
</p>
<p>
<strong>One-to-one relationship</strong> is where 1 record in a table corresponds to a single record in another table.
An example of a one-to-one relationship could be between a table that represents a Football player with their name and Id. And another table that represents a team of players with Player Id and Team. 

//image of the relationship in a view

</p>
<p>
<strong>One-to-many relationship</strong> occurs where a single record from one table can match to the foreign key in another table many times. 
An example of this could be a table of the Books with the Book Id and the Book name and another table of pages from books, with the Book Id and Page. 
</p>
<p>
<strong>Many-to-many relationship</strong> occurs where multiple records from one table match multiple records from another table. An example could be a table of animals with the Animal_Id and Animal_name
and a second table of Countries. The animal can exist in many countries, whereas a single country can contain many animals. The many-to-many relationship of tables required a third table, known as a join table, 
to enable the relationship to exist:


</p>

<br>
<h4>Summary</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>