'use client';

import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import LoginSchema from '@/zodSchema/loginSchema';
import { Tooltip as ReactTooltip } from "react-tooltip";

type Inputs = z.infer<typeof LoginSchema>;

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, trigger } = useForm<Inputs>({
        resolver: zodResolver(LoginSchema),
        mode: 'onBlur',
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <>
            <form noValidate className="space-y-6 w-[100%]" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email" className="block md:text-lg text-sm font-medium leading-6">
                        EMAIL*
                    </label>
                    <input
                        id="email"
                        type="email"
                        data-tooltip-id="emailtooltip"
                        autoComplete="email"
                        {...register("email")}
                        className={`block w-full rounded-md py-1.5 px-2 md:mt-2 md:h-10 h-8 text-[#5F9A96] sm:text-lg sm:leading-6 `} />
                    {errors.email && (<ReactTooltip id="emailtooltip" variant='light' place="right" content={errors.email.message} />)}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password" className="block md:text-lg text-sm font-medium leading-6">
                        PASSWORD*
                    </label>
                    <input
                        id="password"
                        type="password"
                        data-tooltip-id="passwordtooltip"
                        {...register("password")}
                        autoComplete="new-password"
                        className={`block w-full rounded-md px-2 md:mt-2 md:h-10 h-8 text-[#5F9A96] sm:text-lg sm:leading-6}`}
                    />
                    {errors.password && (<ReactTooltip id="passwordtooltip" variant='light' place="right" content={errors.password.message} />)}
                    <Link href={'/auth/forgotPassword'} className='text-sm self-end mt-2'>FORGOT PASSWORD?</Link>
                </div>
                <div className=''>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md md:mt-10 mt-6 bg-[#8BBDB8] px-3 md:py-4 py-2 font-bold md:text-lg  leading-6 text-white shadow-sm hover:bg-opacity-80 transition-colors hover:text-lime-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        LOG IN
                    </button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
