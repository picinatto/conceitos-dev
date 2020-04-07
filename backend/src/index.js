const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

app.get('/projects', (request, response) => {
  const { title } = request.query;

  const results = title
    ? projects.filter(project => project.title.includes(title))
    : projects;

  return response.json(results);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response) => {
  // Get the id from the query params
  const { id } = request.params;

  // Get the title and owner data from the request body
  const { title, owner } = request.body;
  
  // Look for which index the project is based on the id provided
  const projectIndex = projects.findIndex(project => project.id === id);

  // Check if the provided id is valid (not found is -1)
  if(projectIndex < 0) {
    // if not valid, return status 400 not found
    return response.status(400).json({ error:'Project not found!' });
  }

  // Create a new project object (with the new data but same id)
  const project = {
    id,
    title,
    owner,
  };

  // Change the data for the project by the index to the new one
  projects[projectIndex] = project;

  return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
  // Get the id from the query params
  const { id } = request.params;
  
  // Look for which index the project is based on the id provided
  const projectIndex = projects.findIndex(project => project.id === id);

  // Check if the provided id is valid (not found is -1)
  if(projectIndex < 0) {
    // if not valid, return status 400 not found
    return response.status(400).json({ error:'Project not found!' });
  }

  // If found remove the project by the index found
  projects.splice(projectIndex, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log('🚀️ Backend started!')
});