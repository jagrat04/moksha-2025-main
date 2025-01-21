import { Playfair } from 'next/font/google';
import React from 'react';

const playfair = Playfair({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});

const AboutUs = () => {
    return (
        <div className={` text-white w-[100%] h-[100%]`}>
            <div className='h-full bg-no-repeat w-full bg-left-top cloudAbout'
                style={
                    {
                        backgroundImage: "url(/assets/aboutUs/cloud.png)",

                    }
                }
            >

                <div
                    className='h-full bg-bottom bg-no-repeat bg-contain bottomAbout'
                    style={
                        {
                            backgroundImage: "url(/assets/aboutUs/bottom.png)",
                        }
                    }>
                    <div className='md:mx-[15vw] mx-[3vw] z-10 pt-16'>
                        <div className=''>
                            <h2 className='md:text-5xl text-[6vh] font-black md:text-right text-center'>
                                About Us
                            </h2>
                        </div>
                        <div className={`mt-8`} >
                            <div className='space-y-2'>
                                <h3 className='md:text-3xl text-[3vh]'>
                                    MOKSHA's DREAM
                                </h3>
                                <p className={`sm:w-[70%] md:text-lg text-[1.5vh] ${playfair.className}`}>
                                    Moksha is a vibrant festival where creativity steals the spotlight, and liberty is the headline act! It’s the celebration of talent, freedom of speech, and expression that goes beyond the mundane festival experience. Tailored for enthusiasts of artistry and culture, Moksha boasts a diverse array of events such as Theatre Con, Rouge, Battle of Bands, Oorja, Step Up, and many more.
                                </p>
                            </div>
                            <div className='mt-8 float-right text-right space-y-2'>
                                <h3 className='md:text-3xl text-[3vh]'>
                                    MOKSHA's DREAM
                                </h3>
                                <h3 className={`sm:w-[65%] ml-auto md:text-lg text-[1.5vh] ${playfair.className}`}>
                                    Moksha is a vibrant festival where creativity steals the spotlight, and liberty is the headline act! It’s the celebration of talent, freedom of speech, and expression that goes beyond the mundane festival experience. Tailored for enthusiasts of artistry and culture, Moksha boasts a diverse array of events such as Theatre Con, Rouge, Battle of Bands, Oorja, Step Up, and many more.
                                </h3>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
