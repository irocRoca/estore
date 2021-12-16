const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");

require("dotenv").config();
require("./config/database");

const app = express();
app.use(express.json());

// Serve to Production Code
// app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
//app.use(express.static(path.join(__dirname, "build")));

// API Request
app.use("/api/products", require("./routes/product"));

// Return index file
// app.use("/*", (req, res) =>
//   res.sendFile(path.join(__dirname, "build", "index.html"))
// );

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on ${port}`));
