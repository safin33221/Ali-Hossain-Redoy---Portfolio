import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Brand() {
    const ventures = [
        {
            name: "Greate Bro IT Academy",
            description:
                "An academy dedicated to empowering learners with practical IT and web development skills, helping students build real-world projects and careers in tech.",
            image:
                "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600&auto=format&fit=crop",
            link: "#",
        },
        {
            name: "BrandMedia",
            description:
                "A creative digital media and branding company focused on helping businesses stand out through innovative design, marketing, and storytelling.",
            image:
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop",
            link: "#",
        },
    ];

    return (
        <section id="companies" className="relative bg-background py-10 lg:py-18 ">
            <div className="mx-auto  px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        My Ventures
                    </h2>
                    <p className="mt-4 text-base text-muted-foreground sm:text-lg max-w-2xl mx-auto">
                        Alongside my personal journey, I’ve founded companies that empower students,
                        creators, and businesses to grow in the digital world.
                    </p>
                </div>

                <div className="grid gap-10 sm:grid-cols-2 ">
                    {ventures.map((venture, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="group max-w-2xl mx-auto  relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-100 bg-card"
                        >
                            <div className="h-56 w-full overflow-hidden">
                                <img
                                    src={venture.image}
                                    alt={venture.name}
                                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold ">{venture.name}</h3>
                                <p className="mt-3 text-sm text-muted-foreground leading-6">
                                    {venture.description}
                                </p>
                                <a
                                    href={venture.link}
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-indigo-800"
                                >
                                    Learn More <ExternalLink className="h-4 w-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
