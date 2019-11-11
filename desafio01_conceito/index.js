const express = require('express');
const server = express();

server.use(express.json());

// middleware
function checkUserExists(req, res, next) {
  const { id } = req.params;

  if (arr[id] == null) {
    return res.json({ error: 'User does not exists!' });
  }

  req.item = arr[id];

  return next();
}

let count = 0;
server.use((req, res, next) => {
  
  console.log(`${count += 1} requisicao feitas`);

  return next();
})


const arr = [];

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  arr.push({ id: id, title: title, task: [] })
  
  return res.json(arr[id - 1]);
});

server.get('/projects', (req, res) => {
  return res.json(arr);
});

server.put('/projects/:id', checkUserExists, (req, res) => {
  const { title } = req.body;

  req.item.title = title;

  return res.json(arr[id]);
});

server.delete('/projects/:id', checkUserExists, (req, res) => {
  const { id } = req.params;
  
  arr.splice(id, 1);

  return res.json();
});

server.post('/projects/:id/tasks', checkUserExists, (req, res) => {
  const { title } = req.body;

  req.item.task.push(title);

  return res.json(req.item);
})



server.listen(3333);