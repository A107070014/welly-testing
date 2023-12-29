import React from 'react'

export default function React() {
    const [count, setCount] = useState(0);

    function _incrementCount() {
        setCount((prevCount) => prevCount + 1);
    }

    function _decrementCount() {
        setCount((prevCount) => prevCount - 1);
    }
    return (
        <div>
            <button onClick={_incrementCount}>增加</button>
            <button onClick={_decrementCount}>減少</button>
            <p>{count}</p>
        </div>
    )
}
