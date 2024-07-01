import React from 'react'
import { ButtonProp } from '@/types'

function Button({ btnName, onclick, className }: ButtonProp) {
    return (
        <button
            onClick={onclick}
            className={`text-primary bg-black w-[210px] h-[56px] flex items-center justify-center rounded-[20px] font-semibold ${className ? className : ""}`}
        >
            {btnName}
        </button>
    )
}

export default Button
