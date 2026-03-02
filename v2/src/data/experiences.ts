export interface Experience {
  title: string;
  organization: string;
  period?: string;
  description: string;
  image?: string;
  featured?: boolean;
}

export const experiences: Experience[] = [
  {
    title: "Research Intern",
    organization: "Texas Advanced Computing Center (TACC) @ UT Austin",
    period: "Summer 2025",
    description:
      "Conducted undergraduate research in reinforcement learning and high-performance computing as part of the Cyberinfrastructure REU program. Developed pathfinding agents in Pac-Man using approximate Q-learning and presented findings through a paper, poster, and talk.",
    image: "https://raw.githubusercontent.com/etollaw/personal-website/main/RLimage.png",
    featured: true,
  },
  {
    title: "Presidential Ambassador",
    organization: "Randolph College",
    description:
      "Represented the college at various events, fostering relationships with prospective students and community members. Assisted in promoting college initiatives and enhancing the institution's visibility.",
    image: "/images/pic01.jpg",
  },
  {
    title: "Science Outreach",
    organization: "Randolph College",
    description:
      "Engaged in science outreach activities, planning and conducting interactive STEM lessons for middle school students to promote interest in STEM fields.",
    image: "/images/pic02.jpg",
  },
  {
    title: "Tutor",
    organization: "Randolph College",
    description:
      "Provided academic support to students, enhancing their understanding of complex subjects. Developed customized lesson plans and resources to meet individual student needs.",
    image: "/images/pic03.jpg",
  },
  {
    title: "IT Help Desk Staff",
    organization: "Randolph College",
    description:
      "Assisted students and faculty with technical issues related to hardware and software. Maintained a high level of customer service while troubleshooting various IT problems.",
    image: "/images/pic04.jpg",
  },
  {
    title: "Judiciary Chair",
    organization: "Randolph College",
    description:
      "Chaired judiciary committee meetings, overseeing student conduct cases and policy violations. Interpreted and applied college bylaws to ensure fair and consistent outcomes.",
    image: "/images/pic05.jpg",
  },
  {
    title: "Member – Society of Physics Students (SPS)",
    organization: "Randolph College",
    description:
      "Planned and organized events to promote interest in physics and engage students in STEM activities.",
    image: "/images/pic06.jpg",
  },
  {
    title: "SciFest Internship Participant",
    organization: "SciFest",
    description:
      "Assisted in organizing a LEGO competition and engaging in community science outreach activities. Developed interactive STEM lessons for middle school students.",
    image: "/images/pic07.jpg",
  },
  {
    title: "CodePath TIP Program Participant",
    organization: "CodePath",
    description:
      "Engaged in hands-on learning to enhance technical interview skills and prepare for future job opportunities.",
    image: "/images/pic08.jpg",
  },
  {
    title: "SOS Volunteership",
    organization: "SOS Children's Villages, Ethiopia",
    description:
      "Volunteered with SOS Children's Villages in Ethiopia, organizing fundraising events and facilitating educational programs for underprivileged children.",
    image: "/images/pic09.jpg",
  },
];
