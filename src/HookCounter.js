import React, { useState, useEffect, useRef } from 'react'

const storeStateInLocalStorage = count => {
    localStorage.setItem('counterState', JSON.stringify({ count }))
    console.log(localStorage)
}

const useLocalStorage = (initialState, key) => {
    const get = () => {
        const storage = localStorage.getItem(key)
        if (storage) return JSON.parse(storage)[value]
        return initialState
    }

    const [value, setValue] = useState(get())

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify({ value }))
    })

    return [value, setValue]
}

const HookCounter = ({max, step}) => {
    const [count, setCount] = useState(0)
    const countRef = useRef()

    let message = ''
    if (countRef.current < count) message = 'Higher'
    if (countRef.current > count) message = 'Lower'
    countRef.current = count

    const increment = () => {
        setCount(c => c + 1)
    }
    const decrement = () => setCount(count - 1)
    const reset = () => setCount(0)
    
    return (
        <div className="Counter">
            <h1 style={{ textAlign: 'center' }}>Hook Counter</h1>
            <p style={{ textAlign: 'center' }}>{message}</p>
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