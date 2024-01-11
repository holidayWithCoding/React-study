import React from 'react';

function BooleanComponent(props) {
    const message = props.bored ? '놀러가자' : '하던거하자';

    return (
        <div className="message-container">
            {message}
        </div>
    );
}

export default BooleanComponent;