import Image from "next/image";
import { HTMLAttributes } from "react";

export default function EventCardFooter(props: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={`${
                props.className || ""
            } absolute -bottom-4 left-0 mx-auto w-full`}
        >
            <div className="w-4/5 h-8 relative mx-auto"> {/* Changed width to 4/5 for 80% */}
                <Image
                    fill={true}
                    src="/assets/events/card-footer.png"
                    alt="Angel Logo"
                    className="object-center object-cover"
                />
            </div>
        </div>
    );
}
