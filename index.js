const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");

app.set("view engine", "ejs");

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, "uploads/");
  },
  filename: (request, file, callback) => {
    callback(null, file.originalname + " - " + new Date());
  },
});

const upload = multer({ storage });

app.get("/", (request, response) => {
  response.render("index");
});

app.post("/upload", upload.single("loadFile"), (request, response, next) => {
  response.render("result");
});

app.listen(8080, () => {
  console.log("Server iniciado com sucesso");
});
