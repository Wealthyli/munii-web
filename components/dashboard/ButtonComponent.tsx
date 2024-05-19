import React, { MouseEventHandler, useState } from 'react'

interface ButtonComponentProps{
    onClick: MouseEventHandler<HTMLButtonElement>;
    text: string;
  count: number,
  selected: boolean
}

export default function ButtonComponent({ onClick, text, count,selected }: ButtonComponentProps) {
  return (
    <button 
          onClick={onClick}
        className={`p-2  ${selected ? 'bg-[#000000] text-white' : 'hover:bg-[#000000] hover:text-white'} hover:text-white transition-colors duration-200 ease-in-out rounded-2xl`}
    >
        {text} <span className={`p-[5px] rounded-lg ${selected? "bg-[#CAFF01] text-[#000000]":"bg-[#5555551A] "}`}>{count}</span>
    </button>
  )
}