const express = require("express");
const helmet = require("helmet");
const db = require("./project/project-model");

const server = express();
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API running');
  });

server.post("/api/resources", (req, res) => {
  db.addResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "error" });
    });
});

server.get("/api/resources", (req, res) => {
  db.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "error retrieving resources" });
    });
});

server.post("/api/projects", (req, res) => {
  db.addProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "error adding project" });
    });
});

server.get("/api/projects", (req, res) => {
  db.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "error retrieving projects " });
    });
});

server.post("/api/tasks", (req, res) => {
  db.addTask(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((error) => {
      res.status(500).json({ message: "Couldn't add task at this time" });
    });
});

server.get("/api/tasks", (req, res) => {
  db.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Couldn't retrieve tasks right now" });
    });
});

module.exports = server;