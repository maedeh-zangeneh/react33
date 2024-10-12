import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0); 


    const increaseCount = () => setCount(prevCount => prevCount + 1);
    
    
    const decreaseCount = () => setCount(prevCount => prevCount - 1);

    const resetCount = () => setCount(0);

    return (
        <div>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}

export default Counter;
