// EventCardFooter component
import Image from "next/image";
import { HTMLAttributes, JSX } from "react";

export default function EventCardFooter(
  props: HTMLAttributes<HTMLDivElement>
): JSX.Element {
  return (
    <div
      {...props}
      className={`absolute -bottom-6 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-full`}
    >
      <div className={`w-4/5 h-9 relative mx-auto`}>
        <Image
          height={64}
          width={318}
          src="/assets/events/card-footer.png"
          alt="Angel Logo"
          className="object-center object-cover"
          sizes="(max-width: 640px) 640px, 640px"
        />
      </div>
    </div>
  );
}
