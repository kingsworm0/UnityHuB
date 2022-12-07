const dotenv = require("dotenv");
const express = require("express");
const app = express();

dotenv.config();

// const port = process.env.PORT || 3000;

app.get("/users", (req, res) => {
  const userslist = {
    1: {
      name: "king arthur",
      password: "password1",
      profession: "king",
      id: 1,
    },
    2: {
      name: "rob kendal",
      password: "password3",
      profession: "code fiddler",
      id: 2,
    },
    3: {
      name: "teresa may",
      password: "password2",
      profession: "brexit destroyer",
      id: 6,
    },
  };
  res.send(userslist);
});

app.listen(3000, (req, res) => {
  console.log("Flawless Victory");
});
