import React from 'react';

function ArrayComponent(props) {

    const fruitList = [{ name: 'banana', price: 1000}, { name: 'apple', price: 2000}, { name: 'cherry', price: 3000},];
    const fruits = fruitList.map((fruit, idx) => <div key={idx}>이름: {fruit.name} / 가격: {fruit.price}원</div>)
    return (
        <React.Fragment>
            {fruits}
        </React.Fragment>
    );
}

export default ArrayComponent;