import { Container } from "@/components/shared/Container"
import { YoutubeIcon, Instagram, Send } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <img 
                src="/logo.svg" 
                alt="Shift Academy Logo" 
                className="h-10 w-auto transition-all duration-300" 
              />
              <div className="flex flex-col justify-center">
                <span className="font-black text-[18px] leading-[0.9] tracking-[0.08em] text-slate-900 uppercase">Shift</span>
                <span className="font-black text-[18px] leading-[0.9] tracking-[0.08em] text-slate-900 uppercase">Academy</span>
              </div>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
              O'zbekistondagi zamonaviy IT va dasturlash markazi. Kelajak kasblarini biz bilan o'rganing.
            </p>
            <div className="flex items-center gap-4">
              <a target="_blank" href="https://www.instagram.com/shiftacademy.new/" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/30 hover:shadow-md transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a target="_blank" href="https://t.me/shiftacademyuz" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/30 hover:shadow-md transition-all">
                <Send className="w-4 h-4" />
              </a>
              <a target="_blank" href="https://youtube.com/@shiftacademyuz" className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand/30 hover:shadow-md transition-all">
                <YoutubeIcon className="w-4 h-4" />
              </a>
             
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4">Yo'nalishlar</h4>
            <ul className="space-y-3">
              <li className="text-slate-500 text-sm font-medium transition-colors">Frontend Dasturlash</li>
              <li className="text-slate-500 text-sm font-medium transition-colors">Backend dasturlash</li>
              <li className="text-slate-500 text-sm font-medium transition-colors">SMM</li>
              <li className="text-slate-500 text-sm font-medium transition-colors">Kompyuter savodxonligi</li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4">Ma'lumotlar</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-500 text-sm font-medium hover:text-brand transition-colors">Biz haqimizda</a></li>
              <li><a href="#courses" className="text-slate-500 text-sm font-medium hover:text-brand transition-colors">Barcha kurslar</a></li>
              <li><a href="#reviews" className="text-slate-500 text-sm font-medium hover:text-brand transition-colors">O'quvchilar fikri</a></li>
              <li><a href="#contact" className="text-slate-500 text-sm font-medium hover:text-brand transition-colors">Biz bilan aloqa</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-bold mb-4">Huquqiy</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-500 text-sm font-medium hover:text-brand transition-colors">Ommaviy oferta</a></li>
              <li><a href="#" className="text-slate-500 text-sm font-medium hover:text-brand transition-colors">Maxfiylik siyosati</a></li>
              <li><a href="#" className="text-slate-500 text-sm font-medium hover:text-brand transition-colors">To'lov shartlari</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Shift Academy. Barcha huquqlar himoyalangan.
          </p>
         
        </div>
      </Container>
    </footer>
  )
}
