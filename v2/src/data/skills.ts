export interface SkillCategory {
  title: string;
  description: string;
  icon: string; // lucide icon name
}

export const skills: SkillCategory[] = [
  {
    title: "Programming Languages",
    description:
      "Proficient in Python and Java, with strong skills in object-oriented programming, debugging, and algorithm design. Building skills in SQL for data manipulation and querying.",
    icon: "Code2",
  },
  {
    title: "Web Development",
    description:
      "Experienced in HTML, CSS, and JavaScript for creating dynamic and interactive web applications. Expanding knowledge in frontend frameworks and responsive design.",
    icon: "Globe",
  },
  {
    title: "Machine Learning & AI",
    description:
      "Working on machine learning concepts including regression and classification using TensorFlow and Pandas. Hands-on experience implementing models and foundational algorithms.",
    icon: "Brain",
  },
  {
    title: "Data Analysis",
    description:
      "Experience in data wrangling, visualization, and statistical analysis using Pandas, Matplotlib, and NumPy for data-driven insights.",
    icon: "BarChart3",
  },
  {
    title: "Technical Support",
    description:
      "Experience providing technical support for hardware and software troubleshooting across various operating systems and devices.",
    icon: "Wrench",
  },
  {
    title: "Leadership & Communication",
    description:
      "Strong leadership developed through roles as Presidential Ambassador, Judiciary Chair, and SciFest Coordinator. Focused on collaboration and problem-solving.",
    icon: "Users",
  },
];
