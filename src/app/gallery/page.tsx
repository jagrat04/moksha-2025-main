'use client'
import { useEffect, useState } from 'react'

export default function Page() {
    const [scrollY, setScrollY] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [leftClicked, setLeftClicked] = useState(false);
    const [rightClicked, setRightClicked] = useState(false);

    // Array of artist images from the gallery folder
    const artistImages = [
        '/assets/gallery/images/artist1.png',
        '/assets/gallery/images/artist2.png',
        '/assets/gallery/images/artist3.png',
        '/assets/gallery/images/artist4.png',
        '/assets/gallery/images/artist5.png',
        '/assets/gallery/images/artist6.png',
        '/assets/gallery/images/artist7.png',
        '/assets/gallery/images/artist8.png',
        '/assets/gallery/images/artist9.png',
        '/assets/gallery/images/artist10.png',
        '/assets/gallery/images/artist11.png',
    ];

    // Handle image navigation
    const handlePrevImage = () => {
        setLeftClicked(true);
        setTimeout(() => setLeftClicked(false), 150);
        setCurrentImageIndex((prev) => 
            prev === 0 ? artistImages.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setRightClicked(true);
        setTimeout(() => setRightClicked(false), 150);
        setCurrentImageIndex((prev) => 
            prev === artistImages.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate door transform and opacity values based on vertical scroll
    const doorTransformValue = Math.max(0, (scrollY - 500) * 5);
    const doorOpacity = scrollY < 510 ? 1 : 0;
    const overlayOpacity = Math.max(0, Math.min((scrollY - 500) * 0.1, 1));

    console.log('scrollY:', scrollY, 'doorOpacity:', doorOpacity); // Debug values

    return (
        <>
            {/* Fixed background container */}
            <div className="fixed inset-0 bg-cover bg-center overflow-hidden" 
                style={{ backgroundImage: "url(/assets/gallery/background.png)" }} 
            />

            {/* Scrollable content container */}
            <div className="relative h-[300vh] overflow-x-hidden">
                <div className="flex flex-col justify-start items-center min-h-full">
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                        <img 
                            src="/assets/gallery/left-door.png"
                            alt="Left Door"
                            className="max-w-[20vw] h-[40vh] object-contain translate-x-[170%] z-20"
                            style={{
                                transform: `translateX(calc(170% - ${doorTransformValue}px))`,
                                opacity: doorOpacity,
                                transition: 'opacity 0.2s ease-out, transform 0.5s ease-out' // Added transform transition
                            }}
                        />
                        <img 
                            src="/assets/gallery/door.png" 
                            alt="Door"
                            className="max-w-[100%] h-[70vh] object-contain z-10"
                        />
                        <img 
                            src="/assets/gallery/right-door.png"
                            alt="Right Door"
                            className="max-w-[20vw] h-[40vh] object-contain -translate-x-[195%] z-20"
                            style={{
                                transform: `translateX(calc(-195% + ${doorTransformValue}px))`,
                                opacity: doorOpacity,
                                transition: 'opacity 0.2s ease-out, transform 0.5s ease-out' // Added transform transition
                            }}
                        />
                        {/* Black overlay positioned over the door */}
                        <div 
                            className="absolute bg-black z-30 rounded-xl transition-opacity duration-100" // added faster transition
                            style={{
                                opacity: overlayOpacity,
                                width: '100%',
                                height: '28%', 
                                left: '49%',
                                top: '50%',
                                transform: 'translate(-51%, -50%)',
                                backgroundColor: 'transparent'
                            }}
                        >
                            {/* Added image on top of overlay */}
                            <img 
                                src={artistImages[currentImageIndex]}
                                alt={`Artist ${currentImageIndex + 1}`}
                                className="absolute w-full h-full object-contain z-40 rounded-5xl"
                                style={{ transform: 'scale(3, 2.3)' }}
                            />
                        </div>

                        {/* Navigation and decorative images below the door */}
                        <img 
                            src="/assets/gallery/move.png"
                            alt="left move"
                            className="absolute -bottom-60 left-[-15vw] w-130 h-130 object-contain z-20 scale-x-[-1] cursor-pointer transition-transform duration-150"
                            style={{
                                transform: `scale(${leftClicked ? 0.9 : 1}) scaleX(-1)`
                            }}
                            onClick={handlePrevImage}
                        />
                        <img 
                            src="/assets/gallery/diamond-left.png"
                            alt="left-door-diamond"
                            className="absolute w-[25%] h-auto object-contain z-20"
                            style={{
                                bottom: '-5%',  // Moved lower (was 10%)
                                left: '3%'    // Moved more to the left (was 15%)
                            }}
                        />
                        <img 
                            src="/assets/gallery/move.png"
                            alt="right move"
                            className="absolute -bottom-60 right-[-14vw] w-130 h-130 object-contain z-20 cursor-pointer transition-transform duration-150"
                            style={{
                                transform: `scale(${rightClicked ? 0.9 : 1})`
                            }}
                            onClick={handleNextImage}
                        />
                        <img 
                            src="/assets/gallery/diamond-left.png"
                            alt="right-door-diamond"
                            className="absolute w-[25%] h-auto object-contain z-20 scale-x-[-1]"
                            style={{
                                bottom: '-5%',  // Moved lower (was 10%)
                                right: '5%'   // Moved more to the right (was 15%)
                            }}
                        />
                    </div>
                    <div className="fixed bottom-0 left-1/2 -translate-x-1/2">
                        <img 
                            src="https://s3-alpha-sig.figma.com/img/6fc5/1656/084dc0821177da5ac8614f94ad561ef8?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UMmFg8Jfcp5iGCJ-5~NRn0oeFVoAKu2RQC-AFIHYE~rjeB1yUIZkVNUvgFXhwfY9WmoLqe-vXFazcpGOt9Gx8JZICRaiKr4yjnCj6CFLsYuXQzZUuU3TZft-yeRHkVxO8M14fTAfGBHFFiiuox9ScBytjUQEIr19mL8vsQKwqZkj1-UbR5kHN~hOeshE04IQNCprx245QfKZzOxdeVa93b715kfBUQTDHdFO26wp5ItEO0akZkB8PSsoZKgZt~ST80KfKnLr7aRV~BVZkr9VA9CRgrB-ONBWKlOmb2IyinbrbISZDc2KAVWk6QkhleR~jdSAKk0sHeSAPxgJDBOo6g__" 
                            alt="Fog"
                            className="w-screen h-[30vh] object-contain opacity-[0.29] scale-[7]"
                        />
                    </div>
                </div>
            </div>

            {/* Fixed diamond images */}
            <div className="fixed inset-x-0 bottom-0 z-20 pointer-events-none">
                <img 
                    src="/assets/gallery/diamond-left.png"
                    alt="Left Image"
                    className="fixed bottom-0 left-0 w-72 h-72 object-contain transition-opacity duration-500 scale-x-[-1] -mb-12"
                    style={{
                        opacity: Math.min(scrollY / 300, 1)
                    }}
                />
                <img 
                    src="/assets/gallery/diamond-left.png"
                    alt="Right Image"
                    className="fixed bottom-0 right-0 w-72 h-72 object-contain transition-opacity duration-500 -mb-12"
                    style={{
                        opacity: Math.min(scrollY / 300, 1)
                    }}
                />
            </div>
        </>
    )
}