// This is a module for interacting with the MongoDB cluster

// Import MongoClient class from mongodb module
const { MongoClient, ObjectId } = require('mongodb');

// Import Uniform Resource Identifier for MongoDB cluster from .env file
const url = process.env.MONGODB_URL;

// // FUNCTION: Returns a new MongoClient object
// const newClient = function() {
//   return new MongoClient(uri, { useUnifiedTopology: true });
// }

// Connect to our db on the cloud
const connect = async (url) => {
  try {
    const tmp = (await MongoClient.connect(url,
      { useNewUrlParser: true, useUnifiedTopology: true })).db();
    // Connected to db
    console.log(`Connected to database: ${tmp.databaseName}`);
    return tmp;
  } catch (err) {
    console.error(err.message);
    throw new Error('could not connect to the db');
  }
};

// FUNCTION: Checks if a user is already in "users" collection
// ARGUMENTS: userId (String) - Slack ID
const userExists = async function(db, userId) {
  try {
    const result = await db.collection('users').findOne({ userId: userId });
    if (result) {
      return true;
    }
    return false;
  } catch (err) {
    throw new Error('Error checking if the player exists');
  }
}

// FUNCTION: Adds a new user to the "users" collection
// ARGUMENTS: userName (String), userId (String), userYear (String)
const addUser = async (db, newUser) => {
  try {
    const exist = await userExists(db, newUser.userId);
    if (exist) {
      console.log("User already exists in the database");
      return;
    }
    const result = await db.collection('users').insertOne(newUser);
    console.log(`Created player with id: ${result.insertedId}`);
    return result;
  } catch (err) {
    console.log(`error: ${err.message}`);
    throw new Error('Error adding the user');
  }
};

module.exports = {
  connect,
  userExists,
  addUser,
}