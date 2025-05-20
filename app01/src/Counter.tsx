import { useState } from "react";


export interface Props {
    init: number;
    step: number;
}

export function Counter(props: Props) {
    const step = props.step;
    const init = props.init;

    const [counter, setCounter] = useState(init);
    function inc() {
        setCounter(counter + step);
    }

    function dec() {
        setCounter(counter - step);
    }

    return <div>
        <hr />
        {counter}
        <br />
        <button onClick={inc}>➕</button>&nbsp;
        <button onClick={dec}>➖</button>
    </div>;
}
