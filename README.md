# Social_Network_API
An API for a social network web app where users can share their thoughts, react to friends, and create a friend list. Using Express.js for routing, a MongoDB database, and the Mongoose ODM. 

## AS A social media startup

I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data


## Acceptance Criteria

GIVEN a social network API

- It's WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database

- It's WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

- It's WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database

- It's done WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

## Mock-Up

### The following animations show examples of the application's API routes being tested in Insomnia .

### The following animation shows GET routes to return all users and all thoughts being tested in Insomnia:
![](./18-nosql-homework-demo-01.gif)

### The following animation shows GET routes to return a single user and a single thought being tested in Insomnia:
![](./18-nosql-homework-demo-02.gif)

### The following animation shows the POST, PUT, and DELETE routes for users being tested in Insomnia:
![](./18-nosql-homework-demo-03.gif)

### The following animation shows the POST and DELETE routes for a user’s friend list being tested in Insomnia:
![](18-nosql-homework-demo-04.gif)


### In addition it should show the POST and DELETE routes for reactions to thoughts being tested in Insomnia.

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.