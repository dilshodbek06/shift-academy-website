import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/shared/Container"
import { Section } from "@/components/shared/Section"
import { Laptop, Clock, Video, FileText, Award, HelpCircle } from "lucide-react"

const reasons = [
  {
    icon: <Laptop className="w-8 h-8 text-brand" />,
    title: "100% Amaliyot",
    desc: "Nazariya juda kam beriladi. Darslarning 90% real loyihalar ustida kod yozish bilan o'tadi."
  },
  {
    icon: <Clock className="w-8 h-8 text-brand" />,
    title: "24/7 Mentorlik",
    desc: "Darsdan tashqari vaqtlarda ham savollaringizga javob beruvchi yordamchi ustozlar."
  },
  {
    icon: <Video className="w-8 h-8 text-brand" />,
    title: "Dars yozuvlari",
    desc: "Barcha darslar videoga yozib olinadi va maxsus platformamizga yuklab boriladi."
  },
  {
    icon: <FileText className="w-8 h-8 text-brand" />,
    title: "Boy Portfolio",
    desc: "Kurs oxiriga kelib rezumeyingizda 5+ ta ishlaydigan tayyor real loyihalar bo'ladi."
  },
  {
    icon: <Award className="w-8 h-8 text-brand" />,
    title: "Xalqaro Sertifikat",
    desc: "Kursni farqli yakunlagan o'quvchilarga mutaxassislikni tasdiqlovchi sertifikat."
  },
  {
    icon: <HelpCircle className="w-8 h-8 text-brand" />,
    title: "Vakansiyalarga elon",
    desc: "Kompaniyalardagi bo'sh ish o'rinlari haqida birinchilardan bo'lib sizga xabar beramiz."
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export const WhyUs = () => {
  return (
    <Section id="why-us" className="bg-slate-50 border-t border-slate-100">
      <Container>
        <div className="flex flex-col items-center mb-16 text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="text-brand border-brand/20 bg-brand/5 mb-4 px-4 py-1.5 shadow-sm text-sm font-semibold">Afzalliklar</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
            Nega aynan Shift Academy?
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Bizning ta'lim sifatimiz va yondashuvimiz boshqalardan nima bilan farq qiladi.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="glass-panel border-slate-200 bg-white h-full group hover:-translate-y-2 transition-transform duration-300 hover:shadow-xl hover:shadow-brand/5 rounded-[1.5rem] overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
