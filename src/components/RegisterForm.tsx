'use client'

import React from 'react'
import collegeList from '@/app/auth/register/CollegeList'
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import RegisterSchema from '@/zodSchema/registerSchema';
import { Tooltip as ReactTooltip } from "react-tooltip";

type Inputs = z.infer<typeof RegisterSchema>;

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors }, trigger } = useForm<Inputs>({
        resolver: zodResolver(RegisterSchema),
        mode: 'onBlur',
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <form className="space-y-4 w-[100%]" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label
                    htmlFor="fullname"
                    className="block md:text-lg text-sm font-medium leading-6"
                >
                    FULL NAME*
                </label>
                <input
                    id="fullname"
                    autoComplete="additional-name"
                    {...register("fullname")}
                    data-tooltip-id="fullnameTooltip" 
                    className="block w-full rounded-md border-0 py-1 px-2 md:mt-2 md:h-10 h-8 text-[#5F9A96] sm:text-lg sm:leading-6"
                />
                {errors.fullname && (<ReactTooltip id="fullnameTooltip" variant='light' place="right" content={errors.fullname.message} />)}
            </div>
            <div>
                <label
                    htmlFor="phone"
                    className="block md:text-lg text-sm font-medium leading-6"
                >
                    MOBILE NUMBER*
                </label>
                <input
                    id="phone"
                    autoComplete="tel"
                    inputMode='numeric'
                    data-tooltip-id='phonetooltip'
                    type='tel'
                    pattern="[0-9]{10}"
                    {...register("phone")}
                    className="block w-full rounded-md border-0 py-1 px-2 md:mt-2 md:h-10 h-8 text-[#5F9A96] sm:text-lg sm:leading-6"
                />
                {errors.phone && (<ReactTooltip id="phonetooltip" variant='light' place="right" content={errors.phone.message} />)}
            </div>

            <div>
                <label htmlFor="email" className="block md:text-lg text-sm font-medium leading-6">
                    EMAIL*
                </label>
                <input
                    id="email"                    
                    type="email"
                    autoComplete="email"
                    {...register("email")}
                    data-tooltip-id='emailtooltip'
                    className="block w-full rounded-md border-0 py-1 px-2 md:mt-2 md:h-10 h-8 text-[#5F9A96] sm:text-lg sm:leading-6"
                />
                {errors.email && (<ReactTooltip id="emailtooltip" variant='light' place="right" content={errors.email.message} />)}
            </div>
            <div>
                <label htmlFor="college" className="block md:text-lg text-sm font-medium leading-6">
                    COLLEGE NAME*
                </label>
                <input
                    id="college"
                    autoComplete="organization"
                    {...register('college')}
                    list="collegeList"
                    data-tooltip-id='collegetooltip'
                    className="block w-full rounded-md border-0 py-1 px-2 md:mt-2 md:h-10 h-8 text-[#5F9A96] sm:text-lg sm:leading-6"
                />


                {errors.college && (<ReactTooltip id="collegetooltip" variant='light' place="right" content={errors.college.message} />)}
                <datalist id="collegeList">
                    {collegeList.map((college, index) => (
                        <option key={index} value={college} />
                    ))}
                </datalist>

            </div>
            <div>
                <label htmlFor="password" className="block md:text-lg text-sm font-medium leading-6">
                    PASSWORD*
                </label>
                <input
                    id="password"
                    
                    type="password"
                    autoComplete="new-password"
                    {...register("password")}
                    data-tooltip-id='passwordtooltip'
                    className="block w-full rounded-md border-0 py-1 px-2 md:mt-2 md:h-10 h-8 text-[#5F9A96] sm:text-lg sm:leading-6"
                />
                {errors.password && (<ReactTooltip id="passwordtooltip" variant='light' place="right" content={errors.password.message} />)}
            </div>
            <div>
                <label htmlFor="confirmPassword" className="block md:text-lg text-sm font-medium leading-6">
                    CONFIRM PASSWORD*
                </label>
                <input
                    id="confirmPassword"
                    
                    type="password"
                    autoComplete="new-password"
                    {...register("confirmPassword")}
                    data-tooltip-id='confirmpasswordtooltip'
                    className="block w-full rounded-md border-0 py-1 px-2 md:mt-2 md:h-10 h-8 text-[#5F9A96] sm:text-lg sm:leading-6"
                />
                {errors.confirmPassword && (<ReactTooltip id="confirmpasswordtooltip" variant='light' place="right" content={errors.confirmPassword.message} />)}
            </div>


            <div className=''>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md md:mt-10 mt-8 bg-[#8BBDB8] px-3 md:py-4 py-2 font-bold md:text-lg  leading-6 text-white shadow-sm hover:bg-opacity-80 transition-colors hover:text-lime-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                    SIGN UP
                </button>

            </div>


        </form>
    )
}

export default RegisterForm