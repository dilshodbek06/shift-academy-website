export interface Project {
  id: number;
  title: string;
  student: string;
  image: string;
  link: string;
  course: string;
}

export const studentProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    student: "Jahon G'aniyev",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    link: "https://github.com/jahon",
    course: "Frontend React"
  },
  {
    id: 2,
    title: "Real Estate Platform",
    student: "Dildora Alimova",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop",
    link: "https://github.com/dildora",
    course: "Fullstack Node.js"
  },
  {
    id: 3,
    title: "Fintech Mobile App",
    student: "Sardor Karimov",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=2670&auto=format&fit=crop",
    link: "https://github.com/sardor",
    course: "Mobil Dasturlash"
  },
  {
    id: 4,
    title: "EdTech Learning Portal",
    student: "Malika Tohirova",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop",
    link: "https://github.com/malika",
    course: "Frontend React"
  },
  {
    id: 5,
    title: "AI Image Generator UI",
    student: "Bekzod Umarov",
    image: "https://images.unsplash.com/photo-1620712948633-53e346fbb23e?q=80&w=2574&auto=format&fit=crop",
    link: "https://github.com/bekzod",
    course: "Frontend Vue"
  },
  {
    id: 6,
    title: "Restaurant POS System",
    student: "Aziza Qodirova",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2670&auto=format&fit=crop",
    link: "https://github.com/aziza",
    course: "Java Backend"
  }
];
