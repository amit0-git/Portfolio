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
    overview: "A classic Tic Tac Toe game with a modern, responsive interface. The game includes features like move tracking, win detection, and game statistics in a clean, visually appealing UI.",
    tech: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' }
    ],
    keyFeatures: [
      'Game board with hover effects and click animations',
      'Real-time win detection algorithm that highlights winning combinations',
      'Player turn indication',
      'Game replay',
      'Clean, modern UI with smooth transitions and animations',
      "Gameplay sound"
    ],
    challenge: 'Building this Tic Tac Toe game taught me how to structure game logic in JavaScript and create interactive UI. I learned how to efficiently check win conditions using matrix and developed a deeper understanding of DOM manipulation techniques. It helped me to connect backend with UI. It also helped me to explore javascript functions.',
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
    overview: 'Classic puzzle game with a modern, responsive interface. With features like highlight system, answer reveal etc.',
    tech: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' }
    ],
    keyFeatures: [
      'Real-time input validation and error highlighting for incorrect entries',
      'Hint system that reveals correct numbers to help players progress',
      'Real-time win detection algorithm that highlights winning combinations',
      'Interactive and modern UI',
      'Answer reveal functionality',
    ],
    challenge: 'Developing this Sudoku game helped me master complex algorithms and recursive problem-solving techniques. I learned how to implement backtracking algorithms for puzzle generation and validation, which significantly improved my algorithmic thinking. . I also gained experience in how to build intuitive interfaces for complex rule-based games.',
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
    overview: 'Stopwatch built using React.js with clean and minimal interface including features like lap functionality etc.',
    tech: [
      { name: 'React' },
      { name: 'CSS3' },
      { name: 'HTML5' },
      { name: 'JavaScript' }
    ],
    keyFeatures: [
      'Clean and minimal UI',
      'Lap time recording and display with automatic sorting',
      'Start, pause, resume, and reset functionality',
      'Responsive design that works on mobile, tablet, and desktop devices',
    ],
    challenge: 'Building this stopwatch application deepened my understanding of React hooks and state management. I learned how to implement precise timing mechanisms in JavaScript. The project taught me about component lifecycle management and how to optimize performance for real-time updates. I also gained experience in creating responsive designs that maintain visual consistency across different device sizes.',
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
    overview: 'A website for the college technical fest with a modern design. Features include event listings, registration forms, detailed schedules, and engaging animations to attract participants and provide essential information.',
    tech: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'PHP' },
      { name: 'XML' },
      { name: 'Anime Js' },
      { name: 'XSL' }
    ],
    keyFeatures: [
      'Responsive and modern look with animations',
      'Intersection Observer API for animated appearance',
      'Custom navigation widget',
      'Background Animations',
      'Transform XML data using XSL',
      'Contact form and Google Maps integration'
    ],
    challenge: 'Developing this techfest website taught me how to create visually striking web experiences while maintaining usability. I learned animation libraries like Anime.js. The project improved my skills in responsive design and animations in web, ensuring the site worked well across all device sizes. I also designed custom navigation widget for navigation across various pages.',
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
    overview: 'A Windows application built to allow hostel students to log in to the Wi-Fi once and surf the internet without having to log in repeatedly.',
    tech: [
      { name: 'Python' },
      { name: 'PyQt' },
      { name: 'HTML5' },
      { name: 'CSS3' }
    ],
    keyFeatures: [
      'Clean interface for desktop',
      'Tabbed Navigation',
    ],
    challenge: 'Building Infisurf significantly expanded my knowledge of desktop application development and PyQt framework. The project taught me about thread management in UI applications, particularly how to handle background processes without freezing the interface. I also developed skills in memory management and optimization techniques.',
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
    overview: 'A website built on the topic COVID 19 pandemic with clean and responsive interface providing necessary information.',
    tech: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
    ],
    keyFeatures: [
      'Clean and responsive interface',
      'Mobile-optimized design for access on any device',
    ],
    challenge: 'Developing this COVID-19 website taught me HTML, CSS and Javascript. I also learned responsive design and how to make a website accessible on any device.',
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
    overview: 'A website for the college technical fest with a modern design and animations. Features include event listings, registration forms, detailed schedules, and engaging animations to attract participants and provide essential information.',
    tech: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
    ],
    keyFeatures: [
      'Modernized UI with advanced animations ',
      "Responsive and modern design",
    ],
    challenge: 'This website taught me advanced concepts of HTML, CSS and Javascript. I also learned how to create animations and make a website more engaging and responsive. It also helped me to learn DOM manipulation.',
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
    overview: 'Event manager portal built using MERN stack to manage all the events organised in college/school by allowing users to register for event , view event details, view event schedule.',
    tech: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'React' },
      { name: 'REST API' },
      { name: 'JavaScript' },
      { name: 'Node.js' },
      { name: 'MongoDB' },
      { name: 'reCaptcha' },
      { name: 'jwt' }

    ],
    keyFeatures: [
      'JWT authentication for secure user sessions',
      'reCaptcha for secure user registration',
      'API rate limiting',
      'Form validation and verification',
      'Unique ID generation',
      'MVC Architecture',
      "Profile Management"

    ],
    challenge: 'Developing the College Event Manager improved my skills in building complex, data-driven fullstack applications. I learned how to design and implement multi-role authentication and authorization systems that provide appropriate access levels to different user types. The project taught me about designing flexible database schemas using mongodb. This helped me to apply my MERN stack knowledge to build scalable and efficient applications.',
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
    overview: 'Event manager portal built using Node.js to manage all the events organised in college/school by allowing users to register for event , view event details, view event schedule.',
    tech: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'REST API' },
      { name: 'JavaScript' },
      { name: 'Node.js' },
      { name: 'MongoDB' },

      { name: 'jwt' }
    ],
    keyFeatures: [
      'JWT authentication for secure user sessions',
      'reCaptcha for secure user registration',
      'API rate limiting',
      'Form validation and verification',
      'Unique ID generation',
      'MVC Architecture',
      "Role Based Access Control system",
      "Admin Panel for managing events and users",
      "Judgement Dashboard for viewing event results"
    ],
    challenge: 'Developing the College Event Manager improved my skills in building complex, data-driven fullstack applications. I learned how to design and implement multi-role authentication and authorization systems that provide appropriate access levels to different user types. The project taught me about designing flexible database schemas using mongodb. This helped me to apply my MERN stack knowledge to build scalable and efficient applications.',
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
    overview: 'Windows application built with clean interface to manage tuition students and their data. It keeps track of their fees , generate fee receipts etc.',
    tech: [
      { name: 'Python' },
      { name: 'MySQL' },
      { name: 'FPDF' },
      { name: 'tkinter' },
      { name: 'threading' }
    ],
    keyFeatures: [
      'Clean UI for desktop',
      'Secure signin and signup',
      'Student fee tracking',
      'Receipt generation',
      'Informative dashboard',
      'Record searching',

    ],
    challenge: 'This project helped me to learn advanced concepts of Python, MySQL, tkinter etc. I have applied multithreading for non-blocking UI. I have also used FPDF to generate PDF receipts. Overall, this project has helped me to improve my skills in building desktop applications using python.',
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
    overview: 'A dictionary extension built with minimal interface to provide quick access to definitions of words. It has features like word speaking etc.',
    tech: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'JSON' },
      { name: 'API' },
     
    ],
    keyFeatures: [
      'Clean and minimal UI',
      'Use of Fetch API',
      'Word Speaking',
      
    ],
    challenge: 'This project helped me to learn how chrome extensions are designed. I learned use of fetch API in javascript.',

    repoLink: 'https://github.com/amit0-git/chrome-extensions/tree/main/chrome_Dictionary'
  }
];



