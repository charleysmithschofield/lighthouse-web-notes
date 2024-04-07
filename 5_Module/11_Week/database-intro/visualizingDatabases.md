# Visualizing Databases

## Entity-Relationship Diagrams

  * Entity Relationship Diagram (ERD): a kind of diagram that shows each table as a box. It links the boxes together indicating what type of relationship they have with each other (such as one-to-many or one-to-one).

  * Video Reference: https://www.youtube.com/watch?v=-fQ-bRllhXc 


## The Five Parts of an ERD

  1. Entity:
    A person, place or thing you want to track in a database.

    * entity instance: each occurence of an entity, this will be each record or "row" in a table.

    ex: each student is an entity of the table "students"


  2. Attribute: 
    Describes various characteristics about an individual entity.

    Each attribute becomes the columns of the table.

    Ex: each student's first names


  3. Primary Key (PK):
    An attribute or group of attributes that uniquely identifies an instance of the entity.

    Ex: a student's id #

  4. Relationship:
    Describes how one or more entities interact with each other. Usually relationships are described with a verb.

    Ex: A link between the entity (student) and their phone number.


  5. Cardinality:
    The count of instances that are allowed or are necessary between entity relationships.

    Cardinality is broken down into two parts: minimum and maximum.

    - Minimum: minimum number of instances that are required in the relationship.

    - Maximum: the maximum number of instances that are required in the relationship.

    Ex: A student can have one or multiple phone numbers.


## Business Rules for ERDs

  1. An employee can have 0, 1 or several telephone numbers.

  2. There are a finite number of phone number combinations that exist. Over time, different employees can have the same phone number, each at a different time.

  3. An employee can be paid hourly or by a yearly salary. Depending on how they are paid we need to collect specific info that applies only to that type of employee.

  4. An employee can be assigned to many projects, however a single project can have multiple employees assigned to it.


## Conclusion
In this video, we learned about the different parts of an entity-relationship diagram:

  * Entity
  * Attribute
  * Primary Key
  * Relationship
  * Cardinality