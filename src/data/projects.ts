export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product catalog, shopping cart, and secure checkout functionality.",
    image: "https://via.placeholder.com/600x400?text=E-Commerce+Project",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    githubUrl: "https://github.com/janithchandupa/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.janithchandupa.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
    image: "https://via.placeholder.com/600x400?text=Task+Management+App",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    githubUrl: "https://github.com/janithchandupa/task-manager",
    liveUrl: "https://taskmanager.janithchandupa.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current conditions and forecasts for multiple locations.",
    image: "https://via.placeholder.com/600x400?text=Weather+Dashboard",
    technologies: ["React", "OpenWeather API", "Chart.js", "Styled Components"],
    githubUrl: "https://github.com/janithchandupa/weather-dashboard",
    liveUrl: "https://weather.janithchandupa.com"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "A dashboard for tracking and analyzing social media engagement metrics across multiple platforms.",
    image: "https://via.placeholder.com/600x400?text=Social+Media+Analytics",
    technologies: ["React", "D3.js", "Node.js", "Express", "Social Media APIs"],
    githubUrl: "https://github.com/janithchandupa/social-analytics",
    liveUrl: "https://analytics.janithchandupa.com"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects, skills, and professional experience.",
    image: "https://via.placeholder.com/600x400?text=Portfolio+Website",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    githubUrl: "https://github.com/janithchandupa/portfolio",
    liveUrl: "https://janithchandupa.com"
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description: "An application that helps users find recipes based on available ingredients and dietary preferences.",
    image: "https://via.placeholder.com/600x400?text=Recipe+Finder+App",
    technologies: ["React", "Food API", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/janithchandupa/recipe-finder",
    liveUrl: "https://recipes.janithchandupa.com"
  }
];