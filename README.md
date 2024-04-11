
Assignment 1: Building an API with MySQL using Node.js 

Objective: Develop a RESTful API using Node.js and MySQL for managing a simple blog  application. 

Requirements: 

1. Set up a MySQL database with tables for storing blog posts and users.

2. Implement CRUD (Create, Read, Update, Delete) operations for blog posts and users  using Node.js and MySQL. 

3. Create API endpoints for interacting with the blog posts andusers data.

4. Implement authentication using JWT (JSON Web Tokens) for user authentication and  authorization. 

5. Write unit tests using a testing framework such as Mocha and Chai to ensure the API  endpoints function correctly. 


instructions for setting up and running the application. 

first we will have to Install all the dependencies  (both api and client)by doing npm install

then we will have to make connection with MySQL database and then we will have to add data to it .
by entering all these values in db.js --
for ex-
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "blog_app",

then we will have to run this 
npm start:both