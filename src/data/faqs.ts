export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "faq-1",
    question: "O'qish uchun kompyuter kerakmi yoki akademiyada bormi?",
    answer: "Offline darslar uchun akademiyada barcha zamonaviy kompyuterlar bilan ta'minlangan yopiq hudud (coworking) mavjud. Lekin uyga vazifalarni qilish uchun albatta o'zingizning shaxsiy kompyuteringiz bo'lishi tavsiya etiladi."
  },
  {
    id: "faq-2",
    question: "Dasturlashni o'rganish uchun ingliz tili yoki matematika shartmi?",
    answer: "Majburiy emas, lekin poydevoringizni mustahkamlashga juda katta yordam beradi. Darslar o'zbek tilida olib boriladi. Matematika va ingliz tili esa o'qish davomida asta-sekin yaxshilanib boradi."
  },
  {
    id: "faq-3",
    question: "Kursni yakunlaganidan keyin ish topish kafolati bormi?",
    answer: "Bizning mentorlarimiz va HR mutaxassislarimiz sizga kuchli portfolio yaratish, rezyume tayyorlash hamda suhbatlardan muvaffaqiyatli o'tishingiz uchun barcha ko'nikmalarni o'rgatadi. Agar siz barcha vazifalarni va yakuniy loyihalarni 100% topshirsangiz, hamkor kompaniyalarga ishga joylashishingizga kafolat beramiz."
  },
  {
    id: "faq-4",
    question: "Darslar qaysi payt bo'ladi va davomiyligi qancha?",
    answer: "Odatda darslar hafta davomida 3 kun o'tiladi. Sizning tanlovingizga ko'ra darslar ertalabki yoki kechki smentalarga bo'linadi. Har bir darsning davomiyligi kamida 2 soatni tashkil etadi."
  }
];
