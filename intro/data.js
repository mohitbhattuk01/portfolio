/**
 * Portfolio Data Store & Management System
 * Handles default projects, localStorage persistence, and admin panel synchronization.
 */

const DEFAULT_PORTFOLIO_DATA = {
  profile: {
    name: "Mohit Bhatt",
    tagline: "Cloud Data Organization & Backup | Website Developer | IT Support",
    bio: "Hello! I'm Mohit Bhatt from Almora, Uttarakhand. I specialize in Cloud Data Organization & Backup, and Modern Website Development. I manage cloud storage systems, secure data backups, file synchronization, and build high-performance websites. With a completed Diploma in Information Technology and Graduation, I provide end-to-end IT support and web solutions.",
    status: "Cloud Data & Backup • Website Developer • Almora, Uttarakhand",
    location: "Almora, Uttarakhand, India",
    email: "mohitbhattuk01@gmail.com",
    github: "https://github.com/mohitbhattuk01",
    linkedin: "https://www.linkedin.com/in/mohit-bhatt-almora",
    instagram: "https://www.instagram.com/mohitbhattuk01",
    youtube: "https://www.youtube.com/@MohitBhattji-uk01",
    avatar: "photo1.jpg.png"
  },
  experience: [
    {
      id: "exp-1",
      role: "Cloud Data Organization, Backup & Web Development",
      organization: "Cloud & Web Solutions",
      location: "Almora, Uttarakhand",
      duration: "Present (Currently Working)",
      description: "Administering cloud storage architectures, automated data backups, secure file sharing, cross-device data sync, and developing modern responsive websites.",
      skills: ["Cloud Data Organization", "Backup & Recovery", "Website Development", "IT Support", "Data Synchronization"]
    }
  ],
  education: [
    {
      id: "grad",
      qualification: "Graduation (Bachelor's Degree)",
      institute: "Affiliated University / College",
      board: "State / Central University",
      duration: "Completed",
      status: "Completed"
    },
    {
      id: "diploma",
      qualification: "Diploma in Information Technology",
      institute: "Nainital Institute of Technology",
      board: "Uttarakhand Board of Technical Education",
      duration: "2023 - 2026",
      status: "Completed"
    },
    {
      id: "inter",
      qualification: "Intermediate (12th)",
      institute: "Government Inter College",
      board: "Uttarakhand Board",
      duration: "2021 - 2023",
      status: "Completed"
    },
    {
      id: "highschool",
      qualification: "High School (10th)",
      institute: "Government Inter College",
      board: "Uttarakhand Board",
      duration: "2019 - 2021",
      status: "Completed"
    }
  ],
  projects: [
    {
      id: "ai-resume-analyzer",
      title: "AI Resume Analyzer",
      subtitle: "Smart Resume Screening & Ranking System",
      description: "An AI-powered web application that automatically analyzes, scores, and ranks resumes based on job descriptions. Built using Python, Flask, and AI/NLP techniques.",
      liveUrl: "https://resume-screening-systemgunicorn-app-app.onrender.com/",
      githubUrl: "https://github.com/mohitbhattuk01",
      tags: ["Python", "Flask", "NLP / AI", "HTML5", "CSS3", "JSON DB"],
      featured: true,
      badge: "Final Year Project",
      isLiveRender: true,
      icon: "📄",
      highlights: [
        "Smart resume scoring & keyword matching with job description",
        "Admin panel with applicant management",
        "PDF resume upload & preview",
        "Live deployment on Render cloud"
      ]
    },
    {
      id: "calc-app",
      title: "Calculator App",
      subtitle: "Interactive Web Calculator",
      description: "A fully functional web calculator supporting all standard arithmetic calculations, backspace, and responsive button layout.",
      liveUrl: "project1.html",
      githubUrl: "https://github.com/mohitbhattuk01",
      tags: ["HTML5", "CSS3", "JavaScript"],
      featured: false,
      badge: "Utility App",
      isLiveRender: false,
      icon: "🧮",
      highlights: ["Real-time calculation", "Responsive keypad", "Clean theme"]
    },
    {
      id: "voice-todo",
      title: "Voice-Enabled To-Do List",
      subtitle: "Speech Recognition Task Manager",
      description: "Interactive task management app with Web Speech API integration allowing users to add tasks by voice.",
      liveUrl: "hhh.html",
      githubUrl: "https://github.com/mohitbhattuk01",
      tags: ["HTML5", "CSS3", "Voice API", "JavaScript"],
      featured: false,
      badge: "Interactive App",
      isLiveRender: false,
      icon: "🎤",
      highlights: ["Voice command task entry", "Mark complete / delete", "Dynamic storage"]
    },
    {
      id: "weather-app",
      title: "City Weather App",
      subtitle: "Real-time Meteorological Info",
      description: "Check current weather and forecasts for any city worldwide with real-time temperature, wind, and conditions.",
      liveUrl: "weather.html",
      githubUrl: "https://github.com/mohitbhattuk01",
      tags: ["HTML5", "CSS3", "Weather API", "JavaScript"],
      featured: false,
      badge: "API App",
      isLiveRender: false,
      icon: "🌤️",
      highlights: ["Global city search", "Live weather metrics", "Responsive UI"]
    },
    {
      id: "portfolio-web",
      title: "Personal Portfolio Website",
      subtitle: "Developer Showcase",
      description: "Modern, responsive portfolio website highlighting projects, resume, technical skills, and admin management.",
      liveUrl: "index.html",
      githubUrl: "https://github.com/mohitbhattuk01",
      tags: ["HTML5", "CSS3", "JavaScript", "Admin Panel"],
      featured: false,
      badge: "Live Website",
      isLiveRender: false,
      icon: "👨‍💻",
      highlights: ["Clean minimalist UI", "Integrated Admin Dashboard", "Dynamic project manager"]
    }
  ]
};

const STORAGE_KEY = 'mohit_portfolio_data_v4';

// Portfolio Data Manager API
const PortfolioData = {
  // Get all data (merges stored data with defaults)
  getAll: function() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        this.saveAll(DEFAULT_PORTFOLIO_DATA);
        return DEFAULT_PORTFOLIO_DATA;
      }
      const parsed = JSON.parse(stored);
      // Ensure the Render project always exists
      const hasRenderProj = parsed.projects && parsed.projects.some(p => p.id === 'ai-resume-analyzer');
      if (!hasRenderProj) {
        parsed.projects = [DEFAULT_PORTFOLIO_DATA.projects[0], ...(parsed.projects || [])];
        this.saveAll(parsed);
      }
      return parsed;
    } catch (e) {
      console.warn('LocalStorage error, using defaults:', e);
      return DEFAULT_PORTFOLIO_DATA;
    }
  },

  // Save all data to localStorage
  saveAll: function(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
      return false;
    }
  },

  // Get only projects list
  getProjects: function() {
    return this.getAll().projects || [];
  },

  // Get featured projects
  getFeaturedProjects: function() {
    return this.getProjects().filter(p => p.featured);
  },

  // Get education list
  getEducation: function() {
    return this.getAll().education || DEFAULT_PORTFOLIO_DATA.education;
  },

  // Get profile data
  getProfile: function() {
    return this.getAll().profile || DEFAULT_PORTFOLIO_DATA.profile;
  },

  // Add a new project
  addProject: function(project) {
    const data = this.getAll();
    if (!project.id) {
      project.id = 'proj-' + Date.now();
    }
    data.projects.push(project);
    this.saveAll(data);
    return project;
  },

  // Update an existing project
  updateProject: function(id, updatedFields) {
    const data = this.getAll();
    const index = data.projects.findIndex(p => p.id === id);
    if (index !== -1) {
      data.projects[index] = { ...data.projects[index], ...updatedFields };
      this.saveAll(data);
      return true;
    }
    return false;
  },

  // Delete project (Cannot delete the core Render project)
  deleteProject: function(id) {
    if (id === 'ai-resume-analyzer') {
      alert('The core Final Year Project (AI Resume Analyzer) cannot be deleted.');
      return false;
    }
    const data = this.getAll();
    data.projects = data.projects.filter(p => p.id !== id);
    this.saveAll(data);
    return true;
  },

  // Reset to original factory defaults
  resetDefaults: function() {
    this.saveAll(DEFAULT_PORTFOLIO_DATA);
    return DEFAULT_PORTFOLIO_DATA;
  },

  // Export data as JSON file download
  exportJSON: function() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.getAll(), null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "mohit_portfolio_data.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }
};

// Global export
window.PortfolioData = PortfolioData;
