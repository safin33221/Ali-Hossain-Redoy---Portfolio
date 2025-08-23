import AboutMe from "@/components/Modules/Home/AboutMe";
import Banner from "@/components/Modules/Home/Banner";
import Brand from "@/components/Modules/Home/Brand";
import CapturedInsights from "@/components/Modules/Home/CapturedInsights";
import Contact from "@/components/Modules/Home/Contact";


export default function Home() {
    return (
        <div>
            <Banner />
            <AboutMe />
            <Brand />
            <CapturedInsights />
            <Contact />
        </div>
    );
};
