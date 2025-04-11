document.addEventListener('DOMContentLoaded', function() {
    // All existing code remains...
    
    // Add cool animation to header section
    const header = document.querySelector('header');
    if (header) {
      // Create canvas element for the animation
      const canvas = document.createElement('canvas');
      canvas.classList.add('header-animation');
      
      // Style the canvas to position it behind the header content
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.zIndex = '1';
      canvas.style.opacity = '0.2';
      
      // Insert the canvas as the first child of the header
      header.insertBefore(canvas, header.firstChild);
      
      // Make sure header has position relative to contain the canvas
      header.style.position = 'relative';
      
      // Make sure all other header content stays above the animation
      Array.from(header.children).forEach(child => {
        if (child !== canvas) {
          child.style.position = 'relative';
          child.style.zIndex = '2';
        }
      });
      
      // Initialize the animation
      const ctx = canvas.getContext('2d');
      const particles = [];
      const particleCount = 50;
      
      // Resize canvas to match header dimensions
      function resizeCanvas() {
        canvas.width = header.offsetWidth;
        canvas.height = header.offsetHeight;
      }
      
      // Create particle class
      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 5 + 1;
          this.speedX = Math.random() * 3 - 1.5;
          this.speedY = Math.random() * 3 - 1.5;
          
          // Get computed header background color
          const headerStyle = window.getComputedStyle(header);
          const headerBgColor = headerStyle.backgroundColor;
          
          // Use header text color for particles or default to a light color
          const headerTextColor = headerStyle.color || '#ffffff';
          this.color = headerTextColor;
        }
        
        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          
          // Boundary checks with bounce effect
          if (this.x > canvas.width || this.x < 0) {
            this.speedX = -this.speedX;
          }
          
          if (this.y > canvas.height || this.y < 0) {
            this.speedY = -this.speedY;
          }
        }
        
        draw() {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Initialize particles
      function initParticles() {
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle());
        }
      }
      
      // Connect particles with lines when they're close enough
      function connectParticles() {
        const maxDistance = 100;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < maxDistance) {
              // Make lines more transparent the further apart particles are
              const opacity = 1 - (distance / maxDistance);
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }
      
      // Animation loop
      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update and draw all particles
        particles.forEach(particle => {
          particle.update();
          particle.draw();
        });
        
        connectParticles();
        requestAnimationFrame(animate);
      }
      
      // Handle window resize
      window.addEventListener('resize', () => {
        resizeCanvas();
      });
      
      // Initialize everything
      resizeCanvas();
      initParticles();
      animate();
    }
  });