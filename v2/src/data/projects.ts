export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Voice-Controlled Smart Assistant",
    description:
      "Developed a voice-controlled smart assistant capable of recognizing and responding to spoken commands using speech recognition and NLP. Built under the guidance of Dr. Jonathan Skelton, Professor of Robotics and Mechatronics Engineering.",
    tags: ["Python", "NLP", "Speech Recognition", "APIs", "Machine Learning"],
    image: "/images/pic19.jpg",
    featured: true,
  },
  {
    title: "Data Mining for Agricultural Insights (SUPERMinDS)",
    description:
      "Built interactive web tools for data mining and analytics using USDA crop data, weather patterns, and related factors. Supervised by Dr. Jasmine Wan, Professor of Computer Science and Mathematics.",
    tags: ["Python", "JavaScript", "Data Visualization", "Machine Learning"],
    image: "/images/pic20.jpg",
    featured: true,
  },
  {
    title: "Voice Aid: AI-Powered Speech Recognition",
    description:
      "Building an AI-driven speech recognition platform designed to assist individuals with speech impairments or physical disabilities in communicating effectively.",
    tags: ["AI", "Speech Recognition", "Assistive Tech", "Python"],
    image: "https://raw.githubusercontent.com/etollaw/personal-website/main/voiceaid.png",
    featured: true,
  },
  {
    title: "Matrix Operations Library",
    description:
      "Creating a Python library for efficient matrix operations utilizing linear algebra concepts to support mathematical and engineering applications.",
    tags: ["Python", "Linear Algebra", "Algorithms"],
    image: "/images/pic24.JPG",
  },
  {
    title: "Personalized Study Plan Generator",
    description:
      "Developing an app that creates customized study plans based on students' learning styles and performance using AI for optimizing learning paths.",
    tags: ["AI", "EdTech", "Machine Learning", "Algorithms"],
  },
  {
    title: "Upkey: Empowering Diverse Talent",
    description:
      "Collaborated on a digital platform connecting underrepresented students with internship opportunities, enhancing UX and onboarding flows.",
    tags: ["UX Design", "Web Development", "Platform"],
    image: "/images/pic22.jpg",
  },
];
