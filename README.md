# Book Club API

This is a simple **Book Club API** built with **Node.js**, **Express.js**, and **MongoDB**. It provides endpoints for managing users, posts, and comments related to a book club.

## Features

- **User Management**: Create and manage users.
- **Post Management**: Users can create, manage and delete posts.
- **Middleware Logging**: Logs incoming requests with timestamps.
- **Error Handling**: Handles errors, validation errors and unknown endpoints gracefully.

## API Endpoints

### Users
- `GET /users` - Retrieve all users
- `POST /users` - Create a new user
- `GET /users/:id` - Get user by ID
- `PATCH /users/:id` - Update user by ID


### Posts
- `GET /posts` - Retrieve all posts
- `POST /posts` - Create a new post
- `GET /posts/:id` - Get post by ID
- `PATCH /posts/:id` - Patch post by ID
- `DELTE /posts/:id` - Delete post by ID, also checks and deletes all comments made on that post


### Comments 
- `GET /comments` - Retrieve all comments
- `POST /comments` - Create a new comment
- `PATCH /comments/:id` - Patch comment by ID
- `DELTE /comments/:id` - Delete comment by ID


## Project Structure

```
/book-club-api
│── db/conn.js            # Database connection file
│── routes/users.js       # User routes
│── routes/posts.js       # Post routes
│── routes/comments.js    # Comment routes
│── models/users.js       # User Schema
│── models/posts.js       # Post Schema
│── models/comments.js    # Comment Schema    
│── server.js             # Main Express server
│── .env                  # Environment variables
│── package.json          # Dependencies and scripts
```

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **dotenv** 
