"use client";
import {
  HTMLAttributes,
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";
import { LeftWing, RightWing } from "../SVGs";
import { Suspense } from "react";

export default function LoadingPage({
  children,
}: HTMLAttributes<HTMLDivElement>) {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const timmerRef = useRef<NodeJS.Timeout | null>(null);

  const handelVideoLoad = useCallback(() => {
    if (timmerRef.current) {
      clearTimeout(timmerRef.current);
    }
    setIsVideoLoading(false);
    timmerRef.current = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleVideoError = useCallback(() => {
    if (timmerRef.current) {
      clearTimeout(timmerRef.current);
    }
    console.log("Error loading video");
    setIsLoading(false);
    setIsVideoLoading(false);
  }, []);

  return (
    <div className="h-svh w-screen bg-black overflow-hidden">
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black z-50 overflow-hidden">
          <Suspense fallback={<LoadingSkelton />}>
            <video
              className={`aspect-video object-cover object-center w-full max-sm:h-1/2 transition-transform delay-[2s] duration-500 ease-in-out ${
                isVideoLoading ? "scale-110" : "scale-[5.5] opacity-80"
              }`}
              autoPlay
              muted
              loop
              onLoadedData={handelVideoLoad}
              onCanPlay={handelVideoLoad}
              onLoadedMetadata={handelVideoLoad}
              onError={handleVideoError}
            >
              <source src="/assets/events/fire-wings.mp4" type="video/mp4" />
            </video>
          </Suspense>
        </div>
      ) : null}
      {!isVideoLoading && children}
    </div>
  );
}

function LoadingSkelton() {
  return (
    <>
      <LeftWing className="max-w-80 w-1/2 pl-4 pr-2 md:pr-16" />
      <RightWing className="max-w-80 w-1/2 pl-2 pr-4 md:pl-16" />
    </>
  );
}
