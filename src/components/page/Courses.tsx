import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  MonitorPlay,
  Trophy,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/Container";
import { Section } from "@/components/shared/Section";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { courses, courseCategories, type Course } from "@/data/courses";

export const Courses = () => {
  const [activeCategory, setActiveCategory] = React.useState("Barchasi");
  const [selectedCourse, setSelectedCourse] = React.useState<Course | null>(
    null,
  );

  const filteredCourses =
    activeCategory === "Barchasi"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <Section
      id="courses"
      className="bg-slate-50 relative z-10 border-t border-slate-100"
    >
      <Container>
        <div className="flex flex-col items-center mb-10 text-center max-w-3xl mx-auto">
          <Badge
            variant="outline"
            className="text-brand border-brand/20 bg-brand/5 mb-4 px-4 py-1.5 shadow-sm text-sm font-semibold"
          >
            Yo'nalishlar
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
            Kasbingizni o'zingiz tanlang
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Mehnat bozorida eng ko'p talab qilinadigan zamonaviy IT kasbini
            egallang.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {courseCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-sm border ${
                activeCategory === cat
                  ? "bg-brand text-white border-brand shadow-brand/20"
                  : "bg-white text-slate-600 hover:text-brand hover:border-brand/30 border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 relative min-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={course.id}
              >
                <Card className="glass-panel overflow-hidden border-slate-200 bg-white h-full flex flex-col hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-brand/5 group rounded-[1.5rem]">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center text-brand shadow-inner">
                        <MonitorPlay size={28} />
                      </div>
                      <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-none font-semibold px-3 py-1 shadow-sm">
                        {course.level}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-extrabold text-slate-900 mb-3 group-hover:text-brand transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-slate-600 mb-8 flex-grow font-medium leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-slate-500 font-semibold bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-slate-300" />
                      <div className="flex items-center gap-2">
                        <MonitorPlay className="w-4 h-4 text-brand" />
                        <span>{course.format.join(" / ")}</span>
                      </div>
                    </div>

                    <Button
                      onClick={() => setSelectedCourse(course)}
                      variant="outline"
                      className="w-full justify-between hover:bg-brand hover:text-white border-slate-200 bg-white group-hover:border-brand/40 transition-all font-semibold h-14 rounded-xl text-base shadow-sm"
                    >
                      Batafsil ma'lumot
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Course Detail Dialog */}
        <Dialog
          open={!!selectedCourse}
          onOpenChange={(open: boolean) => !open && setSelectedCourse(null)}
        >
          <DialogContent className="w-[95vw] sm:w-full sm:max-w-[660px] bg-white border-slate-200 text-slate-900 rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 shadow-2xl">
            <DialogHeader>
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <Badge className="bg-brand/10 text-brand outline-none border-none font-semibold shadow-sm px-3 py-1 pointer-events-none">
                  {selectedCourse?.category}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-slate-200 text-slate-500 font-semibold hidden sm:inline-flex px-3 py-1 shadow-sm"
                >
                  Davomiyligi: {selectedCourse?.duration}
                </Badge>
              </div>
              <DialogTitle className="text-xl sm:text-3xl font-extrabold mb-2 sm:mb-4">
                {selectedCourse?.title}
              </DialogTitle>
              <DialogDescription className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed text-justify">
                {selectedCourse?.description}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-5 bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-4 sm:mb-5 flex items-center gap-2.5 text-base sm:text-lg">
                <Trophy className="w-5 h-5 text-brand flex-shrink-0" />
                Kurs davomida nimalarni o'rganasiz?
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {selectedCourse?.outcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand shrink-0 mt-0.5 drop-shadow-sm" />
                    <span className="text-slate-700 font-medium text-sm sm:text-base">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3">
              <Button
                onClick={() => {
                  setSelectedCourse(null);
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full bg-brand hover:bg-brand-600 text-white font-semibold h-12 sm:h-14 text-sm sm:text-base rounded-xl shadow-lg shadow-brand/25"
              >
                Kursga yozilish
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </Container>
    </Section>
  );
};
