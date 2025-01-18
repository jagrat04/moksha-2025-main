import Link from 'next/link'
import React from 'react'
import { Cinzel } from 'next/font/google'
import ForgotPasswordForm from '@/components/ForgotPasswordForm'


const cinzel = Cinzel({ 
  subsets: ['latin'], 
  weight: ["400","500","600","700"]
})

const handleAction = async (e: React.FormEvent<HTMLFormElement>) => {
  "use server"
}

const page = () => {
  return (
    <div className={`${cinzel.className} bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-1 flex-col justify-center items-center py-12 sm:px-6 lg:px-8`} style={{ backgroundImage: `url('/assets/auth/RegisterBG.png')`}}>
      <div className="bg-[#026474] bg-opacity-60 md:px-14 md:w-[35%] md:min-w-[650px] sm:w-[70%] w-[90%] rounded-2xl sm:px-12 flex justify-center flex-col items-center px-6 py-20 sm:rounded-lg text-white">
        <h1 className='font-bold md:text-4xl text-2xl mb-8'>
          FORGOT PASSWORD
        </h1>
          <ForgotPasswordForm />
          <div className="flex items-center my-4 w-[100%]">
          <div className="flex-grow border-t border-[#f9f9f9]"></div>
          <span className="mx-4">OR</span>
          <div className="flex-grow border-t border-[#f9f9f9]"></div>
        </div>
        <div className='mt-2 md:text-base text-xs md:font-semibold font-medium'>
          REMEMBERED YOUR PASSWORD? <Link href={'/auth/login'}> LOG IN </Link>
        </div>
      </div>
    </div>
  )
}

export default page