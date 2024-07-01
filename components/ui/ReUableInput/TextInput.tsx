import React from 'react';
import { TextInputProp } from '@/types';

const TextInput = ({
    inputLabel,
    overrideStyles,
    placeholder,
    formType,
    required = true,
    children,
    ...otherProps }: TextInputProp
) => {
    return (
        <div>
            <>
                <input
                    {...otherProps}
                    className={`input-brand ${overrideStyles ? overrideStyles : ""}`}
                    placeholder={placeholder}
                    name={inputLabel}
                    id={inputLabel}
                    type={formType}
                />
            </>
            {children}
        </div>
    );
}

export default TextInput;
