import React from 'react'
import Image from 'next/image';
const Events = () => {
    return (
        <div className='h-full w-full bg-no-repeat bg-left-top mountainTopEvents'
            style={
                { backgroundImage: "url(/assets/events/topMountain.png)", }
            }
        >
            <div className='h-full w-full bg-no-repeat bg-right-bottom mountainTopEvents'
                style={
                    { backgroundImage: "url(/assets/events/bottomMountain.png)", }
                }
            >

                <h2 className='text-center pt-[7.5vh] text-4xl font-bold mb-16'>
                    EVENTS
                </h2>



                <div className="h-full w-full flex justify-around items-start">
                    <div className="frame md:h-[60%] md:w-[100%] relative flex justify-center items-center overflow-hidden">
                        <div className="inner absolute md:h-[47%] md:w-[15.24%]  py-[44%] bg-slate-300 z-10">
                            Day 1
                        </div>
                        <Image
                            src="/assets/events/frame.png"
                            alt="Frame Image"
                            height={700}
                            width={550}
                            objectFit="contain"
                            className="z-20"
                        />
                    </div>
                    {/* <div className="frame h-[70%] w-[30%] relative flex justify-center items-center overflow-hidden">
                        <div className="inner absolute h-[82%] w-[55%] bg-slate-300 flex flex-col justify-end pb-20 text-3xl items-center z-10">
                            Day 2
                        </div>
                        <Image
                            src="/assets/events/frame.png"
                            alt="Frame Image"
                            layout="fill"
                            objectFit="contain"
                            className="z-20"
                        />
                    </div>
                    <div className="frame h-[70%] w-[30%] relative flex justify-center items-center overflow-hidden">
                        <div className="inner absolute h-[82%] w-[55%] bg-slate-300 flex flex-col justify-end pb-20 text-3xl items-center z-10">
                            Day 3
                        </div>
                        <Image
                            src="/assets/events/frame.png"
                            alt="Frame Image"
                            layout="fill"
                            objectFit="contain"
                            className="z-20"
                        />
                    </div> */}
                </div>






            </div>



        </div>
    )
}

export default Events