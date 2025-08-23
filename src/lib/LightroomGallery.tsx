
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

/**
 * Installation:
 *   npm i react-photo-view
 * or
 *   bun add react-photo-view
 *
 * Usage:
 *   <LightroomGallery
 *     title="Seminar Highlights"
 *     images={[
 *       { src: "/images/sem1.jpg", alt: "Keynote" },
 *       { src: "/images/sem2.jpg", alt: "Workshop" },
 *       { src: "/images/sem3.jpg", alt: "Audience" },
 *     ]}
 *   />
 */

type ImageItem = { src: string; alt?: string };

export default function LightroomGallery({
    title = "Seminar Highlights",
    images = [],
}: {
    title?: string;
    images: ImageItem[];
}) {
    return (
        <section id="gallery" className="relative ">
            <div className="mx-auto  px-4 py-7 sm:px-6 lg:px-32 lg:py-14">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight  sm:text-4xl">
                        {title}
                    </h2>
                    <p className="mt-3 text-base text-muted-foreground">
                        Click any photo to view in lightbox, then use keyboard arrows / swipe to navigate.
                    </p>
                </div>

                <PhotoProvider maskOpacity={0.85}  bannerVisible={false}>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {images.map((img, idx) => (
                            <motion.div
                                key={idx}
                                className="group relative overflow-hidden rounded-xl shadow-sm "
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.4, delay: idx * 0.03 }}
                            >
                                <PhotoView src={img.src}>
                                    <img
                                        src={img.src}
                                        alt={img.alt || `Photo ${idx + 1}`}
                                        className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48"
                                        loading="lazy"
                                    />
                                </PhotoView>
                            </motion.div>
                        ))}
                    </div>
                </PhotoProvider>
            </div>
        </section>
    );
}
