import { Button } from "@/components/ui/button"

interface MobileNavProps {
  navLinks: { href: string; label: string }[]
}

export const MobileNav = ({ navLinks }: MobileNavProps) => {
  return (
    <div className="flex flex-col form-h-full h-full justify-between p-6 bg-white">
      <div>
        <div className="flex items-center gap-3 mb-10">
          <img 
            src="/logo.svg" 
            alt="Shift Academy Logo" 
            className="h-10 w-auto" 
          />
          <div className="flex flex-col justify-center flex">
            <span className="font-black text-[19px] leading-[0.9] tracking-[0.08em] text-slate-900 uppercase">Shift</span>
            <span className="font-black text-[19px] leading-[1.1] tracking-[0.08em] text-slate-900 uppercase">Academy</span>
          </div>
        </div>
        
        <nav className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                const closeBtn = document.querySelector('[data-radix-collection-item]') as HTMLButtonElement
                closeBtn?.click();
              }}
              className="text-lg font-semibold text-slate-600 hover:text-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-8 pt-8 border-t border-slate-100">
        <Button 
          className="w-full bg-brand hover:bg-brand-600 text-white shadow-md shadow-brand/20 transition-all font-semibold rounded-xl h-12 text-base"
          onClick={() => {
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Biz bilan bog'lanish
        </Button>
      </div>
    </div>
  )
}
