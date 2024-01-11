import React, { useState } from 'react';

const CallbackExample = (props) => {
    const [count, setCount] = useState(0);

    // 증가 콜백 함수
    const handleIncrease = () => {
        setCount((prevCount) => prevCount + 1);
    };

    // 감소 콜백 함수
    const handleDecrease = () => {
        setCount((prevCount) => prevCount - 1);
    };

    const reset = () => {
        setCount(() => 0);
    }

    return (
        <div>
            <h1>카운트: {count}</h1>
            <button onClick={props.callback(() => handleIncrease)}>증가</button>
            <button onClick={props.callback(() => handleDecrease)}>감소</button>
        </div>
    );
};

export default CallbackExample;