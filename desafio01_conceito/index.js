const express = require('express');
const server = express();

server.use(express.json());

const arr = [];

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  arr.push({ id: id, title: title, task: [] })
  
  return res.json(arr[id - 1]);
});

server.get('/projects', (req, res) => {
  return res.json(arr);
});

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  arr[id].title = title;

  return res.json(arr[id]);
});

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  arr.splice(id, 1);

  return res.json();
});

server.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  arr[id].task.push(title);

  return res.json(arr[id]);
})



server.listen(3333);