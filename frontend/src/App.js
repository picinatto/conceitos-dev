import React, { useState } from 'react';

import './App.css';

import backgroundImage from './assets/background-image.jpeg'

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Desenvolvmento de app', 'Frontend app']);

  function handleAddProject() {
    setProjects([...projects, `Novo projeto ${Date.now()}`]) // Imutabilidade: O array esta sendo recriado, não alterado
    //projects.push(`Novo projeto ${Date.now()}`); // Aqui o array é apenas alterado
  }

  return(
    <>
      <Header title="Projects" />
      <img src={backgroundImage} />
      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>
      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;