import * as React from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNav } from "./MobileNav"

const navLinks = [
  { href: "#home", label: "Asosiy" },
  { href: "#courses", label: "Kurslar" },
  { href: "#about", label: "Biz haqimizda" },
  { href: "#results", label: "Natijalar" },
  { href: "#projects", label: "Loyihalar" },
  { href: "#why-us", label: "Afzalliklar" },
  { href: "#reviews", label: "Sharhlar" },
  { href: "#contact", label: "Aloqa" },
]

export const Header = () => {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = React.useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm py-2" : "bg-transparent border-transparent py-4"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" title="Shift Academy" onClick={(e) => handleScroll(e, "#home")} className="flex items-center gap-3 group">
          <img 
            src="/logo.svg" 
            alt="Shift Academy Logo" 
            className="h-10 w-auto group-hover:scale-105 transition-transform" 
          />
          <div className="flex flex-col justify-center">
            <span className="font-black text-[19px] leading-[0.9] tracking-[0.08em] text-slate-900 uppercase">Shift</span>
            <span className="font-black text-[19px] leading-[1.1] tracking-[0.08em] text-slate-900 uppercase">Academy</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 bg-white/50 backdrop-blur-md px-6 py-2.5 rounded-full border border-slate-200/50 shadow-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-semibold text-slate-600 hover:text-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            className="hidden sm:inline-flex bg-brand hover:bg-brand-600 text-white shadow-md shadow-brand/20 transition-all font-semibold rounded-xl px-6"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Bepul konsultatsiya
          </Button>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-slate-900 hover:bg-slate-100 hover:text-black">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white border-slate-200 p-0 text-slate-900">
                <MobileNav navLinks={navLinks} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </motion.header>
  )
}
