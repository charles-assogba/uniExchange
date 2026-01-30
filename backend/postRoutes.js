// fIRST IMPORT EXPRESS
const express = require("express");
//get access to the database mongoDB by calling getdb function in connect file
const database = require("./connect");
//Import ObjectId from mongodb
const ObjectId = require("mongodb").ObjectId;

//create router object using express. This allow easier to create post route
let postRoutes = express.Router();

//#1 - Retrieve all
//http://localhost:3000/post
postRoutes.route("/post").get(async (request, response) => {
  let db = database.getdb();
  let data = await db.collection("post").find({}).toArray();
  if (data.length > 0) {
    response.json(data);
  } else {
    throw new Error("Data was not found :(");
  }
});

//#2 - Retrieve one
postRoutes.route("/post/:id").get(async (request, response) => {
  let db = database.getdb();
  let data = await db
    .collection("post")
    .findOne({ _id: new ObjectId(request.params.id) });
  if (Object.keys(data).length > 0) {
    response.json(data);
  } else {
    throw new Error("Data was not found :(");
  }
});
//#3 - Create one
postRoutes.route("/post").post(async (request, response) => {
  let db = database.getdb();
  let mongoObject = {
    title: request.body.title,
    price: request.body.price,
    description: request.body.description,
  };
  let data = await db.collection("post").insertOne(mongoObject);
  response.json(data);
});

//#4 - Update one
postRoutes.route("/post/:id").put(async (request, response) => {
  let db = database.getdb();
  let mongoObject = {
    $set: {
      title: request.body.title,
      price: request.body.price,
      description: request.body.description
    }, 
  };
  let data = await db.collection("post").updateOne({_id: new ObjectId(request.params.id)},mongoObject);
  response.json(data);
});

//#5 - Delete one
postRoutes.route("/post/:id").delete(async (request, response) => {
  let db = database.getdb();
  let data = await db.collection("post").deleteOne({ _id: new ObjectId(request.params.id) });
   response.json(data)
});

module.exports = postRoutes