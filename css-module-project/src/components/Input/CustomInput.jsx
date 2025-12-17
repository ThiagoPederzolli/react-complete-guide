import React from 'react';
import { InputStyle, LabelStyle } from './Input.styles';

function CustomInput({ label, invalid, ...props}) {
    return (
        <p>
            <LabelStyle $invalid={invalid}>{label}</LabelStyle>
            <InputStyle $invalid={invalid} {...props} />
        </p>
    )
}

export default CustomInput;