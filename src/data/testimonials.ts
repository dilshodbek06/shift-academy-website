export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string; // Used mostly as placeholder
  quote: string;
  rating: number;
}

export interface VideoTestimonial {
  id: string;
  name: string;
  role: string;
  thumbnail: string;
  videoUrl: string; // e.g. youtube embed url
}

export const textTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aziz Rakhimov",
    role: "Frontend Developer at EPAM",
    avatar: "AR",
    quote: "Shift Academy da o'qish mening karyeramni butunlay o'zgartirdi. Mentorlar har doim yordamga tayyor edi va eng muhimi haqiqiy proyektlarda ishlash imkonini berishdi.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Malika Ismoilova",
    role: "QA Engineer at Uzum",
    avatar: "MI",
    quote: "Juda qisqa vaqt ichida darslikni to'laqonli o'zlashtirdim. Darslar amaliyotga asoslangani juda katta plyus. Hozirda o'z ishimni topganman, katta rahmat!",
    rating: 5,
  },
  {
    id: "t3",
    name: "Javohir Toshmatov",
    role: "Backend Engineer",
    avatar: "JT",
    quote: "Node.js kursini o'qidim va o'zim bilmagan shuncha chuqur texnologiyalar bilan ishlashni o'rgandim. Muhit va networking ajoyib darajada.",
    rating: 4,
  }
];

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "v1",
    name: "Sherzod Abdullayev",
    role: "Mobile Dasturchi",
    thumbnail: "/video-thumb-1.jpg", 
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // placeholder
  },
  {
    id: "v2",
    name: "Nodira Karimova",
    role: "Frontend Dasturchi",
    thumbnail: "/video-thumb-2.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "v3",
    name: "Alisher Ubaydullayev",
    role: "Data Scientist",
    thumbnail: "/video-thumb-3.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];
