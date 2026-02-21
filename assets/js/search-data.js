// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-learning",
          title: "Learning",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/learning/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-cv-amp-biography",
          title: "CV &amp; Biography",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cvbio/";
          },
        },{id: "post-chasing-the-unknown-a-journey-of-curiosity",
      
        title: "Chasing the Unknown - A Journey of Curiosity",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/selfexploration/2025/03/05/firstpost.html";
        
      },
    },{id: "post-paper-publication",
      
        title: "paper publication",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/paper/2024/09/01/paper-published.html";
        
      },
    },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-participated-in-the-quantum-computing-for-industry-vision-to-application-event-organized-by-physikalisch-technische-bundesanstalt-ptb-in-berlin-germany-an-in-person-event-exploring-industrial-applications-of-quantum-computing",
          title: 'Participated in the Quantum Computing for Industry: Vision to Application event organized by...',
          description: "",
          section: "News",},{id: "news-attended-the-quantum-carla-the-quantum-careers-symposium-organized-by-barcelona-institute-of-science-and-technology-at-icfo-carla-barcelona-spain-a-hybrid-event-focusing-on-career-development-in-quantum-technologies",
          title: 'Attended the Quantum CARLA: the Quantum Careers Symposium organized by Barcelona Institute of...',
          description: "",
          section: "News",},{id: "news-participated-in-qnickel20-a-comprehensive-quantum-computing-and-programming-workshop-organized-by-qitaly-held-in-cagliari-ca-italy-as-a-hybrid-event-combining-in-person-and-virtual-participation",
          title: 'Participated in QNickel20, a comprehensive quantum computing and programming workshop organized by QItaly....',
          description: "",
          section: "News",},{id: "news-participated-in-the-bluequbit-quantum-hackathon-focusing-on-peaked-circuits-challenge-an-intensive-online-event-exploring-quantum-circuit-optimization-and-practical-quantum-computing-applications",
          title: 'Participated in the BlueQubit Quantum Hackathon focusing on Peaked Circuits Challenge. An intensive...',
          description: "",
          section: "News",},{id: "news-attended-the-quantum-machine-learning-workshop-organized-by-qpoland-amp-amp-fundacja-quantum-ai-explored-cutting-edge-developments-in-quantum-machine-learning-algorithms-and-their-practical-applications",
          title: 'Attended the Quantum Machine Learning Workshop organized by QPoland &amp;amp;amp; Fundacja Quantum AI....',
          description: "",
          section: "News",},{id: "projects-the-next-leap-neural-enhanced-quantum-algorithms",
          title: 'The Next Leap: Neural-Enhanced Quantum Algorithms',
          description: "Instead of waiting for perfect quantum computers, we are using neural networks to do the heavy lifting now.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-quantum-information",
          title: 'Quantum Information',
          description: "Advanced course on quantum information processing, entanglement, quantum error correction, and quantum algorithms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-information-theoretic-foundations-of-quantum-mechanics-and-the-emergence-of-physical-reality",
          title: 'Information-Theoretic Foundations of Quantum Mechanics and the Emergence of Physical Reality',
          description: "This research investigates whether quantum mechanics can be derived from information-theoretic or operational principles, focusing on the role of observers, entanglement, and quantum correlations in defining physical reality.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-quantum-foundations",
          title: 'Quantum Foundations',
          description: "Mathematical foundations of quantum mechanics, covering quantum states, measurements, superposition, and entanglement.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-information-science",
          title: 'Information Science',
          description: "Study of information processing, data structures, algorithms, and communication systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-quantum-machine-learning",
          title: 'Quantum Machine Learning',
          description: "Integration of quantum computing with machine learning algorithms and data processing techniques.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%72%62%68%61%74%74%61%72%61%69%31%33@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=srbhattarai13", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
