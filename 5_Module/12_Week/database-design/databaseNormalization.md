# Database Normalization

Database normalization allows us to realize one of the major benefits of relational databases. We normalize our database to reduce duplicate data. 

## Denomalized Database
It is incredibly difficult to manage a database that stores the info in several places. Let's imagine that we stored our student data denomalized.

# Normalized Database
We still show that each student belongs to a cohort, but the details of the cohort are stored separately. When we need to gather this information together, we use a query to ask the database for it in the structure that we want. This is when we start joining tables together.

If we needed to change the name of a cohort for any reason we only need to change the one field in the cohorts table.

It is normal to create more tables when normalizing a databse.

## Normalization in Database (with Example)
The process of normalization organizes the data in a way that reduces redundancy.

This makes the data highly space-efficient on disk, however it can have trade-offs when retrieving large sets of related data.

  * Normalization in Database w Example: https://blog.udemy.com/normalization-in-database-with-example/ 


## First Normal Form (1NF)
The goal of this reading is to learn about the general idea of normalizing a database. We do not need to learn about all the normal forms in depth right now. 


  * Video Reference: https://blog.udemy.com/normalization-in-database-with-example/ 


First Normal Form says:

  * Each of your columns should contain JUST ONE value.

  * Each of your rows should contain JUST ONE value.

  * There should be NO repeating groups.


## Conclusion
Normalizing our database reduces duplicate or redundant data and improves data integrity. This process usually involves the creation of new tables in our database.

There are many normal forms that we can follow, but at this point, we don't need to know them all or necessarily follow them all. The most important thing to understand is why we would normalize our database. To enforce data integrity reduce duplication, and make it easier to manage our data.