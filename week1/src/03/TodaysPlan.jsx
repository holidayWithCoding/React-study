import React from 'react';
import PropTypes from "prop-types";
import BooleanComponent from "./BooleanComponent";
import ChildNode from "./ChildNode";
import StateExample from "./StateExample";
import ChildProperty from "./ChildProperty";
import ForceUpdateExample from "./ForceUpdateExample";
import ArrayComponent from "./ArrayComponent";
import CallbackExample from "./CallbackExample";
import Input from "./Input";
function TodaysPlan(props) {

    const {
        boolValue,
        numValue,
        arrayValue,
        objValue,
        nodeValue,
        funcValue
    } = props;

    const callback = (reset) => {
        reset();
    }

    return (
        <div className="message-container">
            <span>{boolValue}</span><br/>
            <span>{numValue}</span><br/>
            <span>{arrayValue}</span><br/>
            <span>{String(Object.entries(objValue))}</span><br/>
            <span>{nodeValue}</span><br/>
            <span>{String(funcValue)}</span>

            <hr/>
            <div><b>지루할 떄 :</b><BooleanComponent bored/></div>
            <div><b>즐거울때 떄 :</b><BooleanComponent/></div>
            <hr/>
            <ChildNode/>
            <hr/>
            <ChildProperty>
                <div><span>자식노드</span></div>
            </ChildProperty>
            <hr/>
            <StateExample/>
            <hr/>
            <ForceUpdateExample/>
            <hr/>
            <ArrayComponent/>
            <hr/>
            <CallbackExample callback={callback}/>
            <hr/>

            <Input name={"test"} label={"label test"} type={"number"} />
        </div>
    );
}

TodaysPlan.propTypes = {
    boolValue: PropTypes.bool,
    numValue: PropTypes.number,
    arrayValue: PropTypes.arrayOf(PropTypes.number),
    objValue: PropTypes.object,
    nodeValue: PropTypes.node,
    funcValue: PropTypes.func
}
export default TodaysPlan;
