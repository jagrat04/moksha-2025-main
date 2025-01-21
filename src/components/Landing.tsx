import React from 'react';

const Landing = () => {
  return (
    <section className='bg-bg-gradient h-screen'>
        <div className='absolute md:top-[15%] md:right-[20%] md:h-2/3 md:w-2/3 h-2/5  w-2/3 left-[12.5%] top-[30%] min-w-fit min-h-fit bg-cover bg-center'
        style={
            { 
                backgroundImage: `url('/assets/landing/DragonFace.png')`,
            }
        }
        >
        </div>
        <div className='absolute top-0 md:top-0 md:right-0 md:h-1/3 md:w-2/3 right-0 w-[50%] scale-y-110 bg-contain bg-no-repeat'
        style={
            { 
                backgroundImage: `url('/assets/landing/dgTail.png')`,
            }
        }
        >
        </div>
    </section>
  );
}

export default Landing;
