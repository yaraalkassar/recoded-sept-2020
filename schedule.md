# Schedule

## Day 1:

On the first day we'll talk about what _Node.js_ is, and its place in the world of modern web development technologies. We will create a local web server that hosts static content using _Node.js_ and _Express_, and we will start to visualize how our Bulletin Board will look and work.

- **Welcome!**
- **A Day In The Life of an HTTP Request**
- **Introduction to Node.js**
- **Serving Static Content with Express**

## Day 2:

On the second day we'll talk about templating engines - what they can do for us, and what their limitations are - then we will convert our static HTML pages into dynamic _EJS templates_.

Next we will talk about our website's public data APIs and how to make requests from client-side javascript using _jQuery_ to server-side endpoints.

We will use this knowledge to finish our client side code changes.

- **Review/Q&A**
- **Templating Engines Hands-On with EJS**
- **Designing Web APIs**
- **Implementing our Web APIs**
- **AJAX with jQuery**
- **Connecting Sign-In, Sign-Up, and Upvote Buttons**

## Day 3:

Today we turn our attention to the data layer of our application. By the end of the day, we will have a working authentication system and the data for our site will be stored and retrieved from a _SQLite_ database.

_Authentication_ can be a complex topic. We'll discuss the various ways users can sign in to our website, and we'll use _Passport_ to setup local username-password authentication for our website.

Then we will talk briefly about data storage options commonly used on the web and how they differ. We'll discuss the concepts of _normalized_ and _denormalized_ data, _consistency_, and _atomic operations_. Then we'll dive deeper into _relational databases_, using them with _SQL_, and how to perform _CRUD_ operations with them. 

We'll talk briefly about _primary keys_, _foreign keys_, and _indexes_. We'll use these skills to implement a _SQLite_ backend for our website to store our users and posts.

- **Review/Q&A**
- **Web Authentication Concepts**
- **Implementing Authentication**
- **Data Persistence and Relational Database Concepts**
- **Introduction to SQL**
- **Using SQLite in Node.js**

## Day 4:

On the fourth day we'll learn how to take SQL beyond simple CRUD operations and perform more complex queries. We will use this power of SQL to implement our "Trending Posts" list - returning only recent posts with a large number of upvotes. We will use `JOIN`s to include usernames in our posting lists, and we will briefly discuss some challenges with database maintenence as your applications evolve.

- **Review/Q&A**
- **The `TOP`, `WHERE`, and `ORDER BY` clauses**
- **The `GROUP BY` clause and aggregating data**
- **Types of `JOIN`s, and normalizing our user data**
- **Transactions**
- **Wrapping Up The Bulletin Board Site**

## Day 5:

On our last day we will review what we've covered in the workshop and talk about any common areas of trouble. Then we will discuss the follow-up project, some logistics, and break into teams for group project orientation!

- **Review / Q&A**
- **Project Kickoff**
