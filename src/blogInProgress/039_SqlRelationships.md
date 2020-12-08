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
<h4>Defining relationships in MySQL</h4>
<p>

</p>

<br>
<h4>Defining relationships in Spring</h4>
<p>
The entity classes which are used for storing representative records in the application will also require configuration to ensure they are mapped to respective entities for relationships. 


</p>

<br>
<h4>Joining tables in SQL</h4>
<p>
A join is used in SQL to combine multiple tables together upon a related field between the two. Joins allow you to define records that fulfil a certain condition, and to obtain fields across multiple tables together.
</p>
<p>
In the below table, Football players and their Id are shown in table Footballers:

football_player

```
| id | name       |
|----|------------|
| 1  | Alioski    |
| 2  | Harrison   |
| 3  | Bamford    |
```

The below table contains the player id and their goals scored:

player_goals

```
| playerId  | goals |
|-----------|-------|
| 11        | 2     |
| 20        | 3     |
| 3         | 12    |

```
</p>
<br>
<h4>Different types of joins</h4>
<p>
The two tables above can be combined in many different ways determined by how the join is performed:
&#8226; Inner Join to return results that are matching.<br>
&#8226; Left Join to return all records from the left along with matches to the right.<br>
&#8226; Right Join to return all records from the right, along with all matches from the left.<br>
&#8226; Outer Join to return all records that have matched from the left and right.<br>
</p>
<br>
<h4>INNER Join</h4>
<p>
An inner join is used to return all the records that a match has been achieved between the tables:

```sql
SELECT football_player.name, player_goals.goals
FROM 
football_player
INNER JOIN
player_goals ON football_player.id = player_goals.playerId
```

Returns:

```
| name    | goals   |
|---------|---------|
| Bamford | 12      |
```

</p>

<br>
<h4>Left and Right Joins</h4>
<p>
A left and right join will return a result for all members of the left or right side along with the matches 
for the other table on the other side.

```sql
SELECT football_player.name, player_goals.goals
FROM 
football_player
LEFT JOIN
player_goals ON football_player.id = player_goals.playerId

```

Returns:

```
| name     | goals   |
|----------|---------|
| Alioski  | null    |
| Harrison | null    |
| Bamford  | 12      |

```

```sql
SELECT football_player.name, player_goals.goals
FROM 
football_player
RIGHT JOIN
player_goals ON football_player.id = player_goals.playerId

```

Returns:

```
| name     | goals   |
|----------|---------|
| null     | 2       |
| null     | 3       |
| Bamford  | 12      |

```

</p>

<br>
<h4>Mapping Joins into Spring</h4>
<p>
In Spring, we can create our Object classes to represent the tables as we require.
@Entity
@Column
@Id



</p>
<br>
<h4>Summary</h4>
<p>


</p>

<br>
<small style="float: right;" >Picture: xxx, xxx by <a target="_blank" href="http">xxx</small></a><br>