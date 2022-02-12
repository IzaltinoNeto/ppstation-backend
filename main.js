//const { setupWebSocket } = require('./websocket');
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const routes = require("./routes");

const server = http.Server(app);

//setupWebSocket(server);

mongoose.connect(
  "mongodb+srv://admin:123@cluster0.9qmmd.mongodb.net/ppstation?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
require("./mqtt");

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(process.env.PORT || 3000);
