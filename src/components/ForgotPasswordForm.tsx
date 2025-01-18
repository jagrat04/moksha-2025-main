'use client'

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";
import ForgotSchema from "@/zodSchema/forgotSchema";
import { Tooltip as ReactTooltip } from "react-tooltip";

type Inputs = z.infer<typeof ForgotSchema>;
const ForgotPasswordForm = () => {
    const { register, handleSubmit, formState: { errors }, trigger } = useForm<Inputs>({
        resolver: zodResolver(ForgotSchema),
        mode: 'onBlur',
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };
    return (
        <form className="space-y-6 w-[100%]" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email" className="block md:text-lg text-sm font-medium leading-6">
                    EMAIL*
                </label>
                <input
                    id="email"
                    data-tooltip-id="emailtooltip"
                    autoComplete="email"
                    {...register("email")}
                    className={`block w-full rounded-md py-1.5 px-2 md:mt-2 md:h-10 h-8 text-[#5F9A96] sm:text-lg sm:leading-6  `} />
                {errors.email && (<ReactTooltip id="emailtooltip" variant='light' place="right" content={errors.email.message} />)}
            </div>
            <div className=''>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md md:mt-10 mt-6 bg-[#8BBDB8] px-3 md:py-4 py-2 font-bold md:text-lg  leading-6 text-white shadow-sm hover:bg-opacity-80 transition-colors hover:text-lime-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                    RESET PASSWORD
                </button>
            </div>
        </form>
    )
}

export default ForgotPasswordForm