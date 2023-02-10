import React, { useState, useEffect } from 'react';
import './styles/Work.css';

function Work() {
  const path = window.location.pathname;
  const projId = path.split('/').pop();

  const url = 'https://gyarb-backend.azurewebsites.net/wiki/' + projId;

  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((response) => setProject(response.project));
  }, []);

  if (project) {
    return (
      <>
        <div className="text-info">
          <h3 className="subject">{project.subject}</h3>
          <h2 className="title">{project.title}</h2>
          <h3 className="author">{project.author}</h3>
        </div>
        <div className="text-main">
          <p className="text-main">{project.text}</p>
        </div>
        <div className="text-footer">
          <div className="image-container"></div>
          <h3 className="timestamp">{project.createdAt}</h3>
        </div>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default Work;
