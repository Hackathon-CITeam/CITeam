// This is a module for interacting with the MongoDB cluster

// Import MongoClient class from mongodb module
const { MongoClient, ObjectId } = require("mongodb");
const post = require("./views/post");

// Import Uniform Resource Identifier for MongoDB cluster from .env file
const url = process.env.MONGODB_URL;

// FUNCTION: Return a new MongoClient object
// const newClient = function() {
//   return new MongoClient(uri, { useUnifiedTopology: true });
// }

// FUNCTION: Connect to our db on the cloud
const connect = async (url) => {
  try {
    const tmp = (
      await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    ).db();
    // Connected to db
    console.log(`Connected to database: ${tmp.databaseName}`);
    return tmp;
  } catch (err) {
    console.error(err.message);
    throw new Error("Could not connect to the db");
  }
};

// FUNCTION: Check if a user is already in "users" collection
// ARGUMENTS: userId (String) - Slack ID
const userExists = async function (db, userId) {
  try {
    const result = await db.collection("users").findOne({ userId: userId });
    if (result) {
      return true;
    }
    return false;
  } catch (err) {
    throw new Error("Error checking if the player exists");
  }
};

// FUNCTION: Add a new user to the "users" collection
// ARGUMENTS: userName (String), userId (String), userYear (String)
const addUser = async (db, newUser) => {
  try {
    // const exist = await userExists(db, newUser.userId); // newUser.userId should be changed!
    // if (exist) {
    //   console.log("User already exists in the database");
    //   return;
    // }
    const result = await db.collection("users").insertOne(newUser);
    console.log(`Created player with id: ${result.insertedId}`);
    return result;
  } catch (err) {
    console.log(`error: ${err.message}`);
    throw new Error("Error adding the user");
  }
};

// FUNCTION: Add a new post to the "posts" collection
const addPost = async (db, newPost) => {
  try {
    const result = await db.collection("posts").insertOne(newPost);
    console.log("Successfully created a new post!");
    return result;
  } catch (err) {
    console.log(`error: ${err.message}`);
    throw new Error("Error adding the post");
  }
};

// FUNCTION: Return an array of all posts
const getAllPosts = async (db) => {
  try {
    const posts = await db.collection("posts").find({}).toArray();
    console.log("Successfully retrieved all posts!");
    return posts;
  } catch (err) {
    console.log(`error: ${err.message}`);
    throw new Error("Error retrieving posts");
  }
};

// FUNCTION: Get all posts by user id
const getAllPostsByUserId = async (db, userId) => {
  try {
    const result = await db.collection("posts").find({}).toArray();
    const posts = result.filter((post) => post.userId == userId);
    console.log(`Successfully retrieved all posts of user ${userId}!`);
    return posts;
  } catch (err) {
    console.log(`error: ${err.message}`);
    throw new Error(`Error retrieving posts of user ${userId}`);
  }
};

// FUNCTION: Edit a post
// TODO: not by userId, by course name (?)
const updatePost = async (db, updatedPost) => {
  try {
    const userID = updatePost.userId;
    const { userId, ...rest } = updatedPost;
    const result = await db.collection("posts").updateOne(
      { userId: userID },
      {
        $set: updatePost,
        $currentDate: { lastModified: true },
      }
    );
    console.log(`Successfully updated the post. Updated post: ${result}`);
    return result;
  } catch (err) {
    console.log(`error: ${err.message}`);
    throw new Error("Error updating the post");
  }
};

// FUNCTION TODO: Delete a post

// FUNCTION TODO: A user joins a channel

// FUNCTION TODO: A user leaves a channel

module.exports = {
  connect,
  userExists,
  addUser,
  addPost,
  getAllPosts,
  getAllPostsByUserId,
  updatePost,
};
