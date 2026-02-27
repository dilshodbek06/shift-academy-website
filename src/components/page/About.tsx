import { motion } from "framer-motion"
import { Code2, Users, Rocket, Target } from "lucide-react"
import { Container } from "@/components/shared/Container"
import { Section } from "@/components/shared/Section"

const methodologies = [
  {
    icon: <Code2 className="w-7 h-7 text-brand" />,
    title: "Amaliyotga asoslangan",
    desc: "Faqat nazariya emas. Har bir dars amaliyot va real loyihalar ustida ishlash bilan o'tadi."
  },
  {
    icon: <Users className="w-7 h-7 text-brand" />,
    title: "Kuchli mentorlik",
    desc: "Tajribali ustozlar kodingizni tekshirib (Code Review), xatolarni to'g'irlashda yordam beradi."
  },
  {
    icon: <Target className="w-7 h-7 text-brand" />,
    title: "Natijaga yo'naltirilgan",
    desc: "Maqsadimiz - dars o'tish emas, balki sizni ishga tayyor kuchli mutaxassis qilib yetishtirish."
  },
  {
    icon: <Rocket className="w-7 h-7 text-brand" />,
    title: "Startap muhiti",
    desc: "Boshqa o'quvchilar bilan jamoa bo'lib ishlash va startap loyihalarni yaratish tajribasi."
  }
]

export const About = () => {
  return (
    <Section id="about" className="overflow-hidden bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.2]">
              Biz faqat dars o'tmaymiz,
              <br className="hidden md:block"/>
              <span className="brand-gradient pb-2 inline-block">kadrlar tayyorlaymiz.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
              <span className="font-bold text-brand">Shift Academy</span>  — bu an'anaviy ta'limdan farq qiladigan, zamonaviy axborot texnologiyalari markazi. 
              Bizning asosiy vazifamiz — sizni bugungi kun talabiga javob beradigan kuchli dasturchi qilib tayyorlash.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {methodologies.map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Professional Image & Stats Layout */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full relative h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden group shadow-2xl"
          >
            {/* Main High-Quality Image */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2850" 
              alt="Students collaborating" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Image Overlay for contrast */}
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/5 transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />

            {/* Floating Glassmorphism Badge (Success Rate) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-auto bg-white/95 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50 max-w-sm"
            >
              <div className="flex items-center gap-5 mb-5">
                <div className="w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                  <Target className="w-7 h-7 text-brand" />
                </div>
                <div>
                  <h4 className="text-4xl font-black text-slate-900 tracking-tight leading-none mb-1">95%</h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Muvaffaqiyat</p>
                </div>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                  className="h-full bg-brand rounded-full" 
                />
              </div>
              <p className="text-sm text-slate-600 font-medium mt-4 leading-relaxed">
                Mentorlik va real loyihalar ustida ishlash orqali bitiruvchilarimizning asosiy qismi tezda ish topadi.
              </p>
            </motion.div>

            {/* Floating Circular Badge (Experience) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
              className="absolute top-8 right-8 w-28 h-28 bg-brand text-white rounded-full shadow-2xl shadow-brand/40 flex flex-col items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300"
            >
              <span className="text-3xl font-black mb-0.5 tracking-tighter">4+</span>
              <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider text-center leading-tight">Yillik<br/>Tajriba</span>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
