import LightroomGallery from "@/lib/LightroomGallery";
import { motion } from "framer-motion";

import img1 from "../../../assets/images/Gallery/1.jpg";
import img2 from "../../../assets/images/Gallery/2.jpg";
import img3 from "../../../assets/images/Gallery/3.jpg";
import img6 from "../../../assets/images/Gallery/6.jpg";
import img7 from "../../../assets/images/Gallery/7.jpg";
import img8 from "../../../assets/images/Gallery/8.jpg";
import img9 from "../../../assets/images/Gallery/9.jpg";
import img10 from "../../../assets/images/Gallery/10.jpg";
import img11 from "../../../assets/images/Gallery/11.jpg";
import img12 from "../../../assets/images/Gallery/12.jpg";
import img13 from "../../../assets/images/Gallery/13.jpg";
import img14 from "../../../assets/images/Gallery/14.jpg";
import img17 from "../../../assets/images/Gallery/17.jpg";
import img18 from "../../../assets/images/Gallery/18.jpg";
import img19 from "../../../assets/images/Gallery/19.jpg";
import img21 from "../../../assets/images/Gallery/21.jpg";
import img22 from "../../../assets/images/Gallery/22.jpg";
import img23 from "../../../assets/images/Gallery/23.jpg";
import img24 from "../../../assets/images/Gallery/24.jpg";
import img25 from "../../../assets/images/Gallery/25.jpg";
import img26 from "../../../assets/images/Gallery/26.jpg";
import img28 from "../../../assets/images/Gallery/28.jpg";
import img29 from "../../../assets/images/Gallery/29.jpg";
import img31 from "../../../assets/images/Gallery/31.jpg";
import img32 from "../../../assets/images/Gallery/32.jpg";


const images = [
    img1, img2, img3, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img17, img18, img19,
    img21, img22, img23, img24, img25, img26, img28, img29, img31, img32
];

export default function CapturedInsights() {
    return (
        <div>
            <motion.div

                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <LightroomGallery
                    title="Seminar Highlights"
                    images={images.map((img, index) => ({ src: img, alt: `Seminar photo ${index + 1}` }))}
                />
            </motion.div>
        </div>
    );
}
