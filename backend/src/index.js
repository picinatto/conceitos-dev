const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());

const projects = [];

// Create the middleware tp track the requests log
function logRequests(request, response, next) {
  // Get the data from the request
  const { method, url } = request;

  // Builds the log information about the request
  const logLabel = `[${method.toUpperCase()} ${url}]`;
  
  // Console log time starts
  console.time(logLabel);
  
  // Continue the flow
  next();

  // The flow returns, stop the watch and log the request data
  console.timeEnd(logLabel);
};

// Create the middleware that validates if the id is correct
function validateProjectId(request, response, next) {
  const { id } = request.params;

  // Check if the id is valid
  if(!isUuid(id)) {
    // Retorn 400 status and the request is stopped
    return response.status(400).json({ error: 'Invalid project ID.'});
  }

  // Return to the normal flow
  return next();
}

// Is going to be triggered in all application's requests
app.use(logRequests);

// Is going to be triggered on requests with the id param
app.use('/projects/:id', validateProjectId)

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