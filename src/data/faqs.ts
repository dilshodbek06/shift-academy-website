export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
 { id: "faq-1",  
  question: "O'qish uchun kompyuter kerakmi yoki akademiyada bormi?", 
  answer: "Darslar uchun akademiyada kompyuterlar mavjud emas, uyga vazifalarni qilish uchun albatta o'zingizning shaxsiy kompyuteringiz bo'lishi tavsiya etiladi." 
},
  {
    id: "faq-2",
    question: "Dasturlashni o‘rganish uchun ingliz tili yoki matematika shartmi?",
    answer:
      "Majburiy emas. Darslar o‘zbek tilida olib boriladi va hamma narsa noldan tushuntiriladi. Ingliz tili va matematika bo‘lsa, o‘rganish jarayoni tezlashadi — biz esa kerakli terminlar va mantiqiy fikrlashni dars davomida asta-sekin kuchaytirib boramiz."
  },
  {
    id: "faq-3",
    question: "Darslar qaysi payt bo‘ladi va davomiyligi qancha?",
    answer:
      "Darslarimiz haftada 3 kun bo‘ladi. Guruhingizga qarab ertalabki yoki kechki smenalarni tanlashingiz mumkin. Har bir dars 3 soat davom etadi."
  },
  {
    id: "faq-4",
    question: "Kursga kirish uchun boshlang‘ich bilim kerakmi?",
    answer:
      "Boshlang‘ich kurslar uchun shart emas — noldan boshlaymiz. Agar sizda ozroq tajriba bo‘lsa, darajangizga mos guruh tanlashga yordam beramiz."
  },
  {
    id: "faq-5",
    question: "Necha yoshdan o‘qishga qabul qilasiz?",
    answer:
      "Kurslar yo‘nalishiga qarab qabul yoshi farq qiladi. Odatda o‘quvchilarimiz maktab yuqori sinflari, talabalar va kasbini o‘zgartirmoqchi bo‘lganlar. Konsultatsiyada sizga mos guruhni tavsiya qilamiz."
  },
  {
    id: "faq-6",
    question: "Darslar offline bo‘ladimi yoki online ham bormi?",
    answer:
      "Yo‘nalishga qarab offline va online formatlar mavjud. Online darslarda ham amaliy topshiriqlar, mentor nazorati va materiallar to‘liq beriladi."
  },
  {
  id: "faq-7",
  question: "Darslarni o‘tkazib yuborsam nima bo‘ladi?",
  answer:
    "Agar biror darsni qoldirib qo‘ysangiz, mavzudan ortda qolmasligingiz uchun videodars va qo‘shimcha materiallar sizda mavjud bo'ladi. Shunga qaramay, yaxshi natija uchun darslarni imkon qadar qoldirmaslik tavsiya etiladi."
},
  {
  id: "faq-8",
  question: "Uyga vazifalar va amaliyotlar qanday bo‘ladi?",
  answer:
    "Har bir mavzu bo‘yicha amaliy uyga vazifalar beriladi. Keyingi dars boshida vazifalar tekshiriladi, xatolar bo‘yicha tushuntirish va baholash beriladi. Natijalar muntazam ravishda ota-onalarga ham yetkazib boriladi."
},
  {
    id: "faq-9",
    question: "Kurs yakunida sertifikat beriladimi?",
    answer:
      "Ha, kursni muvaffaqiyatli bitirgan o‘quvchilarga sertifikat beriladi."
  },
  {
    id: "faq-10",
    question: "Kurs narxi qancha va qanday to‘lov qilinadi?",
    answer:
      "Narxlar tanlangan yo‘nalish va formatga (offline/online) bog‘liq. Aniq narx va guruhlar jadvalini bepul konsultatsiyada aytib beramiz."
  }
];
