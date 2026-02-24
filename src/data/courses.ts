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
    id: "frontend-dev",
    title: "Frontend Dasturlash (React)",
    description: "Zamonaviy web interfeyslar yaratish. HTML, CSS, JavaScript, Typescript va React.js ni chuqur o'rganing.",
    duration: "10 oy",
    format: ["Offline"],
    level: "Boshlang'ich",
    category: "Frontend",
    outcomes: ["5+ real loyihalar", "Junior Frontend Developer darajasi", "Veb-saytlar va web-ilovalar yaratish"],
  },
  {
    id: "backend-dev",
    title: "Backend Dasturlash (Python)",
    description: "Server arxitekturasi, ma'lumotlar bazasi va API lar yaratishni noldan o'rganing.",
    duration: "6 oy",
    format: ["Offline"],
    level: "Boshlang'ich",
    category: "Backend",
    outcomes: ["Murakkab API yozish", "PostgreSQL bilan ishlash", "Xavfsizlik va performans"],
  },
  {
    id: "smm-dev",
    title: "SMM - Social Media Marketing",
    description: "Ijtimoiy tarmoqlarda brendingizni rivojlantirish va marketing strategiyalarini o'rganing.",
    duration: "2 oy",
    format: ["Offline", "Online"],
    level: "Boshlang'ich",
    category: "SMM",
    outcomes: ["iOS/Android ilovalar", "App Store/Play Market'ga yuklash", "Cross-platform development"],
  },
  {
    id: "ks-engineering",
    title: "Kompyuter savodxonligi",
    description: "Kompyuter texnologiyalaridan samarali foydalanishni o'rganing. Microsoft Office, Internet va boshqa dasturlarni o'rganing.",
    duration: "1 oy",
    format: ["Offline", "Online"],
    level: "Boshlang'ich",
    category: "Kompyuter savodxonligi",
    outcomes: ["Microsoft Office", "Internet", "Boshqa dasturlar"],
  }
];

export const courseCategories = ["Barchasi", "Frontend", "Backend", "SMM", "Kompyuter savodxonligi"];
