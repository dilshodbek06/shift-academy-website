import * as React from "react"
import { motion } from "framer-motion"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { MapPin, Phone, Clock, CheckCircle2 } from "lucide-react"

import { Container } from "@/components/shared/Container"
import { Section } from "@/components/shared/Section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqs } from "@/data/faqs"

const formSchema = z.object({
  fullName: z.string().min(3, "Ism sharifni to'liq kiriting"),
  phone: z.string().regex(/^\+998 \d{2} \d{3} \d{2} \d{2}$/, "Telefon raqamni to'g'ri kiriting (Masalan: +998 90 123 45 67)"),
  direction: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

// Utility function to format phone number
const formatPhoneNumber = (value: string) => {
  // Remove all non-digit characters except the + sign
  const numericValue = value.replace(/[^\d+]/g, '');
  
  // Ensure it starts with +998
  let formattedValue = numericValue;
  if (!formattedValue.startsWith('+998')) {
      if (formattedValue.startsWith('998')) {
          formattedValue = '+' + formattedValue;
      } else if (formattedValue.startsWith('+')) {
          formattedValue = '+998' + formattedValue.substring(1);
      } else {
          formattedValue = '+998' + formattedValue;
      }
  }

  // Remove the +998 prefix for formatting the rest
  const rest = formattedValue.substring(4);
  
  // Apply formatting (XX XXX XX XX)
  let result = '+998';
  if (rest.length > 0) result += ' ' + rest.substring(0, 2);
  if (rest.length > 2) result += ' ' + rest.substring(2, 5);
  if (rest.length > 5) result += ' ' + rest.substring(5, 7);
  if (rest.length > 7) result += ' ' + rest.substring(7, 9);

  return result.slice(0, 17); // Max length +998 XX XXX XX XX
};

export const Contact = () => {
  const [isSuccess, setIsSuccess] = React.useState(false)
  const { register, handleSubmit, control, formState: { errors, isSubmitting }, reset,  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: ""
    }
  })

  const onSubmit = async (data: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1500))
    console.log("Form Submitted:", data)
    setIsSuccess(true)
    reset()
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <Section id="contact" className="bg-slate-50 relative overflow-hidden text-slate-900 border-t border-slate-100">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand/10 blur-[100px] opacity-60" />
      </div>

      <Container className="relative z-10">
        
        <div className="flex flex-col items-center mb-16 text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="text-brand border-brand/20 bg-brand/5 mb-4 px-4 py-1.5 shadow-sm text-sm font-semibold">Aloqa</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-slate-900 leading-[1.2]">
            Biz bilan bog'laning
          </h2>
          <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            Savollaringiz bormi? Konsultatsiyaga yoziling yoki bizning aloqa markazimizga murojaat qiling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* Left: Interactive Map */}
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex flex-col h-full"
          >
            <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex-1 flex flex-col">
               <h3 className="text-2xl font-bold mb-6 text-slate-900">Bizning manzil</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-0.5">Manzil:</h4>
                      <p className="text-slate-600 text-sm font-medium leading-tight">Buxoro shahri, <br/>Muhammad Iqbol ko'chasi, 88-uy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-0.5">Telefon:</h4>
                      <a href="tel:+998200254545" className="text-brand hover:text-brand-600 text-sm font-medium transition-colors block mb-1">+998 20 025-45-45</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:col-span-2">
                    <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm mb-0.5">Ish vaqti:</h4>
                      <p className="text-slate-600 text-sm font-medium flex items-center gap-2">
                        Dushanba - Shanba, 09:00 - 18:00
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-green-50 text-green-700 text-xs font-bold border border-green-200">
                           <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                           Ochiq
                        </span>
                      </p>
                    </div>
                  </div>
               </div>
               
               {/* Yandex Widget Map - Focused on Bukhara Kitoblar olami area placeholder focus */}
               <div className="w-full flex-1 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 min-h-[300px] relative">
               <iframe
              src="https://yandex.uz/map-widget/v1/?ll=64.430072%2C39.763462&z=16&oid=148257283914&ol=biz"
              width="100%"
              height="100%"
              title="Shift Academy — Buxoro"
              className="absolute inset-0 border-0"
              allowFullScreen
              />
               </div>
            </div>
          </motion.div>

          {/* Right: Lead Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <Card className="glass-panel border-slate-200 bg-white shadow-xl shadow-slate-200/50 rounded-[2rem] overflow-hidden flex-1 relative">
               <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand to-brand-600" />
              <CardContent className="p-8 md:p-10 h-full flex flex-col justify-center">
                
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">Bepul konsultatsiya</h3>
                  <p className="text-slate-600 font-medium">
                    Ma'lumotlaringizni qoldiring, mutaxassisimiz tez orada aloqaga chiqadi.
                  </p>
                </div>

                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-brand/5 border border-brand/20 p-8 rounded-2xl flex flex-col items-center justify-center text-center text-brand h-full"
                  >
                    <CheckCircle2 className="w-16 h-16 mb-4 animate-bounce" />
                    <h4 className="text-xl font-bold mb-2">Arizangiz qabul qilindi!</h4>
                    <p className="font-medium text-slate-700">Rahmat. Menejerlarimiz tez orada bog'lanishadi.</p>
                    <Button 
                      onClick={() => setIsSuccess(false)}
                      variant="outline"
                      className="mt-6 border-brand text-brand hover:bg-brand hover:text-white rounded-xl shadow-sm"
                    >
                       Yangi ariza yaratish
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 flex-1">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Ism sharifingiz</label>
                      <Input 
                        {...register("fullName")}
                        placeholder="Masalan: Alisher Navoiy"
                        className="h-14 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl focus-visible:ring-brand focus-visible:border-brand shadow-sm"
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.fullName.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Telefon raqamingiz</label>
                      <Controller
                        name="phone"
                        control={control}
                        render={({ field: { onChange, onBlur, value, ref } }) => (
                          <Input 
                            ref={ref}
                            value={value}
                            onBlur={onBlur}
                            onChange={(e) => {
                              const formatted = formatPhoneNumber(e.target.value);
                              onChange(formatted);
                            }}
                            onFocus={(e) => {
                              if (!e.target.value) {
                                onChange('+998 ');
                              }
                            }}
                            placeholder="+998 90 123 45 67"
                            maxLength={17}
                            className="h-14 bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 rounded-xl focus-visible:ring-brand focus-visible:border-brand shadow-sm"
                          />
                        )}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1.5 font-medium">{errors.phone.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Qaysi yo'nalish qiziqtiryapti? (Ixtiyoriy)</label>
                      <select 
                        {...register("direction")}
                        className="w-full h-14 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl px-4 focus:ring-2 focus:ring-brand focus:border-brand shadow-sm font-medium outline-none transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Tanlang...</option>
                        <option value="frontend">Frontend Dasturlash</option>
                        <option value="backend">Backend dasturlash</option>
                        <option value="smm">SMM</option>
                        <option value="kompyuter">Kompyuter savodxonligi</option>
                      </select>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 bg-brand hover:bg-brand-600 text-white font-bold rounded-xl shadow-lg shadow-brand/25 transition-all text-base mt-4"
                    >
                      {isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
                    </Button>
                    
                    {/* <p className="text-xs text-slate-500 text-center font-medium mt-4">Barcha ma'lumotlar maxfiyligi kafolatlangan.</p> */}
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mt-12 bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/40">
           <div className="flex items-center gap-3 mb-8">
             <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand shrink-0">
               <Clock className="w-6 h-6" />
             </div>
             <h3 className="text-2xl font-extrabold text-slate-900">Ko'p beriladigan savollar</h3>
           </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100 last:border-0">
                <AccordionTrigger className="text-left text-slate-800 hover:text-brand py-5 text-lg font-bold transition-colors data-[state=open]:text-brand">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 text-base font-medium leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </Container>
    </Section>
  )
}
