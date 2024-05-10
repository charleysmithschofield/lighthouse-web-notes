# Relationships Betweeen Tables

While designing a database, we're going to end up with lots of tables.

We have to determine how the tables relate to one another.

The relationships between tables are based on:
  
  * Primary Keys
  * Foreign Keys

The two main types of relationships between tables are:

  * one-to-many
  * many-to-many


## One to Many Relationship

  * Video Reference: https://www.youtube.com/watch?v=-C2olg3SfvU&t=29s

When defining relationships between tables we will often want to create a one-to-many relationship. 

  Ex: a cohort having many students

This about how we would model this data in JavaScript. A corhort has many students:

    const cohort = {
      name: "FEB02",
      students: ["Amand Hilll", "Stephanie Wolff"]
    };

The cohort has many things, so we might even add an array to cohorts.

This works well in Javascript, but works terribly in relational databases.

Our cohorts table cannot contian an array of students, instead we will need to accomplish this relationship by adding a single row that contains a single value to a single table.

We place a foreign key on the students table that points to a record in the cohorts table.


## Foreign Key
A foreign key is a field in one table that refers to a primary key in another table.

Foreign keys are how we model relationships in a relational database.

When we have a one-to-many relationships, the foreign key goes on the many side.

So when a cohort has many students, the foreign key goes on the students side.

  ** The Foreign Key is on the many side **

## Many to Many Relationship

  * Video Reference: https://www.youtube.com/watch?v=1eUn6lsZ7c4   

Imagine our requirements change and a student is also suddenly able to have many cohorts.

  * A student can have many cohorts.

  * A cohort can have many students.

This is now a many to many relationship.


## Join Tables
But in a relational database there is no way of directly modeling a many-to-many relationship. Instead, we turn this into two one-to-many relationships using a 'join' table.

  * join table: represents the many-to-many relationship between two tables

Join tables hold lots of info relevant to the relationship. In this case an assistance request joins students to teachers.

There are no direct many-to-many relatiobships, only multiple one-to-many relationships using a join table.