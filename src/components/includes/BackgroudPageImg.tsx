"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const BackgroundPageImg = ({
  mobileSrc,
  desktopSrc,
  alt,
}: {
  mobileSrc: string;
  desktopSrc: string;
  alt: string;
}) => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); 
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Image
      src={isMobile ? mobileSrc : desktopSrc}
      alt={alt}
      fill={true}
      quality={100}
      priority={true}
      className="object-cover h-full w-full shadow-inner shadow-black"
    />
  );
};

export default BackgroundPageImg;
