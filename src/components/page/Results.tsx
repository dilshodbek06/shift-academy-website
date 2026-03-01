import { useState } from "react"
import { motion } from "framer-motion"
import { Trophy, Briefcase, TrendingUp, Building2, Globe2, Monitor, Code2, GraduationCap, Gem } from "lucide-react"
import { Container } from "@/components/shared/Container"
import { Section } from "@/components/shared/Section"

const companies = [
  {
    name: "EPAM",
    domain: "epam.com",
    icon: Code2,
  },
  {
    name: "Upwork",
    domain: "upwork.com",
    icon: Monitor,
  },
  {
    name: "OXU",
    domain: "oxu.uz",
    icon: GraduationCap,
  },
  {
    name: "Fonon",
    domain: "fonon.uz",
    icon: Gem,
  },
  {
    name: "Freelance",
    domain: "freelancer.com",
    icon: Globe2,
  },
  {
    name: "NorthWest",
    domain: "northwestern.edu",
    icon: Building2,
  },
  {
    name: "BXU",
    domain: "buxdu.uz",
    icon: GraduationCap,
  },
  {
    name: "Kwork",
    domain: "kwork.com",
    icon: Briefcase,
  },
  {
    name: "RealSoft",
    domain: "realsoft.uz",
    icon: Code2,
  },
]

const CompanyCard = ({ company }: { company: typeof companies[0] }) => {
  const [imgSrc, setImgSrc] = useState(`https://logo.clearbit.com/${company.domain}?size=128`)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (imgSrc.includes('clearbit')) {
      // Fallback to google favicon if clearbit fails
      setImgSrc(`https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`)
    } else {
      // Final fallback to Lucide icon
      setHasError(true)
    }
  }

  const { icon: Icon } = company

  return (
    <div 
      className={`h-24 md:h-28 w-52 md:w-64 bg-white border border-slate-100 rounded-3xl flex items-center justify-center gap-3 md:gap-4 px-4 md:px-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group cursor-default`}
    >
      {!hasError ? (
        <div className="relative flex-shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
          <img 
            src={imgSrc} 
            alt={`${company.name} logo`} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
            onError={handleError}
          />
        </div>
      ) : (
        <Icon className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 text-brand transition-transform duration-500 group-hover:scale-110`} />
      )}
      <span className={`font-extrabold text-xl md:text-2xl text-slate-800 transition-colors tracking-tight truncate`}>
        {company.name}
      </span>
    </div>
  )
}

export const Results = () => {
  return (
    <Section id="results" className="bg-[#F8FAFC] py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 transition-all pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 transition-all pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 text-sm font-bold mb-6"
          >
            <Trophy className="w-4 h-4 text-brand" />
            Natijalar
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight mb-6 text-slate-900 leading-[1.1]"
          >
            Bitiruvchilar <span className="text-brand">qayerda ishlashadi?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed"
          >
            Kuchli ta'lim tizimi orqali o'quvchilarimiz O'zbekistonning va jahonning IT kompaniyalariga ishga joylashishmoqda.
          </motion.p>
        </div>

        {/* Top Highlight Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] p-8 sm:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity group-hover:scale-110 duration-500">
               <Globe2 className="w-24 h-24 text-brand" />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tighter mb-4 leading-tight">
                Xalqaro va Mahalliy Kompaniyalar
              </h3>
              <div className="w-12 h-1.5 bg-brand rounded-full mb-6" />
              <p className="text-xl font-bold text-slate-800 mb-2">Global darajadagi kadrlar</p>
              <p className="text-slate-500 font-medium leading-relaxed">
                Bitiruvchilarimiz O'zbekistonning va dunyoning nufuzli kompaniyalarida hamda <span className="font-bold text-slate-700">Upwork</span> kabi platformalarda muvaffaqiyatli mutaxassis yoki junior bo'lib ish boshlashmoqda.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand text-white rounded-[2rem] p-8 sm:p-10 shadow-xl shadow-brand/30 relative overflow-hidden group"
          >
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity group-hover:scale-110 duration-500">
               <TrendingUp className="w-24 h-24 text-white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-5xl sm:text-6xl font-black tracking-tighter mb-4">10M+</h3>
              <div className="w-12 h-1.5 bg-white/40 rounded-full mb-6" />
              <p className="text-xl font-bold mb-2">O'rtacha maosh</p>
              <p className="text-brand-50 font-medium leading-relaxed">Katta kompaniyalardagi muvaffaqiyatli bitiruvchilarimiz yaxshi daromadga chiqishadi.</p>
            </div>
          </motion.div>
        </div>

        {/* Simplified Companies Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="w-full mt-32"
        >
            <div className="flex flex-col items-center justify-center mb-10 text-center px-4">
               <p className="text-slate-500 font-bold mb-4 uppercase tracking-widest text-sm">Bizning bitiruvchilar faoliyat yuritadigan kompaniyalar</p>
            </div>
            
            <div className="relative w-full overflow-hidden mt-8 mb-6 py-6 group/section">
              {/* Fade masks for smooth edges - blending with section bg F8FAFC */}
              <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

              <div className="flex flex-col gap-8 w-[200vw] sm:w-[150vw] xl:w-full ml-[-50vw] sm:ml-[-25vw] xl:ml-0">
                 {/* Row 1 - Moves Left */}
                 <div className="flex relative w-full">
                    <motion.div
                      className="flex gap-6 min-w-max pr-6"
                      animate={{ x: ["0%", "-50%"] }}
                      transition={{ 
                        repeat: Infinity, 
                        ease: "linear", 
                        duration: 40
                      }}
                    >
                      {[...companies, ...companies].map((company, idx) => (
                        <CompanyCard key={`row1-${idx}`} company={company} />
                      ))}
                    </motion.div>
                 </div>

                 {/* Row 2 - Moves Right (Reverse) */}
                 <div className="flex relative w-full">
                    <motion.div
                      className="flex gap-6 min-w-max pr-6"
                      animate={{ x: ["-50%", "0%"] }}
                      transition={{ 
                        repeat: Infinity, 
                        ease: "linear", 
                        duration: 45
                      }}
                    >
                      {/* Using reverse order for visual variety */}
                      {[...companies].reverse().concat([...companies].reverse()).map((company, idx) => (
                        <CompanyCard key={`row2-${idx}`} company={company} />
                      ))}
                    </motion.div>
                 </div>
              </div>
            </div>
        </motion.div>
      </Container>
    </Section>
  )
}
