// This file contains the data for all projects
const projectsData = [
  {
    id: 'tic-tac-toe',
    title: 'Tic Tac Toe',
    image: '/assets/Screenshot 2025-04-07 165907.png',
    screenshots: [
      '/assets/Screenshot 2025-04-07 165907.png',
      '/assets/screenshots/tic-tac-toe/1.png',
      '/assets/screenshots/tic-tac-toe/2.png',
    ],
    overview: 'A classic Tic Tac Toe game with a modern, responsive interface that allows two players to compete against each other. The game includes features like move tracking, win detection, and game statistics in a clean, visually appealing UI.',
    tech: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3' },
      { name: 'JavaScript', icon: 'fab fa-js' }
    ],
    keyFeatures: [
      'Interactive game board with hover effects and click animations',
      'Real-time win detection algorithm that highlights winning combinations',
      'Game state tracking with score keeping for multiple rounds',
      'Responsive design that works on all devices from mobile to desktop',
      'Clean, modern UI with smooth transitions and animations',
      'Reset functionality to start new games without page refresh'
    ],
    challenge: 'Building this Tic Tac Toe game taught me how to structure game logic in JavaScript and create interactive UIs with event delegation. I learned how to efficiently check win conditions using arrays and developed a deeper understanding of DOM manipulation techniques. The project reinforced the importance of planning application state management and helped me improve my CSS skills through creating responsive layouts and engaging animations.',
    demoLink: 'https://tic-tac-toe-seven-psi-45.vercel.app/',
    repoLink: 'https://github.com/amit0-git/Tic-Tac-Toe'
  },
  {
    id: 'sudoku',
    title: 'Sudoku',
    image: '/assets/sudoku.png',
    screenshots: [
      '/assets/sudoku.png',
      '/assets/screenshots/sudoku/1.png',
      '/assets/screenshots/sudoku/2.png',
      '/assets/screenshots/sudoku/3.png',
    ],
    overview: 'A fully interactive Sudoku game with multiple difficulty levels, hint system, and solution validation. The game generates random puzzles and allows users to input numbers with real-time error checking and visual feedback.',
    tech: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3' },
      { name: 'JavaScript', icon: 'fab fa-js' }
    ],
    keyFeatures: [
      'Dynamic puzzle generation with varying difficulty levels (Easy, Medium, Hard)',
      'Real-time input validation and error highlighting for incorrect entries',
      'Hint system that reveals correct numbers to help players progress',
      'Timer and move counter to track player performance',
      'Note-taking mode for recording potential numbers in cells',
      'Auto-save functionality to preserve game state between sessions',
      'Clean, intuitive user interface with keyboard support'
    ],
    challenge: 'Developing this Sudoku game helped me master complex algorithms and recursive problem-solving techniques. I learned how to implement backtracking algorithms for puzzle generation and validation, which significantly improved my algorithmic thinking. The project taught me to balance computational efficiency with user experience, especially when generating new puzzles on-demand. I also gained experience in implementing game state persistence using local storage and learned how to build intuitive interfaces for complex rule-based games.',
    demoLink: 'https://sudoku-psi-inky.vercel.app/',
    repoLink: 'https://github.com/amit0-git/Sudoku'
  },
  {
    id: 'stopwatch',
    title: 'Stopwatch',
    image: '/assets/stopwatch.png',
    screenshots: [
      '/assets/stopwatch.png',
      '/assets/screenshots/stopwatch/1.png',
      '/assets/screenshots/stopwatch/2.png',
    ],
    overview: 'A precise, feature-rich stopwatch application built with React. It offers millisecond accuracy, lap timing functionality, and a clean, intuitive interface for time tracking needs with a visually appealing design that works across all devices.',
    tech: [
      { name: 'React', icon: 'fab fa-react' },
      { name: 'CSS3', icon: 'fab fa-css3' },
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'JavaScript', icon: 'fab fa-js' }
    ],
    keyFeatures: [
      'Millisecond precision timing for accurate measurements',
      'Lap time recording and display with automatic sorting',
      'Start, pause, resume, and reset functionality',
      'Visual indicators for running, paused, and stopped states',
      'Elegant animations for state transitions and button interactions',
      'Responsive design that works on mobile, tablet, and desktop devices',
      'Dark/light mode toggle to accommodate different viewing preferences'
    ],
    challenge: 'Building this stopwatch application deepened my understanding of React hooks and state management. I learned how to implement precise timing mechanisms in JavaScript while avoiding common pitfalls like drift or lag. The project taught me about component lifecycle management and how to optimize performance for real-time updates. I also gained experience in creating responsive designs that maintain visual consistency across different device sizes and in implementing theming functionality that respects user preferences.',
    demoLink: 'https://stopwatch-opal-sigma.vercel.app/',
    repoLink: 'https://github.com/amit0-git/Stopwatch'
  },
  {
    id: 'techfest-1',
    title: 'Techfest Website 1',
    image: '/assets/techfest.png',
    screenshots: [
      '/assets/techfest.png',
      '/assets/screenshots/techfest-1/1.png',
      '/assets/screenshots/techfest-1/2.png',
      '/assets/screenshots/techfest-1/3.png',
      '/assets/screenshots/techfest-1/4.png',
      '/assets/screenshots/techfest-1/5.png',
      '/assets/screenshots/techfest-1/6.png',
      '/assets/screenshots/techfest-1/7.png',

    ],
    overview: 'A dynamic website for a college technical festival with a modern, interactive design. The site features comprehensive event listings, registration forms, detailed schedules, and engaging animations to attract participants and provide all necessary information about the festival.',
    tech: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' }
    ],
    keyFeatures: [
      'Parallax scrolling and dynamic animations to create an engaging user experience',
      'Comprehensive event listings with filtering options by category and time',
      'Registration system with form validation and confirmation emails',
      'Interactive schedule with timeline view and event details',
      'Team and sponsor showcase sections with smooth carousels',
      'Mobile-responsive design with optimized navigation for small screens',
      'Contact form with validation and Google Maps integration'
    ],
    challenge: 'Developing this tech fest website taught me how to create visually striking web experiences while maintaining usability. I learned techniques for implementing advanced CSS animations and transitions that enhance rather than distract from the content. The project improved my skills in responsive design and mobile-first development, ensuring the site worked well across all device sizes. I also gained experience in optimizing assets for performance and implementing accessibility features to ensure all users could access the content effectively.',
    demoLink: 'https://techvyom-2024.vercel.app/',
    repoLink: 'https://github.com/amit0-git/Techvyom-2k24'
  },
  {
    id: 'infisurf',
    title: 'Infisurf',
    image: '/assets/name (2).png',
    screenshots: [
      '/assets/name (2).png',
      '/assets/screenshots/infisurf/1.png',
      '/assets/screenshots/infisurf/2.png',


    ],
    overview: 'A lightweight, privacy-focused desktop browser application built with Python and PyQt. Infisurf offers a streamlined browsing experience with a focus on speed and user privacy, featuring a modern interface with customizable settings and extensions.',
    tech: [
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'PyQt', icon: 'fab fa-qt' },
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3' }
    ],
    keyFeatures: [
      'Tabbed browsing interface with drag-and-drop tab management',
      'Comprehensive bookmarking system with folder organization',
      'History tracking with search functionality and privacy mode',
      'Customizable privacy features including cookie management and ad blocking',
      'Multiple search engine options with quick switching capability',
      'Custom UI with light and dark themes that adapt to system preferences',
      'Download manager with pause/resume functionality',
      'Performance optimization features to reduce memory usage'
    ],
    challenge: 'Building Infisurf significantly expanded my knowledge of desktop application development and PyQt framework. I learned how to integrate web rendering engines with native desktop interfaces and gained deep insights into browser architecture. The project taught me about thread management in UI applications, particularly how to handle background processes without freezing the interface. I also developed skills in memory management and optimization techniques to ensure the browser remained responsive even with multiple tabs open. Working on custom UI components improved my understanding of the relationship between visual design and user experience.',
    demoLink: 'https://infisurf-website.vercel.app/',
    repoLink: 'https://github.com/amit0-git/Infisurf'
  },
  {
    id: 'covid-19',
    title: 'COVID-19 Information Dashboard',
    image: '/assets/covid.png',
    screenshots: [
      '/assets/covid.png',
      '/assets/screenshots/covid/1.png',

    ],
    overview: 'A comprehensive COVID-19 information dashboard providing real-time statistics, safety guidelines, and resources. The site features interactive data visualizations, regional tracking, and mobile-friendly design to help users stay informed during the pandemic.',
    tech: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'Chart.js', icon: 'fas fa-chart-line' },
      { name: 'API Integration', icon: 'fas fa-code' }
    ],
    keyFeatures: [
      'Real-time COVID-19 statistics with interactive data visualizations',
      'Regional tracking with color-coded maps showing case distribution',
      'Trend analysis with historical data comparison charts',
      'Comprehensive safety guidelines and prevention tips with illustrations',
      'Resource directory for testing, vaccination, and treatment facilities',
      'Mobile-optimized design for access on any device',
      'Accessibility features following WCAG guidelines',
      'Multilingual support for broader user reach'
    ],
    challenge: 'Developing this COVID-19 dashboard taught me how to effectively communicate complex data through visualizations and intuitive interfaces. I learned how to integrate and consume multiple external APIs while implementing error handling and fallback mechanisms for data reliability. The project improved my skills in data normalization and transformation, essential for creating meaningful visualizations from diverse data sources. I also gained experience in creating accessible designs that could be used by people with disabilities, and in implementing performance optimizations to ensure the dashboard remained responsive even when handling large datasets.',
    demoLink: 'https://covid-19-website-self.vercel.app/',
    repoLink: 'https://github.com/amit0-git/Covid-19-Website'
  },
  {
    id: 'techfest-2',
    title: 'Techfest Website 2',
    image: '/assets/techfest2.png',
    screenshots: [
      '/assets/techfest2.png',
      '/assets/screenshots/techfest-2/1.png',
      '/assets/screenshots/techfest-2/2.png',
      '/assets/screenshots/techfest-2/3.png',

    ],
    overview: 'A completely redesigned version of the college tech fest website with improved UI/UX, additional features, and enhanced performance. The site offers a more immersive experience with advanced animations, integrated social media features, and streamlined event registration processes.',
    tech: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'GSAP', icon: 'fas fa-magic' },
      { name: 'Firebase', icon: 'fas fa-fire' }
    ],
    keyFeatures: [
      'Modernized UI with advanced animations and micro-interactions',
      'Enhanced event registration system with user accounts and profiles',
      'Real-time updates for event changes and announcements',
      'Integrated social media sharing and promotional tools',
      'Performance optimizations for faster loading times',
      'Expanded content areas including blog, gallery, and testimonials',
      'Virtual event capabilities with livestream integration',
      'Admin dashboard for event organizers to manage content'
    ],
    challenge: 'Redesigning the tech fest website taught me valuable lessons about iterative design improvement and user feedback implementation. I learned advanced animation techniques using GSAP and how to implement them without sacrificing performance. The project deepened my understanding of user experience design principles and how they influence user engagement and conversion rates. I gained experience in implementing more complex backend functionality through Firebase integration, including user authentication and real-time data synchronization. The process of refactoring and rebuilding an existing application gave me insights into maintaining code quality and documentation during significant updates.',
    demoLink: 'https://techvyom-website.vercel.app/',
    repoLink: 'https://github.com/amit0-git/techvyom-website'
  },
  {
    id: 'college-event-manager-2',
    title: 'College Event Manager 2',
    image: '/assets/college event manager 1.png',
    screenshots: [
      '/assets/college event manager 1.png',
      '/assets/screenshots/event-manager-2/1.png',
      '/assets/screenshots/event-manager-2/2.png',
      '/assets/screenshots/event-manager-2/3.png',
      '/assets/screenshots/event-manager-2/4.png',
      '/assets/screenshots/event-manager-2/5.png',
      '/assets/screenshots/event-manager-2/6.png',
      '/assets/screenshots/event-manager-2/7.png',
      '/assets/screenshots/event-manager-2/8.png',
    ],
    overview: 'A comprehensive event management system designed specifically for college events. The application streamlines the entire event lifecycle from planning and registration to attendance tracking and post-event analysis, helping organizers manage events more efficiently.',
    tech: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'Node.js', icon: 'fab fa-node' },
      { name: 'MongoDB', icon: 'fas fa-database' }
    ],
    keyFeatures: [
      'Intuitive event creation and management dashboard',
      'Multi-role user system for organizers, volunteers, and participants',
      'Participant registration with custom forms for different event types',
      'QR code-based attendance tracking with real-time verification',
      'Event schedule builder with conflict detection and resolution',
      'Automated email notifications for registrations and updates',
      'Certificate generation for participants and winners',
      'Comprehensive reporting and analytics for event performance'
    ],
    challenge: 'Developing the College Event Manager significantly improved my skills in building complex, data-driven web applications. I learned how to design and implement multi-role authentication and authorization systems that provide appropriate access levels to different user types. The project taught me about designing flexible database schemas that can accommodate various event types and registration requirements. I gained experience in implementing real-time features like attendance tracking and notifications, which enhanced my understanding of WebSocket technology and real-time data synchronization. The process of creating an end-to-end solution deepened my appreciation for user research and how it informs feature prioritization and interface design.',

    repoLink: 'https://github.com/amit0-git/College-Event-Manager-v2'
  },
  {
    id: 'college-event-manager-1',
    title: 'College Event Manager 1',
    image: '/assets/college event.png',
    screenshots: [
      '/assets/college event.png',
      '/assets/screenshots/event-manager-1/1.png',
      '/assets/screenshots/event-manager-1/2.png',
      '/assets/screenshots/event-manager-1/3.png',
      '/assets/screenshots/event-manager-1/4.png',
      '/assets/screenshots/event-manager-1/5.png',
      '/assets/screenshots/event-manager-1/6.png',
      '/assets/screenshots/event-manager-1/7.png',

    ],
    overview: 'A comprehensive event management system designed specifically for college events. The application streamlines the entire event lifecycle from planning and registration to attendance tracking and post-event analysis, helping organizers manage events more efficiently.',
    tech: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'Node.js', icon: 'fab fa-node' },
      { name: 'MongoDB', icon: 'fas fa-database' }
    ],
    keyFeatures: [
      'Intuitive event creation and management dashboard',
      'Multi-role user system for organizers, volunteers, and participants',
      'Participant registration with custom forms for different event types',
      'QR code-based attendance tracking with real-time verification',
      'Event schedule builder with conflict detection and resolution',
      'Automated email notifications for registrations and updates',
      'Certificate generation for participants and winners',
      'Comprehensive reporting and analytics for event performance'
    ],
    challenge: 'Developing the College Event Manager significantly improved my skills in building complex, data-driven web applications. I learned how to design and implement multi-role authentication and authorization systems that provide appropriate access levels to different user types. The project taught me about designing flexible database schemas that can accommodate various event types and registration requirements. I gained experience in implementing real-time features like attendance tracking and notifications, which enhanced my understanding of WebSocket technology and real-time data synchronization. The process of creating an end-to-end solution deepened my appreciation for user research and how it informs feature prioritization and interface design.',

    repoLink: 'https://github.com/amit0-git/College-Event-Manager'
  },
  {
    id: 'tuition-management',
    title: 'Tuition Management',
    image: '/assets/tuition.png',
    screenshots: [
      '/assets/tuition.png',
      '/assets/screenshots/tuition/1.png',
      '/assets/screenshots/tuition/2.png',
      '/assets/screenshots/tuition/3.png',
      '/assets/screenshots/tuition/4.png',
      '/assets/screenshots/tuition/5.png',
      '/assets/screenshots/tuition/6.png',
      '/assets/screenshots/tuition/7.png',
      '/assets/screenshots/tuition/8.png',

    ],
    overview: 'A comprehensive event management system designed specifically for college events. The application streamlines the entire event lifecycle from planning and registration to attendance tracking and post-event analysis, helping organizers manage events more efficiently.',
    tech: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'Node.js', icon: 'fab fa-node' },
      { name: 'MongoDB', icon: 'fas fa-database' }
    ],
    keyFeatures: [
      'Intuitive event creation and management dashboard',
      'Multi-role user system for organizers, volunteers, and participants',
      'Participant registration with custom forms for different event types',
      'QR code-based attendance tracking with real-time verification',
      'Event schedule builder with conflict detection and resolution',
      'Automated email notifications for registrations and updates',
      'Certificate generation for participants and winners',
      'Comprehensive reporting and analytics for event performance'
    ],
    challenge: 'Developing the College Event Manager significantly improved my skills in building complex, data-driven web applications. I learned how to design and implement multi-role authentication and authorization systems that provide appropriate access levels to different user types. The project taught me about designing flexible database schemas that can accommodate various event types and registration requirements. I gained experience in implementing real-time features like attendance tracking and notifications, which enhanced my understanding of WebSocket technology and real-time data synchronization. The process of creating an end-to-end solution deepened my appreciation for user research and how it informs feature prioritization and interface design.',

    repoLink: 'https://github.com/amit0-git/Tuition-Management'
  },

  
  {
    id: 'dictionary',
    title: 'Dictionary Extension',
    image: '/assets/dictionary.png',
    screenshots: [
      '/assets/dictionary.png',
      '/assets/screenshots/dictionary/1.png',
      '/assets/screenshots/dictionary/3.png',


    ],
    overview: 'A comprehensive event management system designed specifically for college events. The application streamlines the entire event lifecycle from planning and registration to attendance tracking and post-event analysis, helping organizers manage events more efficiently.',
    tech: [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'Node.js', icon: 'fab fa-node' },
      { name: 'MongoDB', icon: 'fas fa-database' }
    ],
    keyFeatures: [
      'Intuitive event creation and management dashboard',
      'Multi-role user system for organizers, volunteers, and participants',
      'Participant registration with custom forms for different event types',
      'QR code-based attendance tracking with real-time verification',
      'Event schedule builder with conflict detection and resolution',
      'Automated email notifications for registrations and updates',
      'Certificate generation for participants and winners',
      'Comprehensive reporting and analytics for event performance'
    ],
    challenge: 'Developing the College Event Manager significantly improved my skills in building complex, data-driven web applications. I learned how to design and implement multi-role authentication and authorization systems that provide appropriate access levels to different user types. The project taught me about designing flexible database schemas that can accommodate various event types and registration requirements. I gained experience in implementing real-time features like attendance tracking and notifications, which enhanced my understanding of WebSocket technology and real-time data synchronization. The process of creating an end-to-end solution deepened my appreciation for user research and how it informs feature prioritization and interface design.',

    repoLink: 'https://github.com/amit0-git/chrome-extensions/tree/main/chrome_Dictionary'
  }
];




