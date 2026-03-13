export type CourseLevel = "Boshlang'ich" | "O'rta" | "Kuchli";
export type CourseFormat = "Online" | "Offline" | "Gibrid";

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string; // e.g., "6 oy"
  format: CourseFormat[];
  level: CourseLevel;
  category: string;
  outcomes: string[];
}

export const courses: Course[] = [
  {
    id: "fullstack-dev",
    title: "Fullstack dasturlash",
    description:
      "Ushbu kursda siz frontend qismida React va TypeScript yordamida tezkor, interaktiv va foydalanuvchi uchun qulay interfeyslar yaratishni, backend qismida esa Java orqali kuchli, xavfsiz va barqaror server ilovalar ishlab chiqishni o‘rganasiz.",
    duration: "11 oy",
    format: ["Offline"],
    level: "Kuchli",
    category: "Dasturlash",
   outcomes: [
  "React va TypeScript yordamida zamonaviy frontend yaratish",
  "Java asosida kuchli backend ilovalar ishlab chiqish",
  "REST API va database bilan ishlash",
  "Frontend va backend integratsiyasini tushunish",
  "Junior Fullstack Developer darajasiga chiqish",
]
  },
  {
    id: "smm-dev",
    title: "SMM - Social Media Marketing",
    description:
      "Ijtimoiy tarmoqlarda brendingizni rivojlantirish va marketing strategiyalarini o'rganing.",
    duration: "2 oy",
    format: ["Offline", "Online"],
    level: "Kuchli",
    category: "SMM",
    outcomes: [
      "Kontent strategiya va reja tuzish",
      "Post/Reels/Story uchun kreativ g‘oyalar ishlab chiqish",
      "Target reklama (Meta Ads) asoslari va sozlash",
      "Auditoriya tahlili va KPI (reach, engagement, CTR) bilan ishlash",
      "SMM hisobot (report) tayyorlash va optimizatsiya",
    ],
  },
  {
    id: "ks-engineering",
    title: "Kompyuter savodxonligi",
    description:
      "Kompyuter savodxonligini o'rganing: Microsoft Office, internetdan xavfsiz va samarali foydalanish hamda kundalik zarur dasturlar bilan ishlashni o‘rganing.",
    duration: "1 oy",
    format: ["Offline"],
    level: "Kuchli",
    category: "Kompyuter savodxonligi",
    outcomes: [
      "Microsoft Office",
      "Internet bilan ishlash",
      "Google dasturlari bilan ishlash",
      "Boshqa dasturlar",
    ],
  },
];

export const courseCategories = [
  "Barchasi",
  "Dasturlash",
  "SMM",
  "Kompyuter savodxonligi",
];
