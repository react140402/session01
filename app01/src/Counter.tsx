import { useState } from "react";


export interface Props {
    init: number;
    step: number;
}

export function Counter({ init, step }: Props) {
    const [counter, setCounter] = useState(init);
    function inc() {
        setCounter(counter + step);
    }

    function dec() {
        setCounter(counter - step);
    }

    //lambda expression
    const reset = () => {
        setCounter(init);
    }

    return <div>
        <hr />
        {counter}
        <br />
        <button onClick={inc}>➕</button>&nbsp;
        <button onClick={dec}>➖</button>&nbsp;
        <button onClick={() => {
            setCounter(init);
        }} >Rest</button>
        <button onClick={reset} >Rest</button>
    </div>;
}
