const express = require("express");

const hubsRouter = require("./hubs/hubs-router.js");
const lessonsRouter = require("./lessons/lessons-router.js");
const studentsRouter = require("./students/students-router");
const server = express();

//middleware
server.use(express.json());

//endpoint
server.use("/api/hubs", hubsRouter); // everything that begins with /api/hubsit will be handled by hubsRouter

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

//lessons endpoints
server.use("/api/lessons", lessonsRouter);

//server.get('/api/students)
server.use("/api/students", studentsRouter);

// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub
//write custom midleware
server.use((req, res) => {
  res.status(404).send("Aint nobody got time for dat!");
});

server.listen(4000, () => {
  console.log("\n*** Server Running on http://localhost:4000 ***\n");
});
