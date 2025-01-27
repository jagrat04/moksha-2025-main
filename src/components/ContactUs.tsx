import Image from 'next/image';
import React from 'react';

const ContactUs = () => {
  return (
    <div className={`text-white h-[100%] w-[100%] bg-right bg-no-repeat bg-blend-lighten bg-cover kauji flex flex-col justify-between`}
      style={{
        backgroundImage: "url(/assets/contactUs/kauji.png)",
      }}
    >
      <div className="flex justify-end">
        <Image
          src={'/assets/general/LOGO.svg'}
          width={Number.MAX_VALUE}
          height={Number.MAX_VALUE}
          alt='LOGO'
          className='sm:h-40 sm:w-96 h-32 w-60 ml-auto'
        />
      </div>


      <div className='mr-[2.5vw] mb-7'>
      <h3 className='md:text-3xl text-[3vh] font-semibold w-full text-right'>
        CONTACT US
      </h3>

      <div className='flex space-x-4 justify-end mt-2'>
        <a href='#' target="_blank" className=''>
          <Image
            src={'/assets/general/gmail.svg'}
            alt='gmail.Logo'
            height={Number.MAX_VALUE}
            width={Number.MAX_VALUE}
            className="h-7 w-7"
          />
        </a>

        <a href='#' target="_blank" className=''>
          <Image
            src={'/assets/general/instagram.svg'}
            alt='instagram.Logo'
            height={Number.MAX_VALUE}
            width={Number.MAX_VALUE}
            className="h-7 w-7"
          />
        </a>
        <a href='#' target="_blank">
          <Image
            src={'/assets/general/fb.svg'}
            alt='facebook.Logo'
            height={Number.MAX_VALUE}
            width={Number.MAX_VALUE}
            className="h-7 w-7"
          />
        </a>
        <a href='#' target="_blank">
          <Image
            src={'/assets/general/x_logo.svg'}
            alt='x_logo.Logo'
            height={Number.MAX_VALUE}
            width={Number.MAX_VALUE}
            className="h-7 w-7"
          />
        </a>
      </div>
      <div className="flex items-center justify-end">
        <span className="text-2xl text-[#676480]">&#9670;</span>
        <hr className="w-[70%] md:w-[25%] sm:w-[35%] border-t-4 scale-x-105 border-[#676480] translate-y-[2px]" />
        <span className="text-2xl text-[#676480]">&#9670;</span>
      </div>
      <div className='text-right w-full md:text-base text-sm'>
        Netaji Subhas University Of Technology
        <p>
          Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078
        </p>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
