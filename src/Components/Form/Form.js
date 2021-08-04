import React from 'react';

const Input = (
    {
        type,
        placeholder,
        onChange,
        onSubmit,
        value,
        style
    }
) => {
    return ( 
        <>
        <input  value={value} onSubmit={onSubmit} onChange={onChange} style={style} placeholder={placeholder} type={type} />
        </>
     );
}
 
export default Input;