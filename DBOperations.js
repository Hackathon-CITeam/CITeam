// This is a module for interacting with the MongoDB cluster

// Import MongoClient class from mongodb module
const { MongoClient, ObjectId } = require("mongodb");
const post = require("./views/post");

// Import Uniform Resource Identifier for MongoDB cluster from .env file
const url = process.env.MONGODB_URL;

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

// FUNCTION: Get a user by user id
const getUserById = async (db, userId) => {
  try {
    const result = await db.collection("users").findOne({ userId: userId });
    if (!result) {
      console.log("The user does not exist!");
    } else {
      console.log(`Successfully retrieved the user ${userId}`);
      return result;
    }
  } catch (err) {
    console.log(`error: ${err.message}`);
    throw new Error(`Error retrieving the user ${userId}`);
  }
};

// FUNCTION: Edit a user by user id
const updateUser = async (db, userId, updatedUser) => {
  try {
    const result = await db.collection("users").updateOne(
      { userId: userId },
      {
        $set: updatedUser,
        // $currentDate: { lastModified: false },
      }
    );
    console.log(`Successfully updated the user to be: ${result}`);
  } catch (err) {
    console.log(`error: ${err.message}`);
    throw new Error("Error updating the user");
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

// FUNCTION: Get a post by _id
const getPostById = async (db, postId) => {
  try {
    // may change ObjectId(postId) later
    const result = await db
      .collection("posts")
      .findOne({ _id: ObjectId(postId) });
    if (!result) {
      console.log("The post does not exist!");
    } else {
      console.log(`Successfully retrieved the post ${postId}`);
      return result;
    }
  } catch (err) {
    console.log(`error: ${err.message}`);
    throw new Error(`Error retrieving the post ${postId}`);
  }
};

// FUNCTION: Edit a post by post id
const updatePost = async (db, postId, updatedPost) => {
  try {
    // console.log(postId);
    // const { _id, ...rest } = updatedPost;
    // console.log(updatePost);
    const result = await db.collection("posts").updateOne(
      { _id: ObjectId(postId) },
      {
        $set: updatedPost,
        // $currentDate: { lastModified: false },
      }
    );
    console.log(`Successfully updated the post to be: ${result}`);
  } catch (err) {
    console.log(`error: ${err.message}`);
    throw new Error("Error updating the post");
  }
};

// FUNCTION: Delete a post by post id
const deletePost = async (db, postId) => {
  try {
    const result = await db
      .collection("posts")
      .deleteOne({ _id: ObjectId(postId) });
    console.log(`Successfully deleted the post ${postId}`);
  } catch (err) {
    console.log(`error: ${err.message}`);
    throw new Error(`Error deleting the post ${postId}`);
  }
};

module.exports = {
  connect,
  userExists,
  addUser,
  getUserById,
  updateUser,
  addPost,
  getAllPosts,
  getAllPostsByUserId,
  getPostById,
  updatePost,
  deletePost,
};
