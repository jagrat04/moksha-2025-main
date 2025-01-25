import Image from "next/image";
import { Cinzel } from "next/font/google";
import { AngelDayText } from "../SVGs";
import NavMenu from "../includes/NavMenu";
import EventHomeCard from "../includes/EventHomeCard";
import Link from "next/link";
import BackgroundPageImg from "../includes/BackgroudPageImg";
const cinzel = Cinzel({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="h-full w-screen relative" id="event-home">
      <BackgroundPageImg
        mobileSrc="/assets/events/home-bg-mobile.png"
        desktopSrc="/assets/events/home-bg-desktop.png"
        alt="Event Home Page Background"
      />
      <div className="relative z-[2] h-full w-full md:pt-14 lg:pt-12 max-sm:flex max-sm:flex-col justify-center items-center">
        <h1
          className={`${cinzel.className} text-[#FFDE7D] text-center text-6xl lg:text-7xl`}
        >
          Events
        </h1>
        <div className="max-sm:pb-12 max-sm:h-2/5 mx-auto mt-4 lg:mt-10 max-sm:mt-8 max-sm:flex max-sm:flex-col justify-center items-center grid grid-cols-3 gap-4 sm:gap-6 md:gap-4 lg:gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <Link
              href={"#event-day-" + (i + 1)}
              key={i}
              className={`w-full min-w-[250px]  max-w-[300px] md:max-w-[350px] mx-auto focus:outline-none flex justify-center items-center`}
            >
              <AngelDayText text={`Day ${i + 1}`} />
            </Link>
          ))}
        </div>
        <div className="hidden sm:flex justify-center mt-10 relative">
          <EventHomeCard className="top-16 left-8 lg:left-6 transition-transform duration-300 ease-in-out hover:-translate-y-4" />
          <EventHomeCard className="z-10 transition-transform duration-300 ease-in-out hover:-translate-y-4" />
          <EventHomeCard className="top-16 right-8 lg:right-6 transition-transform duration-300 ease-in-out hover:-translate-y-4" />
        </div>
      </div>
      <NavMenu className="max-sm:bottom-8" />
    </div>
  );
}
