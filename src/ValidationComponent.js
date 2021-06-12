import { render } from '@testing-library/react';
import React from 'react';
import X from '../src/assets/x.png';
import Check from '../src/assets/check.png';

function ValidationComponent(props){

    return (
        <p style={{color: isValid(props.validator,props.data)? "green" : "red"}}>
            <img
            style={{
                height: 25,
                width: 25
            } }
            src={isValid(props.validator,props.data)? Check : X} />
            {props.label}
            </p>
        
    );
}

function isValid(validator, data){
    return validator(data);
}

export default ValidationComponent;