import { useState } from "react";


export interface Props {
    init: number;
    step: number;
}

export function Counter(props: Props) {
    const [counter, setCounter] = useState(props.init);
    function inc() {
        setCounter(counter + props.step);
    }

    function dec() {
        setCounter(counter - props.step);
    }

    return <div>
        <hr />
        {counter}
        <br />
        <button onClick={inc}>➕</button>&nbsp;
        <button onClick={dec}>➖</button>
    </div>;
}
