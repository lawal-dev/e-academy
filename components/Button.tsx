'use client'
import React from 'react'
type ButtonProps = {
    children: string,

}

export const Button = ({children}: ButtonProps) => {
    return (
        <div>
            <button className='bg-[#0D5EBA] text-white w-full rounded-md py-2'>
                {children}
            </button>
        </div>
    )
}
