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
  videoUrl: string; // e.g. instagram reel url
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
  },
  {
    id: "t4",
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
    name: "Mirfayz Karimov",
    role: "Software Engineer",
    thumbnail: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop", 
    videoUrl: "https://www.instagram.com/reel/Cy3cYceNdrA/" // Example IG Reel
  },
  {
    id: "v2",
    name: "Shoxruh Nematov",
    role: "Software Engineer",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://www.instagram.com/reel/Cwfkwgot5U8/" // Example IG Reel
  },
  {
    id: "v3",
    name: "Javohir Haqnazarov",
    role: "Backend Dasturchi",
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://www.instagram.com/reel/C0eezjUNkXc/" // Example IG Reel
  },
  {
    id: "v4",
    name: "Akmal Hakimov",
    role: "Fullstack Dasturchi",
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://www.instagram.com/reel/DEfLa3gtux1/" // Example IG Reel
  },
    {
    id: "v5",
    name: "Ibrohim O'rinov",
    role: "SMM",
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://www.instagram.com/reel/DJhPstuoAi2/" // Example IG Reel
  }
];
