// This file contains the data for all projects
const projectsData = [
    {
      id: 'tic-tac-toe',
      title: 'Tic Tac Toe',
      image: '/assets/Screenshot 2025-04-07 165907.png',
      overview: 'A classic Tic Tac Toe game with a modern, responsive interface that allows two players to compete against each other. The game includes features like move tracking, win detection, and game statistics.',
      description: 'This Tic Tac Toe game project was built to practice DOM manipulation and event handling in vanilla JavaScript. It features a clean, responsive design with intuitive controls and visual feedback for game progress.',
      tech: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3' },
        { name: 'JavaScript', icon: 'fab fa-js' }
      ],
      keyFeatures: [
        'Interactive game board with hover effects',
        'Real-time win detection algorithm',
        'Game state tracking and score keeping',
        'Responsive design that works on all devices',
        'Clean, modern UI with smooth animations'
      ],
      challenge: 'The main challenge was implementing an efficient win detection algorithm that would check for winning combinations after each move without impacting performance. I solved this by using a combination of arrays and conditional logic to check only the relevant winning patterns based on the last move made.',
      process: 'I started by wireframing the UI and planning the game logic. I then built the HTML structure, styled it with CSS, and implemented the core game functionality in JavaScript. I focused on creating modular, reusable functions and maintaining clean code practices throughout development.',
      demoLink: 'https://tic-tac-toe-seven-psi-45.vercel.app/',
      repoLink: 'https://github.com/amit0-git/Tic-Tac-Toe'
    },
    {
      id: 'sudoku',
      title: 'Sudoku',
      image: '/assets/sudoku.png',
      overview: 'A fully interactive Sudoku game with multiple difficulty levels, hint system, and solution validation. The game generates random puzzles and allows users to input numbers with error checking.',
      description: 'This Sudoku application demonstrates my ability to work with complex algorithms and game logic. It features a puzzle generator, solver, and validator, all implemented in vanilla JavaScript.',
      tech: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3' },
        { name: 'JavaScript', icon: 'fab fa-js' }
      ],
      keyFeatures: [
        'Dynamic puzzle generation with varying difficulty levels',
        'Real-time input validation and error highlighting',
        'Hint system to help players progress',
        'Timer and move counter to track performance',
        'Clean, intuitive user interface with keyboard support'
      ],
      challenge: 'The biggest challenge was creating an algorithm that could generate valid, solvable Sudoku puzzles with varying levels of difficulty. I implemented a backtracking algorithm to solve and generate puzzles, then developed a difficulty rating system based on the solving techniques required.',
      process: 'Development began with researching Sudoku algorithms and solving techniques. I implemented the core game logic first, followed by the UI components. I used test-driven development to ensure the puzzle generator and validator worked correctly before integrating them with the user interface.',
      demoLink: 'https://sudoku-psi-inky.vercel.app/',
      repoLink: 'https://github.com/amit0-git/Sudoku'
    },
    {
      id: 'stopwatch',
      title: 'Stopwatch',
      image: '/assets/stopwatch.png',
      overview: 'A precise, feature-rich stopwatch application built with React. It offers millisecond accuracy, lap timing, and a clean, intuitive interface for time tracking needs.',
      description: 'This stopwatch application showcases my React skills and attention to detail in UI/UX design. It utilizes React state management and effects to create a responsive, accurate timing tool.',
      tech: [
        { name: 'React', icon: 'fab fa-react' },
        { name: 'CSS3', icon: 'fab fa-css3' },
        { name: 'HTML5', icon: 'fab fa-html5' }
      ],
      keyFeatures: [
        'Millisecond precision timing',
        'Lap time recording and display',
        'Start, pause, resume, and reset functionality',
        'Responsive design that works on all devices',
        'Elegant animations for state transitions'
      ],
      challenge: 'The main technical challenge was ensuring accurate time tracking without performance degradation. I solved this by using React\'s useEffect and useState hooks efficiently, implementing a custom interval system that minimizes re-renders while maintaining timing accuracy.',
      process: 'I designed the application with a focus on simplicity and usability. The development process involved creating reusable components, implementing the core timing logic, and refining the UI through multiple iterations based on user feedback and testing.',
      demoLink: 'https://stopwatch-opal-sigma.vercel.app/',
      repoLink: 'https://github.com/amit0-git/Stopwatch'
    },
    {
      id: 'techfest-1',
      title: 'Techfest Website 1',
      image: '/assets/techfest.png',
      overview: 'A dynamic website for a college technical festival, featuring event listings, registration forms, schedules, and interactive elements to engage participants.',
      description: 'This tech fest website was developed to promote and manage a college technical event. It includes features for event registration, schedule display, team information, and sponsor showcase.',
      tech: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3' },
        { name: 'JavaScript', icon: 'fab fa-js' }
      ],
      keyFeatures: [
        'Dynamic event listings with filtering options',
        'Registration system with form validation',
        'Interactive schedule with timeline view',
        'Team and sponsor showcase sections',
        'Mobile-responsive design with animations'
      ],
      challenge: 'Creating an engaging, visually appealing website that could handle high traffic during the event period was the primary challenge. I implemented performance optimizations like lazy loading, efficient CSS, and minimized JavaScript to ensure smooth performance even on slower connections.',
      process: 'The development process involved close collaboration with event organizers to understand requirements. I created wireframes and mockups before implementation, then developed the site in phases, starting with core content and progressively adding interactive features.',
      demoLink: 'https://techvyom-2024.vercel.app/',
      repoLink: 'https://github.com/amit0-git/Techvyom-2k24'
    },
    {
      id: 'infisurf',
      title: 'Infisurf',
      image: '/assets/name (2).png',
      overview: 'A desktop browser application built with Python and PyQt that offers a lightweight, privacy-focused web browsing experience with customizable features.',
      description: 'Infisurf is a custom web browser built using Python and PyQt. It demonstrates my ability to work with desktop application development, UI frameworks, and web technologies in a single project.',
      tech: [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'PyQt', icon: '' }
      ],
      keyFeatures: [
        'Tabbed browsing interface',
        'Bookmarking and history tracking',
        'Privacy features including cookie management',
        'Custom UI with light and dark themes',
        'Configurable search engines and home page'
      ],
      challenge: 'The main challenge was integrating the web rendering engine with the PyQt UI framework and ensuring cross-platform compatibility. I had to carefully manage memory usage and optimize rendering performance to create a smooth browsing experience.',
      process: 'Development began with research into browser architecture and PyQt capabilities. I first built a minimal viable product with basic browsing functionality, then iteratively added features based on testing and feedback. The UI was designed with simplicity and usability as primary goals.',
      demoLink: 'https://infisurf-website.vercel.app/',
      repoLink: 'https://github.com/amit0-git/Infisurf'
    },
    {
      id: 'covid-19',
      title: 'COVID 19',
      image: '/assets/covid.png',
      overview: 'An informational website providing COVID-19 statistics, safety guidelines, and resources. Features real-time data visualization and mobile-friendly design.',
      description: 'This COVID-19 information website was developed during the pandemic to provide accurate, up-to-date information and resources to the public. It showcases my ability to work with APIs, data visualization, and informational architecture.',
      tech: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3' },
        { name: 'JavaScript', icon: 'fab fa-js' }
      ],
      keyFeatures: [
        'Real-time COVID-19 statistics with data visualization',
        'Interactive maps showing case distribution',
        'Comprehensive safety guidelines and prevention tips',
        'Resource directory for testing and vaccination',
        'Mobile-optimized design for on-the-go access'
      ],
      challenge: 'The primary challenge was presenting complex, potentially frightening information in a clear, accessible manner without causing additional anxiety. I focused on data visualization techniques and clear information hierarchies to make statistics and guidelines easy to understand.',
      process: 'I began by researching authoritative sources and available data APIs. The design process prioritized clarity and ease of navigation. Development involved integrating multiple data sources and creating responsive visualizations that worked across device sizes.',
      demoLink: 'https://covid-19-website-self.vercel.app/',
      repoLink: 'https://github.com/amit0-git/Covid-19-Website'
    },
    {
      id: 'techfest-2',
      title: 'Techfest Website 2',
      image: '/assets/techfest2.png',
      overview: 'A redesigned and enhanced version of the college tech fest website with improved UI/UX, additional features, and better performance optimization.',
      description: 'This second iteration of the tech fest website builds upon the success of the first version, with a completely redesigned interface, enhanced functionality, and improved performance. It showcases my growth as a developer and ability to refine projects based on feedback.',
      tech: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3' },
        { name: 'JavaScript', icon: 'fab fa-js' }
      ],
      keyFeatures: [
        'Modernized UI with advanced animations and interactions',
        'Enhanced event registration and management system',
        'Integrated social media sharing and promotion tools',
        'Improved performance and loading times',
        'Expanded content areas including blog and gallery sections'
      ],
      challenge: 'The main challenge was implementing a more complex design with advanced animations while maintaining good performance on all devices. I used advanced CSS techniques and optimized JavaScript to create smooth animations without compromising load times.',
      process: 'Based on feedback from the first version, I created a comprehensive redesign plan focusing on pain points and enhancement opportunities. I implemented new features in order of priority, thoroughly testing each addition before moving to the next item.',
      demoLink: 'https://techvyom-website.vercel.app/',
      repoLink: 'https://github.com/amit0-git/techvyom-website'
    },
    {
      id: 'college-event-manager-1',
      title: 'College Event Manager',
      image: '/assets/college event manager 1.png',
      overview: 'A comprehensive event management system for college events featuring registration, attendance tracking, schedule management, and administrative tools.',
      description: 'This event management application was developed to streamline the organization and execution of college events. It provides tools for event coordinators to manage registrations, track attendance, and organize event schedules efficiently.',
      tech: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3' },
        { name: 'JavaScript', icon: 'fab fa-js' }
      ],
      keyFeatures: [
        'Event creation and management dashboard',
        'Participant registration and profile management',
        'QR code-based attendance tracking',
        'Event schedule builder with conflict detection',
        'Reporting and analytics for event performance'
      ],
      challenge: 'The primary challenge was creating a system flexible enough to handle various types of events while maintaining ease of use. I implemented a modular architecture with customizable event templates and configuration options to address diverse event management needs.',
      process: 'Development began with extensive requirements gathering from event organizers and participants. I created detailed wireframes and user flows, then built the system incrementally, focusing first on core registration functionality before adding advanced features like attendance tracking and analytics.',
      demoLink: '',
      repoLink: 'https://github.com/amit0-git/College-Event-Manager-v2'
    }
  ];