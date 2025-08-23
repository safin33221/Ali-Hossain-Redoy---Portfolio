import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Profile from '../../../assets/images/Banner-Profile.png'

export default function Banner() {
  return (
    <section id="home" className="relative  overflow-hidden">
      {/* Decorative gradient blob */}
      {/* <div className="pointer-events-none absolute -top-32 -right-32 h-full w-40 rounded-full bg-indigo-300 blur-3xl opacity-40" /> */}

      <div className="mx-auto  px-4 py-7 sm:px-6 lg:px-32 lg:py-14">
        <div className="flex items-center  md:gap-30   flex-col-reverse md:flex-row justify-between ">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >


            <p className="mt-4 text-base text-muted-foreground sm:text-xl leading-7">
              Moving around a lot keeps the mind healthy and the elements of establishing oneself also combine to teach one to settle down.
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight  sm:text-5xl">
              Hi, I'm
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Ali Hossain</span>
            </h1>
            <h3 className="py-5 text-lg">Speaker <span className="text-muted-foreground">||</span> Entrepreneur  <span className="text-muted-foreground">||</span>  Journalist <span className="text-muted-foreground">||</span>  Traveler </h3>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center justify-center rounded-2xl border border-indigo-600 bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="inline-flex items-center justify-center rounded-2xl border border-gray-200 px-5 py-3 text-sm font-semibold text-muted-foreground shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#contact"
              >
                Contact Me
              </a>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-4">
              <a href="#" aria-label="GitHub" className="rounded-xl border border-gray-200 p-2 ">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="rounded-xl border border-gray-200 p-2 ">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:hello@example.com" aria-label="Email" className="rounded-xl border border-gray-200 p-2 ">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Image card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="group relative mx-auto w-full max-w-2xl overflow-hidden rounded-2xl shadow-lg ">
              <img
                src={Profile}
                alt="Ali Hossain working at a laptop"
                className=" h-[300px] md:h-[490px] mr-4 bg-cover w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent "  />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="rounded-xl bg-white/80 backdrop-blur  hidden md:block supports-[backdrop-filter]:bg-white/60 p-4 shadow">
                  <p className="text-sm font-medium text-gray-900">Ali Hossian Ridoy</p>
                  <p className="text-xs text-gray-600">
                    <span className="text-muted-foreground">•</span> Entrepreneur
                    <span className="text-muted-foreground">•</span>  Journalist
                    <span className="text-muted-foreground">•</span>  Traveler
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
