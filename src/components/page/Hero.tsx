import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import { Section } from "@/components/shared/Section"

export const Hero = () => {
  return (
    <Section id="home" className="pt-32 lg:pt-20 pb-20 overflow-hidden min-h-[95vh] flex flex-col justify-center relative bg-[#FAFCFF]">
      {/* Premium Light Pattern Background */}
      <div className="absolute inset-0 z-0">
        {/* Abstract Glowing Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand/10 blur-[100px] opacity-70 animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-300/10 blur-[120px] opacity-50" />
        <div className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] rounded-full bg-purple-200/20 blur-[150px] opacity-40" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(49,168,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(49,168,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <Container className="relative z-10 w-full flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">
           

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.1] pb-2"
            >
              Dasturlashni noldan o'rganing — <br/>
              <span className="brand-gradient inline-block">real loyihalar bilan</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed font-medium"
            >
              Zamonaviy IT kasbini egallang. Kuchli mentorlar yordamida portfoliongizni 
              boyiting va qisqa muddatda muvaffaqiyatli ishga joylashing.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-brand hover:bg-brand-600 text-white shadow-lg shadow-brand/25 hover:shadow-brand/40 transition-all h-14 px-8 text-base font-semibold group rounded-xl"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Bepul konsultatsiya
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-slate-200 hover:bg-slate-50 text-slate-700 h-14 px-8 text-base font-semibold rounded-xl bg-white shadow-sm transition-all"
                onClick={() => document.querySelector('#courses')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Barcha kurslar
                <ChevronRight className="ml-2 h-5 w-5 text-slate-400 group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-6 mt-16 pt-8 border-t border-slate-200 w-full"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden shadow-sm">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i}&backgroundColor=e2e8f0`} alt="student" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600 font-semibold">1200+ o'quvchilar ishonchi</p>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Dashboard Mockup Abstract */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block h-[600px] w-full mt-10"
          >
             <div className="absolute inset-0 bg-white/70 backdrop-blur-3xl rounded-[2rem] border border-white shadow-2xl overflow-hidden p-6 flex flex-col">
                <div className="w-full h-12 border-b border-slate-100 flex items-center justify-between mb-6 px-2">
                   <div className="flex gap-2.5">
                     <div className="w-3.5 h-3.5 rounded-full bg-red-400 shadow-sm" />
                     <div className="w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-sm" />
                     <div className="w-3.5 h-3.5 rounded-full bg-green-400 shadow-sm" />
                   </div>
                   <div className="h-6 w-40 bg-slate-100 rounded-md ring-1 ring-inset ring-slate-200" />
                </div>
                
                <div className="flex gap-6 flex-1 px-2 pb-2">
                  <div className="w-1/3 flex flex-col gap-4">
                    <div className="w-full h-28 bg-brand/5 rounded-2xl border border-brand/10 p-5 items-center justify-center flex flex-col transition-all hover:scale-[1.02]">
                      <div className="w-12 h-12 rounded-full bg-brand/20 mb-3 flex items-center justify-center text-brand">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div className="h-2.5 w-full bg-blue-200/50 rounded-full" />
                    </div>
                    <div className="w-full flex-1 bg-white rounded-2xl border border-slate-100 shadow-sm p-5 hover:border-brand/30 transition-all">
                       <div className="space-y-4 pt-2">
                         {[1,2,3,4].map(i => (
                           <div key={i} className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 shadow-sm" />
                             <div className="flex-1 space-y-2.5">
                               <div className="h-2.5 w-full bg-slate-100 rounded-full" />
                               <div className="h-2 w-2/3 bg-slate-50 rounded-full" />
                             </div>
                           </div>
                         ))}
                       </div>
                    </div>
                  </div>
                  
                  <div className="w-2/3 flex flex-col gap-4">
                    <div className="w-full bg-brand rounded-2xl p-8 shadow-xl shadow-brand/20 text-white relative overflow-hidden transition-all hover:scale-[1.02]">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
                      <h3 className="font-semibold mb-2 text-white/90">Portfolio loyihalar</h3>
                      <div className="text-4xl font-extrabold mb-5 tracking-tight">Real Tajriba</div>
                      <div className="w-full h-2.5 bg-black/20 rounded-full overflow-hidden">
                        <div className="w-[100%] h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                      </div>
                    </div>
                    
                    <div className="w-full flex-1 bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-100 shadow-sm p-7 relative">
                       <h4 className="font-bold text-slate-800 mb-6 text-lg">Ta'lim jarayoni</h4>
                       <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[15px] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand before:to-transparent">
                          {[
                            "Zamonaviy texnologiyalarni o'zlashtirish", 
                            "Kuchli mentorlar nazorati (Code Review)", 
                            "Real startup loyihalarda qatnashish", 
                            "Texnik suhbatdan muvaffaqiyatli o'tish"
                          ].map((step, i) => (
                             <div key={i} className="relative flex items-center gap-6 group">
                              <div className="flex z-10 items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-brand text-white shadow-md">
                                <span className="text-xs font-bold">{i+1}</span>
                              </div>
                              <div className="flex-1 p-3 px-4 rounded-xl bg-white border border-slate-100 shadow-sm cursor-default hover:border-brand/30 transition-colors">
                                <h5 className="font-semibold text-slate-700 text-sm leading-snug">{step}</h5>
                              </div>
                            </div>
                          ))}
                       </div>
                    </div>
                  </div>
                </div>
             </div>
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
