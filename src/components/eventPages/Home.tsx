import Image from "next/image";
import { Cinzel } from "next/font/google";
import { AngelDayText } from "../SVGs";
import NavMenu from "../includes/NavMenu";
import EventHomeCard from "../includes/EventHomeCard";
import Link from "next/link";
const cinzel = Cinzel({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="h-full w-screen relative">
      <Image
        src="/assets/events/home-bg.png"
        alt="Event"
        fill={true}
        security="restricted"
        quality={100}
        priority={true}
        className="object-cover h-full w-full"
      />
      <div className="relative z-10 h-full w-full pt-16 md:pt-14 lg:pt-12">
        <h1
          className={`${cinzel.className} text-[#FFDE7D] text-center text-5xl md:text-6xl lg:text-7xl`}
        >
          Events
        </h1>
        <div className="w-10/12 mx-auto mt-4 lg:mt-10 flex justify-center flex-wrap gap-2 md:gap-6 lg:gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <Link
              href={"#"}
              key={i}
              className={`flex flex-col items-center w-10/12 max-w-[200px]  md:max-w-[340px] focus:outline-none ${
                i === 1 ? " sm:max-lg:order-1" : "order-" + i
              }`}
            >
              <AngelDayText text={`Day ${i + 1}`} />
            </Link>
          ))}
        </div>
        <div className=" flex justify-center mt-10 relative">
          <EventHomeCard className="top-16 left-8 lg:left-6 transition-transform duration-300 ease-in-out hover:-translate-y-4" />
          <EventHomeCard className="z-10 transition-transform duration-300 ease-in-out hover:-translate-y-4" />
          <EventHomeCard className="top-16 right-8 lg:right-6 transition-transform duration-300 ease-in-out hover:-translate-y-4" />
        </div>
      </div>
      <NavMenu className="" />
    </div>
  );
}
