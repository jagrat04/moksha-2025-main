import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Events from "@/components/Events";
import Landing from "@/components/Landing";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700"]
});

const HorizontalScroll = () => {

  return (
    <div className={`bg-bg-gradient h-screen overflow-x-scroll overflow-y-hidden text-white ${cinzel.className}`}>
      <div className="flex w-[400vw] h-full">
      <section className="h-full w-screen">
          {/* <Landing/> */}
        </section>

        <section className="h-full w-screen">
          <AboutUs/>
        </section>
        <section className="h-full w-screen">
          <Events/>
        </section>
        <section className="h-full w-screen">
          <ContactUs/>
        </section>
      </div>
    </div>
  );
};

export default HorizontalScroll;