import './App.css';
import React from 'react';
import TodaysPlan from "./03/TodaysPlan";

function App() {
    return (
        <div className="body">
            <TodaysPlan
                boolValue={true}
                numValue={1}
                arrayValue={[1,2,3]}
                funcValue={() => console.log('test')}
                objValue={{name: '제목', age: 30}}
                nodeValue={<h1>노드</h1>}
            />

        </div>
    );
}

export default App;
