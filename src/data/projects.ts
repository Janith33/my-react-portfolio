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
  /*{
    id: 1,
    title: "Number_guessing_game",
    description: "This is a intereasted game. unaccptly guest the random number with this game.Number_Guessing_Game create with the python programing language.", 
    image: "guessnumber.png",
    technologies: ["Python"],
    githubUrl: "https://github.com/Janith33/Number_guessing_game",
    liveUrl: "file:///C:/Users/Acer/OneDrive/Desktop/Weather-App/index.html"
  },*/
  {
    id: 2,
    title: "Bill Management System",
    description: "Real time bill management system for creating new bill and maintain the bill via simple billing system using JavaScript",
    image: "billing-management.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Janith33/Bill-Management-System",
    liveUrl: "https://taskmanager.janithchandupa.com"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current conditions and forecasts for multiple locations.",
    image: "weatherapp.png",
    technologies: ["HTML", "OpenWeather API", "javascript", "CSS"],
    githubUrl: "https://github.com/Janith33/Weather-App",
    liveUrl: "weather-app-three-dusky-33.vercel.app"
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
    image: "website.png",
    technologies: ["React", "TypeScript", "Vite"],
    githubUrl: "https://github.com/Janith33/my-react-portfolio",
    liveUrl: "my-react-portfolio-chi-three.vercel.app"
  },
  /*{
    id: 6,
    title: "Recipe Finder App",
    description: "An application that helps users find recipes based on available ingredients and dietary preferences.",
    image: "https://via.placeholder.com/600x400?text=Recipe+Finder+App",
    technologies: ["React", "Food API", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/janithchandupa/recipe-finder",
    liveUrl: "https://recipes.janithchandupa.com"
  }*/
];