Book Club API

Description

This is a simple Node.js and Express-based API for a Book Club application. It provides endpoints for managing users, posts, and comments. The application uses MongoDB for database storage.

Features

User management (Create, Read, Update, Delete users)

Post management (Create, Read, Update, Delete posts)

Comment management (Create, Read, Update, Delete comments)

Middleware for logging requests and error handling

MongoDB integration using Mongoose

Technologies Used

Node.js

Express.js

MongoDB

Mongoose

dotenv (for environment variables)

Installation

Clone the repository:

git clone <repository-url>

Navigate to the project directory:

cd book-club-api

Install dependencies:

npm install

Set up environment variables:
Create a .env file in the root directory and specify your MongoDB connection string:

MONGO_URI=your_mongodb_connection_string

Start the server:

npm start

The server will start on http://localhost:3000/

API Endpoints

Users

GET /users - Retrieve all users

POST /users - Create a new user

GET /users/:id - Retrieve a user by ID

PUT /users/:id - Update a user

DELETE /users/:id - Delete a user

Posts

GET /posts - Retrieve all posts

POST /posts - Create a new post

GET /posts/:id - Retrieve a post by ID

PUT /posts/:id - Update a post

DELETE /posts/:id - Delete a post

Comments

GET /comments - Retrieve all comments

POST /comments - Create a new comment

GET /comments/:id - Retrieve a comment by ID

PUT /comments/:id - Update a comment

DELETE /comments/:id - Delete a comment

Error Handling

If an invalid endpoint is accessed, a 404 error is returned.

If a server error occurs, a JSON response with an error message is sent.

License

This project is open-source and available under the MIT License.

Author

Kumar Bijayananda