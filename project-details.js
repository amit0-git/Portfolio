// This file handles the project details page functionality

document.addEventListener('DOMContentLoaded', function () {
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

  // Setup image carousel
  setupCarousel(project);

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

  // Populate learning and takeaway section (using the existing challenge field for now)
  document.getElementById('project-learning').textContent = project.challenge;

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
});

// Function to set up the carousel
function setupCarousel(project) {
  const carouselSlides = document.getElementById('project-image-carousel');
  const carouselDots = document.getElementById('carousel-dots');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  // For now, we'll use the single image as the first slide
  // In a real implementation, you'd loop through an array of images
  const slides = project.screenshots.map((src, index) => {
    return { src, alt: `${project.title} screenshot ${index + 1}` };
  });

  let currentSlide = 0;

  // Create slides
  slides.forEach((slide, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'carousel-slide';

    const img = document.createElement('img');
    img.src = slide.src;
    img.alt = slide.alt;
    img.loading="lazy";

    slideDiv.appendChild(img);
    carouselSlides.appendChild(slideDiv);

    // Create dot
    const dot = document.createElement('div');
    dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(index));
    carouselDots.appendChild(dot);
  });

  // Next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  }

  // Previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  // Go to specific slide
  function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
  }

  // Update carousel display
  function updateCarousel() {
    carouselSlides.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentSlide);
    });
  }

  // Set up event listeners
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  // Auto slide (optional)
  let slideInterval = setInterval(nextSlide, 5000);

  // Pause auto slide on hover
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });

  carouselContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 5000);
  });
}