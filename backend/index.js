const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const multer = require("multer");
const authRoute = require("./routes/auth");
const categoriesRoute = require("./routes/categories");
const postsUser = require("./routes/posts");
const usersRoute = require("./routes/users");
const cors = require("cors");

dotenv.config();
app.use(express.json());
app.use(morgan("common"));

mongoose.connect(
  "mongodb+srv://root:123@cluster0.g4kuqcq.mongodb.net/blogApp?retryWrites=true&w=majority&appName=Cluster0"
);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/images", express.static(path.join(__dirname, "/images")));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploaded successfully");
  } catch (error) {
    console.error(error);
  }
});

app.use("/api/auth", authRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/posts", postsUser);
app.use("/api/users", usersRoute);

app.listen("5000", () => {
  console.log("Backend is running.");
});
