import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/shared/Container"
import { Section } from "@/components/shared/Section"
import useEmblaCarousel from "embla-carousel-react"
import { textTestimonials, videoTestimonials } from "@/data/testimonials"

export const Reviews = () => {
  // Store the ID of the currently playing video to conditionally render the iframe instead of the thumbnail
  const [playingVideoId, setPlayingVideoId] = React.useState<string | null>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true
  })

  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true)

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = React.useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  return (
    <Section id="reviews" className="bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <Badge variant="outline" className="text-brand border-brand/20 bg-brand/5 mb-4 px-4 py-1.5 shadow-sm text-sm font-semibold">O'quvchilar fikri</Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Natijalar o'zi <span className="text-brand">gapiradi</span>
            </h2>
            <p className="text-slate-500 font-medium text-lg mt-4 max-w-xl">
              Shift Academy ni tanlagan va kelajagini o'zgartirgan insonlar.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
             <button
               onClick={scrollPrev}
               disabled={prevBtnDisabled}
               className="w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-brand hover:border-brand hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
             >
               <ChevronLeft className="w-5 h-5" />
             </button>
             <button
               onClick={scrollNext}
               disabled={nextBtnDisabled}
               className="w-12 h-12 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-brand hover:border-brand hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
             >
               <ChevronRight className="w-5 h-5" />
             </button>
          </div>
        </div>

        {/* Video Testimonials Carousel */}
        <div className="overflow-hidden p-1 -m-1 mb-16" ref={emblaRef}>
          <div className="flex -ml-6">
            {videoTestimonials.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="pl-6 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <div
                  className="relative w-full aspect-[4/5] sm:aspect-[8/11] rounded-[1.5rem] overflow-hidden shadow-xl shadow-slate-200/50 bg-slate-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border border-slate-200"
                  onClick={() => setPlayingVideoId(video.id)}
                >
                  <AnimatePresence mode="wait">
                    {playingVideoId === video.id ? (
                      <motion.div
                        key="iframe"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black rounded-[1.5rem] overflow-hidden"
                      >
                        {/* Loading spinner */}
                        <div className="absolute inset-0 flex items-center justify-center z-0">
                          <div className="w-8 h-8 rounded-full border-4 border-slate-600 border-t-white animate-spin" />
                        </div>

                        <div
                          className="absolute z-10 left-0 right-0 overflow-hidden"
                          style={{ top: "-56px", bottom: "-56px" }}
                        >
                          <iframe
                            src={`${video.videoUrl.replace(/\/$/, '')}/embed`}
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "100%",
                              height: "100%",
                              border: "none",
                              background: "black",
                            }}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen={true}
                            scrolling="no"
                          />
                        </div>

                        {/* Extra black masks for pure clean edges */}
                        <div className="absolute top-0 left-0 right-0 h-2 bg-black z-20 rounded-t-[1.5rem]" />
                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-black z-20 rounded-b-[1.5rem]" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="thumbnail"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.name}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent transition-opacity" />

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center scale-95 transition-all duration-300 relative z-10 border border-white/30 shadow-2xl">
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                          </div>
                        </div>

                        {/* Name Info Badge */}
                        <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
                            <h4 className="text-white font-extrabold text-lg leading-tight mb-1">{video.name}</h4>
                            <p className="text-white/80 font-medium text-sm">{video.role}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
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
