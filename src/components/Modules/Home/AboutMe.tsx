
import { motion } from "framer-motion";

export default function AboutMe() {
    return (
        <section id="about" className="relative bg-gray-50 py-20 lg:py-28">
            <div className="mx-auto   sm:px-6 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="mx-auto w-full max-w-md overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-100">
                            <img
                                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1600&auto=format&fit=crop"
                                alt="Ali Hossain portrait"
                                className="h-[420px] w-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            About Me
                        </h2>

                        <p className="mt-6 text-base text-gray-700 sm:text-lg leading-7">
                            I’m <span className="font-semibold text-indigo-600">Ali Hossain</span>,
                            a passionate web developer, entrepreneur, and mentor. Currently, I am the Founder & CEO of
                            <span className="font-semibold text-indigo-600"> Greate Bro IT Academy</span> and
                            <span className="font-semibold text-indigo-600"> BrandMedia</span>,
                            where I combine technology, creativity, and leadership to help students and businesses thrive in the digital world.
                        </p>

                        <p className="mt-4 text-base text-gray-700 sm:text-lg leading-7">
                            My journey started with coding and design, and over the years, I’ve grown into a role where I not only build digital solutions
                            but also empower others to achieve their goals through education and innovative branding strategies.
                        </p>

                        <p className="mt-4 text-base text-gray-700 sm:text-lg leading-7">
                            Outside of work, I enjoy sharing knowledge, mentoring upcoming developers, and contributing to the tech community.
                        </p>

                        <div className="mt-6">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-indigo-700"
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

