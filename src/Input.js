import React, { useState } from 'react';

const Input = () => {
    const [inputVal, setInputVal] = useState('');

    const handleButtonClick = () => {
        alert(inputVal);
    };

    return (
        <div>
            <input onChange={(e) => setInputVal(e.target.value)} type="text" />
            <button onClick={handleButtonClick}>Submit</button>
        </div>
    );
};

export default Input;
