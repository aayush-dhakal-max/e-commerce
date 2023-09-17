const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes/routes");
const cookieParser = require("cookie-parser");
const connectDB = require("./database/dbConnection");

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const server = http.createServer(app);

server.listen(PORT, () => {
  connectDB();
  console.log("Server is online");
});
