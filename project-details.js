// This file handles the project details page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Get the project ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (!projectId) {
      // If no project ID is provided, redirect to projects section on homepage
      window.location.href = 'index.html#projects';
      return;
    }
    
    // Find the project data for the specified ID
    const project = projectsData.find(p => p.id === projectId);
    
    if (!project) {
      // If project not found, show error and link to return
      document.querySelector('.project-details-content').innerHTML = `
        <div class="error-message">
          <h2>Project Not Found</h2>
          <p>Sorry, the project you're looking for doesn't exist or has been removed.</p>
          <a href="index.html#projects" class="btn">View All Projects</a>
        </div>
      `;
      return;
    }
    
    // Update page title
    document.title = `${project.title} | Amit Verma Portfolio`;
    
    // Populate project details
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-image').src = project.image;
    document.getElementById('project-image').alt = `${project.title} screenshot`;
    document.getElementById('project-overview').textContent = project.overview;
    
    // Populate technologies
    const techContainer = document.getElementById('project-tech');
    project.tech.forEach(tech => {
      const techTag = document.createElement('div');
      techTag.className = 'tech-tag';
      techTag.innerHTML = tech.icon ? `<i class="${tech.icon}"></i> ${tech.name}` : tech.name;
      techContainer.appendChild(techTag);
    });
    
    // Populate key features
    const featuresContainer = document.getElementById('key-features');
    project.keyFeatures.forEach(feature => {
      const li = document.createElement('li');
      li.textContent = feature;
      featuresContainer.appendChild(li);
    });
    
    // Populate challenge and process sections
    document.getElementById('project-challenge').textContent = project.challenge;
    document.getElementById('project-process').textContent = project.process;
    
    // Set up links
    const liveDemo = document.getElementById('live-demo');
    const githubRepo = document.getElementById('github-repo');
    
    if (project.demoLink) {
      liveDemo.href = project.demoLink;
    } else {
      liveDemo.innerHTML = '<i class="fas fa-external-link-alt"></i> Demo Coming Soon';
      liveDemo.classList.add('disabled-link');
      liveDemo.href = 'javascript:void(0)';
    }
    
    githubRepo.href = project.repoLink;
    
    // Populate related projects (excluding current project)
    const relatedProjectsContainer = document.getElementById('related-projects');
    
    // Get 3 random projects that aren't the current one
    const relatedProjects = projectsData
      .filter(p => p.id !== projectId)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    relatedProjects.forEach(relatedProject => {
      const card = document.createElement('a');
      card.className = 'related-project-card';
      card.href = `project-details.html?id=${relatedProject.id}`;
      
      const techList = relatedProject.tech
        .map(t => `<span>${t.name}</span>`)
        .join('');
      
      card.innerHTML = `
        <div class="related-project-img" style="background-image: url('${relatedProject.image}')"></div>
        <div class="related-project-info">
          <h4>${relatedProject.title}</h4>
          <div class="related-project-tech">
            ${techList}
          </div>
        </div>
      `;
      
      relatedProjectsContainer.appendChild(card);
    });
  });