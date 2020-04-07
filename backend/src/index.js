const express = require('express');

const app = express();

app.get('/', (req, res) => {
  return res.json({message: 'Hello from the backend!'});
});

app.listen(3333, () => {
  console.log('🚀️ Backend started!')
});