var express = require("express");
var user = require("../src/db/mongoose");

var router = new express.Router();
router.post("/users", (req, res) => {
  const db = new user(req.body);
  console.log(db);
  db.save()
    .then(() => {
      console.log("success");
      res.send(db);
    })
    .catch((error) => {
      console.log(error);
      res.statusCode = 401;
      res.send(error);
    });
});
router.get("/users", (req, res) => {
  user
    .find({})
    .then((users) => {
      res.send(users);
    })
    .catch((error) => {
      res.status(404).send(error);
    });
});
router.get("/users/:i", (req, res) => {
  user
    .findById(req.params.i)
    .then((user1) => {
      if (!user1) {
        res.status(404).send("user not found");
      }
      res.send(user1);
    })
    .catch((error) => {
      res.send(error);
    });
});
router.patch("/users/:id", async (req, res) => {
  const r = Object.keys(req.body);
  const updates = ["description", "completed", "password"];

  for (let i of r) {
    if (!updates.includes(i)) {
      return res.status(400).send("Not a valid update");
    }
  }
  try {
    const u = await user.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.send(u);
  } catch (e) {
    res.status(404).send(e);
  }
});
router.delete("/users/:id", async (req, res) => {
  try {
    const person = await user.findByIdAndDelete(req.params.id);
    if (!person) {
      return res.status(404).send("user not found");
    }
    return res.send(person);
  } catch (e) {
    res.status(500).send(e);
  }
});
module.exports = router;
