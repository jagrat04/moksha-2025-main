'use client';

import { useEffect, useRef, useState } from 'react';
import { number } from 'zod';

export default function Timeline() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null); // Ref for the scroll container
  const [boxes, setBoxes] = useState<
    {
      id: number;
      scale: number;
      opacity: number;
      content: { text?: string; imgUrl?: string };
      xPosition: string;
    }[]
  >([]);
  const [linesScale, setLinesScale] = useState<number[]>([]);
  const [linesOpacity, setLinesOpacity] = useState<number[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [year, setYear] = useState<number>();

  const numberOfBoxes = 6;
  const totalScrollHeight = 3000;

  const imageDictionary: Record<number, string> = {
    1: '/assets/timeline/elements/image1.png',
    2: '/assets/timeline/elements/image2.png',
    3: '/assets/timeline/elements/image3.png',
    4: '/assets/timeline/elements/king.jpeg',
    5: '/assets/timeline//elements/sunidhi.webp',
    6: '',
  };

  const xPositionDictionary: Record<number, string> = {
    1: '-130%',
    2: '130%',
    3: '0%',
    4: '-130%',
    5: '130%',
    6: '-130%',
  };

  useEffect(() => {
    const initialBoxes = Array.from({ length: numberOfBoxes }, (_, i) => ({
      id: i + 1,
      scale: 1,
      opacity: 1,
      xPosition: xPositionDictionary[i + 1] || '0%',
      content: {
        text: `Box ${i + 1}`,
        imgUrl: imageDictionary[i + 1],
      },
    }));
    setBoxes(initialBoxes);

    setLinesScale(Array(numberOfBoxes).fill(1));
    setLinesOpacity(Array(numberOfBoxes).fill(1));
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const handleScroll = () => {
      const scrollY = container.scrollTop;
      const viewportHeight = container.clientHeight;
      const viewportWidth = container.clientWidth;
      const totalScrollableHeight = container.scrollHeight - viewportHeight;

      const progress = Math.min(100, (scrollY / totalScrollableHeight) * 100);
      setScrollProgress(progress);

      const windowBottom = viewportHeight;
      let mostVisibleBoxId = 1;
      let maxScale = 0;

      setBoxes((prev) =>
        prev.map((box) => {
          const element = document.getElementById(`box-${box.id}`);
          if (!element) return box;
  
          const rect = element.getBoundingClientRect();
          const distanceFromBottom = Math.abs(
            rect.top + rect.height / 2 - viewportHeight
          );
  
          let opacity = 0;
          if (distanceFromBottom > 200) {
            opacity = Math.max(0, 1 - Math.pow(distanceFromBottom / viewportHeight, 3));
          } else {
            opacity = 0;
          }
  
          const scale = Math.max(0.5, 2 - distanceFromBottom / viewportHeight);
  
          if (scale > maxScale) {
            maxScale = scale;
            mostVisibleBoxId = box.id;
          }
          setYear(2019 + mostVisibleBoxId);
  
          return { ...box, scale, opacity };
        })
      );

      setLinesScale((prev) =>
        prev.map((_, index) => {
          const element = document.getElementById(`line-${index + 1}`);
          if (!element) return 1;

          const rect = element.getBoundingClientRect();
          const distanceFromBottom = Math.abs(
            rect.top + rect.height / 2 - windowBottom
          );
          if (viewportWidth<1000) return Math.max(0.65, 2 - ((distanceFromBottom / viewportHeight)*2)) ;
          else return Math.max(0.65, 2 - ((distanceFromBottom / viewportHeight)*(viewportWidth/viewportHeight) *1.2));
            
          
        })
      );

      setLinesOpacity((prev) =>
        prev.map((_, index) => {
          const element = document.getElementById(`line-${index + 1}`);
          if (!element) return 1;

          const rect = element.getBoundingClientRect();
          const distanceFromBottom = Math.abs(
            rect.top + rect.height / 2 - windowBottom
          );

          if (distanceFromBottom > 70) {
            return Math.max(
              0,
              1 - Math.pow(distanceFromBottom / viewportHeight, 3)
            );
          } else {
            return 0;
          }
        })
      );
      
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [boxes]);

  return (
    <div>
      <div id ="gradient"
        className="h-[133.33vw] w-[100vw] sm:h-[100vh] sm:w-[100vw] fixed -top-0 bg-gradient-to-t from-black to-slate-900"
      />

      <div id="stage"
        className="h-[133.33vw] w-[120vw] -right-[10vw] sm:right-0 sm:h-[100vh] sm:w-[100vw] bg-cover bg-center fixed top-0 bg-[url(/assets/timeline/stagesm.png)] sm:fixed sm:bg-[url(/assets/timeline/Rectangle209.png)]"
      />
      <div
  id="curveL"
  className="h-[125vw] w-[16vw] sm:h-[92vh] sm:w-[15vw] bg-cover left-[26vw] fixed top-0 rotate-[3deg] bg-[url(/assets/timeline/curvesm.png)] sm:bg-[url(/assets/timeline/curveL.png)]"
></div>

      <div id ="curveR"
        className="h-[125vw] w-[16vw] sm:h-[92vh] sm:w-[15vw] bg-cover left-[60vw] fixed top-0 bg-[url(/assets/timeline/curvesm.png)] sm:bg-[url(/assets/timeline/curveL.png)] -scale-x-100 -rotate-[3deg]"
      />

      <div id ="neeche wala"
      className="fixed sm:top-[92.5vh] top-[124.5vw] h-[4vh] bg-transparent w-4/5 left-[10vw]">

        <div id = "divisions"
        className="flex h-full">

          {Array.from({ length: 7 }, (_, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-96 text-white font-bold text-[2vh] border-r border-gray-600"
            >
              {2017 + i}
            </div>
          ))}
        </div>
      </div>
      <div id = "slider"
        style={{
          left: `${(scrollProgress * .8) + 10}vw`,
        }}
        className=' sm:w-[7vw] sm:h-[3.25vw] w-[19vw] h-[9.25vw] bg-[url(/assets/timeline/sliderFrame.png)] bg-cover sm:top-[92.5vh] top-[124vw] fixed text-center text-white align'>
          <p className='relative text-[2vh] sm:top-[0.65vw] top-[1.65vw]'>
            {/* {scrollProgress} */}
            {year}
            </p></div>
      <div id = "container"
        ref={scrollContainerRef}
        className="h-[133.33vw] sm:h-[100vh] overflow-y-scroll relative scroll-container"
      >
        <div className="h-[300vh] flex flex-col items-center justify-start space-y-10 ">

          {boxes.map((box, index) => (
            <div key={box.id} className="relative">
              <div
                id={`box-${box.id}`}
                style={{
                  transform: `scale(${box.scale}) translateX(${box.xPosition})`,
                  opacity: box.opacity,
                }}
                className="w-[11vw] h-[18vw] bg-[url(/assets/timeline/pf.png)] bg-cover bg-center text-white flex flex-col shadow-inner items-center justify-center rounded-lg p-2 relative z-10 transition-opacity"
              >
                {box.content.imgUrl ? (
                  <img
                    src={box.content.imgUrl}
                    alt={`Box ${box.id}`}
                    className="w-3/5 h-2/3 object-cover rounded-lg"
                  />
                ) : (
                  <p className="text-center">{box.content.text}</p>
                )}
              </div>

              <div
                id={`line-${index + 1}`}
                className="absolute bg-gray-400 transition-opacity text-white"
                style={{
                  height: '2px',
                  top: '160%',
                  width: '500%',
                  transform: `translateX(-50%) scaleX(${linesScale[index]})`,
                  transformOrigin: 'center center',
                  opacity: linesOpacity[index],
                  zIndex: 0,
                  left: '50%',
                }}
              >
                <div className='relative text-right left-24 bottom-2'>{index + 2020}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
