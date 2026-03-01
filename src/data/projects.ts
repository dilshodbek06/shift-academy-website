export interface Project {
  id: number;
  title: string;
  student: string;
  gender: "male" | "female";
  image: string;
  link: string;
  course: string;
}

export const studentProjects: Project[] = [
  {
    id: 1,
    title: "Portfolio website",
    student: "Azimbek Gulyamov",
    gender: "male",
    image: "/images/projects/project1.png",
    link: "https://azzim.me",
    course: "Frontend dasturlash",
  },
  {
    id: 2,
    title: "Med Helper website",
    student: "Rayimbek Narziyev",
    gender: "male",
    image: "/images/projects/project2.png",
    link: "https://ekomedtreyd-mocha.vercel.app/",
    course: "Frontend dasturlash",
  },
  {
    id: 3,
    title: "Ecommerce website",
    student: "Azizbek Narzilloyev",
    gender: "male",
    image: "/images/projects/project3.png",
    link: "https://internet-shop-1rs6.vercel.app/",
    course: "Frontend dasturlash",
  },
  {
    id: 4,
    title: "Education website",
    student: "Azizbek Narzilloyev",
    gender: "male",
    image: "/images/projects/project4.png",
    link: "https://pedestal-education-w-cnt2.bolt.host/",
    course: "Frontend dasturlash",
  },
  {
    id: 5,
    title: "Arabic tutor website",
    student: "Azimbek Gulyamov",
    gender: "male",
    image: "/images/projects/project5.png",
    link: "https://bayt.dev",
    course: "Frontend dasturlash",
  },
];
