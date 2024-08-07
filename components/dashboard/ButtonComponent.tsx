import React, { MouseEventHandler, useState } from 'react'
import CustomButton from '../CustomButton';
interface ButtonComponentProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
  count: number,
  selected: boolean
}

export default function ButtonComponent({ onClick, text, count, selected }: ButtonComponentProps) {
  const [onHover, setOnHover] = useState(false)

  return (
    <CustomButton
      onClick={onClick}
      onMouseLeave={() => setOnHover(false)}
      onMouseEnter={() => setOnHover(true)}
      className={`p-2  ${selected ? 'bg-[#000000] text-white' : 'hover:bg-[#000000] hover:text-white'} hover:text-white transition-colors duration-200 ease-in-out rounded-3xl flex flex-col items-center justify-center sm:flex-row gap-2 font-medium text-[14px] tracking-wide px-4`}
    >
      {text} <span className={`p-[5px] rounded-lg ${selected || onHover ? "bg-[#CAFF01] text-[#000000]" : "bg-[#5555551A] "}`}>{count}</span>
    </CustomButton>
  )
}
