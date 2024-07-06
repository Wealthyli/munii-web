"use client"

import { FAQCardProp } from '@/types';
import React, { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';


const FAQCard = ({ questionText, answerText }: FAQCardProp) => {

    const [showAnswer, setShowAnswer] = useState(false)

    return (
        <div className='flex flex-col gap-2 border border-text-s-text p-4 rounded-3xl full sm:w-[600px]'>
            <div className='flex item-center justify-between gap-2 '>
                <span>{questionText}</span>
                <button
                    onClick={() => setShowAnswer(!showAnswer)}
                >
                    {showAnswer ? <BiChevronUp /> : <BiChevronDown />}
                </button>
            </div>
            <div className={`${showAnswer ? 'block border-t border-[#c9c4c4cc]' : "hidden"} py-2`}>
                <div>
                    {answerText}
                </div>
            </div>
        </div>
    );
}

export default FAQCard;
