import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import { Section } from "@/components/shared/Section"

export const CTA = () => {
  return (
    <Section className="py-24 bg-white relative overflow-hidden text-center z-10 border-t border-slate-100">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(49,168,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(49,168,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-60" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-brand rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-2xl shadow-brand/20 relative overflow-hidden"
        >
          {/* Internal Glow for CTA Card */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/20 rounded-full blur-3xl mix-blend-overlay" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/30 rounded-full blur-3xl mix-blend-overlay" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
              Karyerangizni o'zgartirish <br className="hidden md:block"/> vaqti keldi!
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-2xl leading-relaxed">
    Dasturlashni o‘rganib, muammolarni yechish va texnologiyalar bilan ishlash ko‘nikmasini shakllantiring. IT olamiga ishonchli qadam qo‘yib, yangi kasb va yangi imkoniyatlar sari yo‘l oching.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-brand shadow-xl hover:shadow-2xl transition-all h-16 px-10 text-lg font-bold group rounded-2xl"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Hoziroq ro'yxatdan o'tish
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
