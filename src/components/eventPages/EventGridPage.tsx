import { Cinzel } from "next/font/google";
import EventNavigationArrow from "../includes/EventNavigationArrow";
import EventCard from "../includes/EventCard";
import BackgroundPageImg from "../includes/BackgroudPageImg";
import { EventCardProps } from "../includes/EventCard";
const cinzel = Cinzel({
  subsets: ["latin"],
});

interface EventGridPageProps {
  day: number;
  data?: EventCardProps[];
}

const backgrouds = [
  {
    mobile: "/assets/events/day1-bg-mobile.png",
    desktop: "/assets/events/day1-bg-desktop.png",
  },
  {
    mobile: "/assets/events/day2-bg-mobile.png",
    desktop: "/assets/events/day2-bg-desktop.png",
  },
  {
    mobile: "/assets/events/day3-bg-mobile.png",
    desktop: "/assets/events/day3-bg-desktop.png",
  },
];

export default function EventGridPage({ day = 1 }: EventGridPageProps) {
  return (
    <div className="h-full w-screen relative" id={`event-day-${day}`}>
      <BackgroundPageImg
        mobileSrc={backgrouds[day - 1].mobile}
        desktopSrc={backgrouds[day - 1].desktop}
        alt={`Event Day ${day}`}
      />
      <div className="relative z-10 h-full w-full pt-16 md:pt-14 lg:pt-12 flex justify-center items-center flex-col">
        <div className="mx-auto w-10/12 max-w-10/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center flex-1 gap-12 sm:gap-10 md:gap-8 lg:gap-12 overflow-y-auto p-6 scrollbar-event-page">
          {Array.from({ length: 13 }).map((_, i) => (
            <EventCard key={i} event_id={`${day}-${i}`} />
          ))}
        </div>
        <EventNavigationArrow day={day} />
      </div>
    </div>
  );
}
