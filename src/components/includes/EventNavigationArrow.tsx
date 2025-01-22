import Image from "next/image";
import { Cinzel } from "next/font/google";
import Link from "next/link";

const cinzel = Cinzel({
  subsets: ["latin"],
});
interface EventNavigationArrow {
  day: number;
}

export default function EventNavigationArrow({ day }: EventNavigationArrow) {
  return (
    <div className="mx-auto w-11/12 my-10 md:my-12 flex relative justify-between items-center">
      <Link href={day === 1 ? "#event-home" : `#event-day-${day - 1}`}>
        <Image
          src={"/assets/events/arrow-left.png"}
          height={124}
          width={124}
          alt="left arrow"
          className="relative left-8 md:left-10 size-20 md:size-24"
        />
      </Link>
      <div className="w-full bg-[#868686]/30 border-b-2 border-t-2  rounded-3xl border-y-[#D77519] border-x-transparent ">
        <h2
          className={`${cinzel.className} text-[#FCD771] text-center text-2xl md:text-4xl font-bold`}
        >
          Day {day}
        </h2>
      </div>
      <Link href={day === 3 ? "#event-last" : `#event-day-${day + 1}`}>
        <Image
          src={"/assets/events/arrow-right.png"}
          height={124}
          width={124}
          alt="left arrow"
          className="relative right-8 md:right-10 size-20 md:size-24"
        />
      </Link>
    </div>
  );
}
