import { motion } from "framer-motion"
import { ExternalLink, Sparkles } from "lucide-react"
import { Container } from "@/components/shared/Container"
import { Section } from "@/components/shared/Section"
import { studentProjects } from "@/data/projects"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"


export const Projects = () => {
  return (
    <Section id="projects" className="bg-white py-24 relative overflow-hidden border-t border-slate-100">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <Container className="relative z-10">
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          {/* Header Section with Carousel Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 shadow-sm text-slate-700 text-sm font-bold mb-6"
              >
                <Sparkles className="w-4 h-4 text-brand" />
                O'quvchilar ishlari
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl lg:text-5xl font-black tracking-tight mb-4 text-slate-900 leading-[1.1]"
              >
                Real loyihalar, <span className="text-brand">real natijalar</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 text-lg font-medium leading-relaxed"
              >
                O'quvchilarimiz tomonidan dars davomida tayyorlangan eng sara portfoliolar bilan tanishing.
              </motion.p>
            </div>
            
            {/* Custom Positioned Carousel Controls */}
            <div className="flex items-center gap-3 shrink-0">
               <CarouselPrevious className="position-static transform-none static translate-y-0 h-14 w-14 border-2 border-slate-200 hover:border-brand hover:bg-brand hover:text-white transition-all duration-300" />
               <CarouselNext className="position-static transform-none static translate-y-0 h-14 w-14 border-2 border-slate-200 hover:border-brand hover:bg-brand hover:text-white transition-all duration-300" />
            </div>
          </div>

          {/* Projects Carousel Content */}
          <CarouselContent className="-ml-4 md:-ml-8">
            {studentProjects.map((project, index) => (
              <CarouselItem key={project.id} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 overflow-hidden h-full"
                >
                  {/* Project Image Card */}
                  <div className="relative aspect-video overflow-hidden bg-slate-50 m-2 rounded-xl">
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                  </div>

                  {/* Project Details */}
                  <div className="p-4 pt-3 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-1 group-hover:text-brand transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
                           <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${project.student}&backgroundColor=e2e8f0`} alt={project.student} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-xs font-bold text-slate-500">{project.student}</p>
                      </div>

                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 bg-slate-50 text-slate-500 rounded-full hover:bg-brand hover:text-white transition-all duration-300 shrink-0 border border-slate-200 hover:border-brand"
                        aria-label="Loyihani ko'rish"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                  
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </Container>
    </Section>
  )
}
