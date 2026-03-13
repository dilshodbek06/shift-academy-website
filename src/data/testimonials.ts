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
  thumbnailTime?: number; // Time in seconds to use as the thumbnail poster frame
  thumbnail: string;
  videoUrl: string; // e.g. direct mp4 url
}

export const textTestimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Azizbek Aslonov",
    role: "Software Engineer at EPAM",
    avatar: "AR",
    quote: "Shift Academy jamoasiga rahmat. Kurs davomida mentorlardan sifatli bilim va tajriba oldim. Kursni bitirganimdan so'ng EPAM kompaniyasida ishga qabul qilindim.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Shoxruh Nematov",
    role: "Senior Software Engineer",
    avatar: "MI",
    quote: "Shift Academy tufayli hayotim juda o'zgardi. Shift Academy da o'qish eng to'g'ri qarorlarimdan biri bo'ldi. Xalqaro darajadagi o'quv dasturi va sifatli ta'lim tufayli yuqori darajadagi IT mutaxassis bo'lishga erishdim.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Mirfayz Karimov",
    role: "Software Engineer",
    avatar: "JT",
    quote: "Shift Academy da o'qish menga juda ko'p narsalarni o'rgatdi. Shift Academy jamoasidan juda minnatdorman. Dasturlashni o'rganmoqchi bo'lganlarga tavsiya qilaman.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Akmal Hakimov",
    role: "Backend developer",
    avatar: "JT",
    quote: "Shift Academyda dasturlash kursini o'qidim va o'zim bilmagan chuqur texnologiyalar bilan ishlashni o'rgandim. Muhit va networking ajoyib darajada.",
    rating: 5,  
  },
  {
    id: "t5",
    name: "Azizbek Rajabov",
    role: "Frontend mentor at OXU",
    avatar: "JT",
    quote: "Hozirgi muvaffaqiyatlarimga erishishimda Shift Academy katta rol o'ynadi. Bu yerda sifatli va kuchli bilim berishadi. Shift Academy jamoasiga rahmat.",
    rating: 5,  
  },
  {
    id: "t6",
    name: "Huvaydo Nasriyev",
    role: "Frontend developer",
    avatar: "JT",
    quote: "Shift Academyda Frontend kursini o'qidim va hali kursni bitirmasdan turib o'zimni dastlabki daromadimni topdim. Shift Academy jamoasiga rahmat.",
    rating: 5,  
  },
   {
    id: "t7",
    name: "Ibrohim O'rinov",
    role: "SMM Specialist",
    avatar: "JT",
    quote: "SMM bo'yicha sifatli kurs qidirayotgan edim va Shift Academyni tanladim. Bu yerda SMM ni chuqur o'rganib, kursni yakunlamasdan turib ishga kirdim. Shift Academy jamoasiga rahmat.",
    rating: 5,  
  }
];


export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "v2",
    name: "Shoxruh Nematov",
    role: "Software Engineer",
    thumbnailTime: 2,
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://jkifnszrnidajmhzlodj.supabase.co/storage/v1/object/public/videos/reviews/review1.mp4" 
  },
   {
    id: "v1",
    name: "Mirfayz Karimov",
    role: "Software Engineer",
    thumbnailTime:2,
    thumbnail: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop", 
    videoUrl: "https://jkifnszrnidajmhzlodj.supabase.co/storage/v1/object/public/videos/reviews/review2.mp4" 
  },
  // {
  //   id: "v3",
  //   name: "Javohir Haqnazarov",
  //   role: "Backend Dasturchi",
  //   thumbnailTime: 5,
  //   thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
  //   videoUrl: "https://jkifnszrnidajmhzlodj.supabase.co/storage/v1/object/public/videos/reviews/review3.mp4" 
  // },
  {
    id: "v3",
    name: "Akmal Hakimov",
    role: "Fullstack Dasturchi",
    thumbnailTime: 4,
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://jkifnszrnidajmhzlodj.supabase.co/storage/v1/object/public/videos/reviews/review4.mp4" 
  },
    {
    id: "v4",
    name: "Ibrohim O'rinov",
    role: "SMM",
    thumbnailTime: 2.5,
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    videoUrl: "https://jkifnszrnidajmhzlodj.supabase.co/storage/v1/object/public/videos/reviews/review3.MP4" 
  }
];
