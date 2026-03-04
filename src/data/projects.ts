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
    title: "Kids clothes website",
    student: "Shaxzod Qosimov",
    gender: "male",
    image: "/images/projects/project11.webp",
    link: "https://bollar-kiyimlari-project.vercel.app/",
    course: "Frontend dasturlash",
  },
 
  {
    id: 2,
    title: "Med Helper website",
    student: "Rayimbek Narziyev",
    gender: "male",
    image: "/images/projects/project2.webp",
    link: "https://ekomedtreyd-mocha.vercel.app/",
    course: "Frontend dasturlash",
  },
  {
    id: 3,
    title: "Ecommerce website",
    student: "Azizbek Narzilloyev",
    gender: "male",
    image: "/images/projects/project3.webp",
    link: "https://internet-shop-1rs6.vercel.app/",
    course: "Frontend dasturlash",
  },
  {
    id: 4,
    title: "Portfolio website",
    student: "Faridbek Roziqov",
    gender: "male",
    image: "/images/projects/project7.webp",
    link: "https://portfolio-olive-three-0e267g3eu7.vercel.app/",
    course: "Frontend dasturlash",
  },
  {
    id: 5,
    title: "Geology website",
    student: "Huvaydo Nasriyev",
    gender: "male",
    image: "/images/projects/project10.webp",
    link: "https://topogeobazis.uz/",
    course: "Frontend dasturlash",
  },
  {
    id: 6,
    title: "Education website",
    student: "Azizbek Narzilloyev",
    gender: "male",
    image: "/images/projects/project4.webp",
    link: "https://pedestal-education-w-cnt2.bolt.host/",
    course: "Frontend dasturlash",
  },
  {
    id: 7,
    title: "Picnic shop website",
    student: "Faridbek Roziqov",
    gender: "male",
    image: "/images/projects/project8.webp",
    link: "https://picnic-uz-2a3b.vercel.app/",
    course: "Frontend dasturlash",
  },
  {
    id: 8,
    title: "Portfolio website",
    student: "Abdullo Turayev",
    gender: "male",
    image: "/images/projects/project6.webp",
    link: "https://abdulloportfolioapp.netlify.app/",
    course: "Frontend dasturlash",
  },
  {
    id: 9,
    title: "Arabic tutor website",
    student: "Azimbek Gulyamov",
    gender: "male",
    image: "/images/projects/project5.webp",
    link: "https://bayt.dev",
    course: "Frontend dasturlash",
  },
  {
    id: 10,
    title: "Pizza website",
    student: "Faridbek Roziqov",
    gender: "male",
    image: "/images/projects/project9.webp",
    link: "https://belissimoo-pizzaa.netlify.app/",
    course: "Frontend dasturlash",
  },
   {
    id: 11,
    title: "Portfolio website",
    student: "Azimbek Gulyamov",
    gender: "male",
    image: "/images/projects/project1.webp",
    link: "https://azzim.me",
    course: "Frontend dasturlash",
  },
 
];
