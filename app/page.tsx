import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import { Pricing } from "./_components/Pricing";
import Stats from "./_components/Stats";
import Testimonials from "./_components/Testimonials";

export default function Home() {
    console.log('home rendered');

    return (
        <>
            <Hero />
            <Stats />
            <Testimonials />
            <Pricing />
            <Footer />

        </>
    );
}
