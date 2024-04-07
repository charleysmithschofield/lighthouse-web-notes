# Intro to Relational Databases - Reading

Imagine we needed a table to store student information including their:

  - name
  - email
  - project name
  - partner name
  - second partner name 
  - project URL
  - whether or not the project was accepted

## The Problem
Imagine a list of hundreds of students with many projects for each. This table would quickly become disorganized.

We need to find a better way to get our data under control.

## Organizing for Better Storage

  * database: a database is a collection of data stored in many tables. Those tables may include many columns which tell us what data is contained within it. The row is where the data itself lives.

Database basics:

  - Databases have many tables
  - Contains many columns
  - Contains many rows
  - Holds our data


## Updating for Repetitions
Repetitious data is bad for many reasons, but some are less obvious than others. For instance, what if we spelled a student's name wrong in our original data?


## Putting the Relational in Relational DBs
Instead of throwing everything together under one roof, the bet way to deal with this data is to separate it into tables that make sense.

Information should be grouped by necessity.

Example: 
  - student details: emails, phone numbers, DOB's would go under the "Students" table.

  - project names, URL's and whether or not it's accepted would go under the "Projects" table. 


## Primary and Foreign Keys
In our Projects table we have typed out full names that were already in the Students table. Consider how often typos occur... what if the table is populated with misspelled names?

Luckily primary and foreign keys save us from this particular problem. Instead of just storing the information we need, we can store info that helps us stay organized. 


## The Primary Key (PK)

  * primary key (PK): the primary (first, most important, central) key for any row of a table.

Primary keys can be anything as long as every row in the table has a unique value for its primary key. But most people use numbers of some soft, often in a column labelled something_id.

Ex:

student_id / Name / Email
0001 / Jimbo Bojangles / jbojangy@gmail.com
0002 / Bobbert Wiggins / bwiggins@gmail.com


Here, in the Students table, student is a primary key. It's the way we can organize the students numerically if we wanted to.


It comes to life in our Projects table:
type / student / first partner / second partner
map / 0001 / 0002 / 0003
map / 0002 / 0001 / 0003
map / 0003 / 0001 / 0002

Now there is less risk than there would be with the spelling of each student's names over and over.


## Foreign Key (FK)

  * foreign key (FK): the values that we use to trace our routes between tables.

Without the Students table, nobody would know who is 0001 is, but we know it's a foreign key.

So we know 0001 is Jimbo.

Another good thing about Primary Keys (PK)s and Foreign Keys (FK)s is that ehy can keep their relationship even if some of the data changes.

Ex: if one of the student's gets married and takes a different last name, we will still be able to locate them via the student_id.


## Back in the CRUD (Create, Retrieve, Update, Delete)

A database needs to be able to be CRUD-like:

  * C: Creating new rows/tables
  * R: Retrieve rows/tables
  * U: Update rows/tables
  * D: Destroy rows/tables

This is the job of Relational Database Management Sytems (RDBMS)

### Most Popular Relational Database Management Systems (RDBMS):

  * MySQL
  * PostgreSQL
  * SQLite

Though these three RDBMS vendors differ in some ways, the most important thing to understand about them is their name, SQL

  * SQL: structured query language

We will be using SQL to create our databases, add to them, and get what we want from them.

Your new best friend for this program is PostgreSQL (uaually pronounced "postgress").


## Conclusion
In this lesson we introduced:

  - What to consdier when working with relational databases
  - Primary Keys (PKs)
  - Foreign Keys (FKs)
  - Relational Database Management Systems (RDBMS)
  - SQL


## If You Want More Info
https://code.tutsplus.com/relational-databases-for-dummies--net-30244t 