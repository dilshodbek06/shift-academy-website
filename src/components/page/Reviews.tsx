import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/shared/Container"
import { Section } from "@/components/shared/Section"
import { textTestimonials, videoTestimonials } from "@/data/testimonials"

export const Reviews = () => {
  // Store the ID of the currently playing video to conditionally render the iframe instead of the thumbnail
  const [playingVideoId, setPlayingVideoId] = React.useState<string | null>(null)

  return (
    <Section id="reviews" className="bg-white border-t border-slate-100">
      <Container>
        <div className="flex flex-col items-center mb-16 text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="text-brand border-brand/20 bg-brand/5 mb-4 px-4 py-1.5 shadow-sm text-sm font-semibold">O'quvchilar fikri</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
            Natijalar o'zi gapiradi
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Shift Academy ni tanlagan va kelajagini o'zgartirgan insonlar.
          </p>
        </div>

        {/* Video Testimonials (9:16 Aspect Ratio) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videoTestimonials.map((video) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center"
            >
              <div 
                className="relative w-full aspect-[4/5] sm:aspect-[8/12] rounded-[1rem] overflow-hidden shadow-lg bg-slate-100 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 cursor-pointer"
                onClick={() => setPlayingVideoId(video.id)}
              >
                <AnimatePresence mode="wait">
                  {playingVideoId === video.id ? (
                    <motion.div
                      key="iframe"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="w-full h-full bg-slate-900 rounded-[1rem] overflow-hidden"
                    >
                      <iframe
                        src={`${video.videoUrl.includes('?') ? video.videoUrl + '&' : video.videoUrl + '?'}autoplay=1`}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="thumbnail"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img src={video.thumbnail} alt={video.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent transition-opacity group-hover:opacity-90" />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 relative z-10 border border-white/30 shadow-lg">
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                      </div>
                      
                      {/* Name Badge */}
                      <div className="absolute bottom-5 left-5">
                        <div className="bg-white px-5 py-2.5 rounded-full shadow-lg border border-slate-100/50">
                          <span className="text-slate-900 font-extrabold text-sm sm:text-base">{video.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {textTestimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="glass-panel border-slate-200 bg-white h-full group hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 rounded-[1.5rem]">
                <CardContent className="p-8 pb-10 flex flex-col h-full relative">
                   <div className="absolute top-6 right-6 opacity-5 text-6xl text-brand font-serif leading-none italic">"</div>
                  <div className="flex items-center gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-sm" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-8 flex-grow font-medium leading-relaxed">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100 shadow-sm">
                       <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 leading-none mb-1">{testimonial.name}</h4>
                      <p className="text-sm text-brand font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
