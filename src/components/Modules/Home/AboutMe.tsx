
import { motion } from "framer-motion";
import Image from '../../../assets/images/AboutmeImage.jpg';
export default function AboutMe() {
    return (
        <section id="about" className="relative  py-10 lg:py-18">
            <div className="mx-auto  px-4 py-7 sm:px-6 lg:px-32 lg:py-14 ">
                <div className="grid items-center justify-between gap-20 md:gap-52 lg:grid-cols-2">
                    {/* Left: Image */}
                    <motion.div

                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="mx-auto w-full max-w-xl overflow-hidden rounded-2xl shadow-lg light:ring-1 ring-gray-100">
                            <img
                                src={Image}
                                alt="Ali Hossain portrait"
                                className="h-[420px] w-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl font-extrabold text-center md:text-left tracking-tight  sm:text-4xl">
                            About Me
                        </h2>

                        <p className="mt-6 text-base text-muted-foreground sm:text-lg leading-7">
                            I’m <span className="font-semibold text-indigo-600">Ali Hossain</span>,
                            a passionate web developer, entrepreneur, and mentor. Currently, I am the Founder & CEO of
                            <span className="font-semibold text-indigo-600"> GreatBro It</span> ,
                            <span className="font-semibold text-indigo-600"> GreatBro Academy</span> and
                            <span className="font-semibold text-indigo-600"> BrandMedia360</span>,
                            where I combine technology, creativity, and leadership to help students and businesses thrive in the digital world.
                        </p>

                        <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-7">
                            My journey started with coding and design, and over the years, I’ve grown into a role where I not only build digital solutions
                            but also empower others to achieve their goals through education and innovative branding strategies.
                        </p>

                        <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-7">
                            Outside of work, I enjoy sharing knowledge, mentoring upcoming developers, and contributing to the tech community.
                        </p>

                        <div className="mt-6">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-indigo-700"
                            >
                                Let’s Connect
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

