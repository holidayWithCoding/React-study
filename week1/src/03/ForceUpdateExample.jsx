import React from 'react';

function ForceUpdateExample(props) {

    let [count, setCount] = React.useState(0);

    const increaseCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <span>카운트: {String(count)}</span>
            <button onClick={increaseCount}>버튼</button>
        </div>
    );
}

export default ForceUpdateExample;