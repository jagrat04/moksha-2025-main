"use client";
import { HTMLAttributes, JSX } from "react";
import EventCardFooter from "./EventCardFooter";
import Image from "next/image";
import { Cinzel } from "next/font/google";
import { useState, useEffect, useRef } from "react";
const cinzel = Cinzel({
  subsets: ["latin"],
});

export interface EventCardProps extends HTMLAttributes<HTMLDivElement> {
  key: number;
  event_id: string;
  event_name?: string;
  event_time?: string;
  event_venue?: string;
  event_image?: string;
  event_artists?: string;
}

export default function EventCard({
  key,
  event_id,
  event_name,
  event_time = "10:00 AM",
  event_venue = "Main Stage",
  event_image = "/assets/events/dummy-card.jpg",
  event_artists,
  ...props
}: EventCardProps): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once loaded
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      {...props}
      ref={cardRef}
      className="relative w-10/12 mx-auto  aspect-[6/4]  group flex justify-center items-center"
      aria-label={event_name}
    >
      <div
        {...props}
        className={`${props.className} border-[#874A11] border-2 rounded-xl absolute top-0 left-0 w-full h-full transform transition-all duration-300`}
      >
        <div className="w-full h-full rounded-xl overflow-hidden relative">
          {isVisible && (
            <Image
              src={event_image}
              unoptimized
              alt={event_name || "Event Image"}
              fill={true}
              sizes="(max-width: 640px) 100%, 640px"
              priority={false}
              className={`rounded-xl object-cover bg-[#874A11] animate-pulse`}
              onLoad={(src) => {
                src.currentTarget.classList.remove("animate-pulse");
              }}
            />
          )}
          {/* <div className="absolute inset-0 bg-gray-200 animate-pulse"></div> */}
        </div>
        <div className="absolute bottom-0 left-0.5 right-0.5 h-1.5 bg-gradient-to-t from-[#A27104] to-[#3C2A01]/0 rounded-xl"></div>
        <EventCardFooter className="absolute z-20" />
      </div>

      <div
        className={`absolute top-0 w-full aspect-video border-[#874A11] border-2 rounded-xl transform transition-all duration-300 group-hover:z-10 opacity-0 group-hover:opacity-100 group-hover:aspect-square group-hover:h-auto group-hover:w-full sm:group-hover:w-[40vw] lg:group-hover:w-[24vw] shadow-xl shadow-black/80
        ${
          key % 3 === 2
            ? "md:right-0"
            : key % 3 === 0
            ? "md:left-0"
            : "left-1/2 -translate-x-1/2"
        }
          ${key % 2 === 1 ? "sm:max-w-md:right-0" : "sm:max-w-md:left-0"}
        `}
        style={{ backgroundColor: "transparent" }}
      >
        <div className="absolute z-20 top-4 left-4">
          <button
            className={`px-2 uppercase bg-[#ffde85] font-semibold text-[#8e4d18] rounded-md ${cinzel.className}`}
          >
            Register
          </button>
        </div>
        {isVisible && (
          <Image
            src="/assets/events/dummy-card.jpg"
            alt="Angel Logo"
            fill={true}
            sizes="(max-width: 640px) 100%, 640px"
            priority={false}
            className="rounded-xl object-cover bg-[#874A11] animate-pulse"
            onLoad={(src) => {
              src.currentTarget.classList.remove("animate-pulse");
            }}
          />
        )}
        <div className="absolute z-5 bottom-0 left-0.5 right-0.5 h-1.5 bg-gradient-to-t from-[#A27104] to-[#3C2A01]/0 rounded-xl"></div>
        <EventCardFooter className="absolute z-20" />

        <div
          className={`absolute z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 left-4 text-sm  bottom-4 text-white ${cinzel.className}`}
        >
          <div className="p-2 max-w-xs">
            {event_name && <p className=" font-semibold">{event_name}</p>}
            {event_time && <p className=" font-semibold">Time: {event_time}</p>}
            {event_venue && (
              <p className=" font-semibold">Venue: {event_venue}</p>
            )}
            {event_artists && (
              <p className=" font-semibold">Artists: {event_artists}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
