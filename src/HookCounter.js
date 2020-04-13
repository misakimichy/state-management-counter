import React, { useState, useEffect } from 'react'

const getStateFormLocalStorage = () => {
    const storage = localStorage.getItem('counterState')
    if (storage) return JSON.parse(storage)
    return { count: 0 }
}

const storeStateInLocalStorage = (state) => {
    localStorage.setItem('counterState', JSON.stringify(state))
    console.log(localStorage)
}

const HookCounter = ({max, step}) => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(c => {
            if (c >= max) return c
            return c + step
        })
    }
    const decrement = () => setCount(count - 1)
    const reset = () => setCount(0)

    useEffect(() => {
        document.title = `Counter: ${count}`
    }, [count])
    
    return (
        <div className="Counter">
            <h1 style={{textAlign: 'center'}}>Hook Counter</h1>
            <p className="count">{count}</p>
            <section className="controls">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </section>
        </div>
    )
}


export default HookCounter