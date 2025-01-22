import Image from "next/image";
import { Cinzel } from "next/font/google";
import EventNavigationArrow from "../includes/EventNavigationArrow";
import EventCard from "../includes/EventCard";
const cinzel = Cinzel({
  subsets: ["latin"],
});

interface EventGridPageProps {
  day: number;
}

const backgrouds = [
  "/assets/events/day-1.png",
  "/assets/events/day-2.png",
  "/assets/events/day-3.png",
];

export default function EventGridPage({ day = 1 }: EventGridPageProps) {
  return (
    <div className="h-full w-screen relative" id={`event-day-${day}`}>
      <Image
        src={backgrouds[day - 1]}
        alt={`Event Day ${day}`}
        fill={true}
        security="restricted"
        quality={100}
        priority={true}
        className="object-cover h-full w-full"
      />
      <div className="relative z-10 h-full w-full pt-16 md:pt-14 lg:pt-12 flex justify-center items-center flex-col">
        <div className="mx-auto w-10/12 max-w-10/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center flex-1 gap-12 sm:gap-10 md:gap-8 lg:gap-12 overflow-y-auto p-6 scrollbar-event-page">
          {Array.from({ length: 13 }).map((_, i) => (
            <EventCard time="10:00 AM" venue="Main Stage" key={i} index={i} />
          ))}
        </div>
        <EventNavigationArrow day={day} />
      </div>
    </div>
  );
}
