import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="relative bg-background py-10 lg:py-18">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto  px-4 py-7 sm:px-6 lg:px-32 lg:py-14">


                <div className="grid gap-10 lg:gap-52 lg:grid-cols-2 items-center">
                    {/* Contact Info */}
                    <motion.div

                        className="space-y-6 "
                    >
                        <div className="text-start mb-14">
                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                Get In Touch
                            </h2>
                            <p className="mt-4 text-base text-muted-foreground sm:text-lg max-w-2xl mx-auto">
                                Have a project idea, want to collaborate, or just want to say hello? Feel free to reach out!
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:items-center justify-start">
                            <div className="flex items-center gap-4">
                                <Mail className="h-6 w-6 text-indigo-600" />
                                <div>
                                    <p className="text-base font-semibold ">Email</p>
                                    <p className="text-sm text-muted-foreground">Infoalihossain@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <Phone className="h-6 w-6 text-indigo-600" />
                                <div>
                                    <p className="text-base font-semibold ">Phone</p>
                                    <p className="text-sm text-muted-foreground">+880 160136-2101</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <MapPin className="h-6 w-6 text-indigo-600" />
                                <div>
                                    <p className="text-base font-semibold ">Location</p>
                                    <p className="text-sm text-muted-foreground">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form

                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="rounded-2xl max-w-xl  bg-card p-8 shadow-lg light:ring-1 light:ring-gray-100"
                    >
                        <div className="grid  ">
                            <div>
                                <label className="block text-sm font-medium ">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium ">Email</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium ">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Write your message..."
                                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200"
                                ></textarea>
                            </div>

                            <button

                                className="inline-flex items-center justify-center rounded-xl 
                                bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-indigo-700 mt-4"
                            >
                                Send Message
                            </button>
                        </div>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
}
