import { Cinzel } from "next/font/google";
import Image from "next/image";
import NavMenu from "../includes/NavMenu";
import { MokshaLogo } from "../SVGs";
import Link from "next/link";
import ContactFooter from "../includes/ContactFooter";
const cinzel = Cinzel({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="h-full w-screen relative" id="event-last">
      <Image
        src="/assets/events/last-bg.png"
        alt="Event"
        fill={true}
        security="restricted"
        quality={100}
        priority={true}
        className="object-cover h-full w-full"
      />
      <div className="relative z-10 h-full w-full pt-16 md:pt-14 lg:pt-12">
        <div className="max-sm:mx-auto sm:ms-auto w-72 lg:w-96 h-16 lg:h-24">
          <Link href="/" className="">
            <MokshaLogo className="fill-white hover:fill-[#c9721a] transition-colors duration-300 ease-in-out" />
          </Link>
        </div>
      </div>
      <NavMenu className="max-sm:bottom-28" />
      <ContactFooter className="max-sm:w-full" />
    </div>
  );
}
