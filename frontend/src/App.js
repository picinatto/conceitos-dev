// Import the use state for updating the refreshing the interface when the value changes
// Import the useEffect for letting the interface know when a component is loaded
import React, { useState, useEffect } from 'react';
// Import the api to communicate with the backend
import api from './services/api';
// Import the global css stylesheet
import './App.css';
// Import the Header React Component
import Header from './components/Header';

function App() {
  // Instantiate the projects variable
  const [projects, setProjects] = useState([]);
  // Set the use effect to load the data from the api when to app is loading
  useEffect(() => {
    // Use the GET method in the route project and when the data is returnend (then)
    //  update the setProjects
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);
  // Logic to add data from the frontend to the backend
  async function handleAddProject() {
    // POST in the route projects the data bellow
    const response = await api.post('projects', {
        title: `Projeto enviado pelo frontend ${Date.now()}`, 
        owner: "Ricardo Picinatto" 
    });
    // Instantiate the project variable from the response return
    //  with data just added on the backend
    const project = response.data;
    // Update the projects variable using setProjects
    //  that will automatically update the UI
    setProjects([...projects, project]);
  }
  // return the elements that will be rendered in the UI
  return(
    <>
      <Header title="Projects" />
      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}
// Export the App to be imported
export default App;