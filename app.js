const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    user = JSON.parse(data);
  }
});
//1 Kirish code
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 MongoDB
const db = require("./server").db();
const mongodb = require("mongodb");
//3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing code
app.get("/", (req, res) => {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.error(err);
        res.end("Something went wrong");
      } else {
        res.render("plan", { items: data });
      }
    });
});
// res.json({test:"success"})
app.post("/create-item", (req, res) => {
  console.log("user entered /create-form");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    console.log(data.ops[0]);
    res.json(data.ops[0]);
  });
});

app.post("/find-id", (req, res) => {
  const id = req.body.id;
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      res.json({ state: "successfull" });
    }
  );
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;
