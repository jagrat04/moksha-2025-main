import Image from "next/image";
import { HTMLAttributes } from "react";
import EventCardFooter from "./EventCardFooter";

export default function EventHomeCard(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`${props.className} border-[#874A11] border-2 rounded-xl relative aspect-[9/16] w-full max-w-60`}
    >
      <Image src="/assets/events/card-home.png" alt="Angel Logo" fill={true} />
      <div
        style={{
          position: "absolute",
          left: "0",
          right: "0",
          top: "28.51%",
          bottom: "0%",
          background:
            "linear-gradient(348.34deg, #A27104 7.24%, rgba(60, 42, 1, 0) 90.68%)",
          borderRadius: "12px",
        }}
      />
      <EventCardFooter className="" />
    </div>
  );
}
