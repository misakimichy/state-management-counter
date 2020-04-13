import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        } 
    }

    updateDocumentTitle = () => {
        document.title = `Count: ${this.state.count}`;
    }

    increment = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }))
    }

    decrement = () => {
        this.setState(({ count }) => ({
            count: count - 1,
        }))
    }

    reset = () => {
        this.setState(() => ({
            count: 0
        }))
    }

    componentDidUpdate() {
        setTimeout(() => {
            console.log(`Count: ${this.state.count}`)
        }, 3000)
    }

    render() {
        const { count } = this.state
        return (
            <div className="Counter">
                <h1 style={{textAlign: 'center'}}>Class Counter</h1>
                <p className="count">{count}</p>
                <section className="controls">
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>
                </section>
            </div>
        )
    }
}

export default ClassCounter