import React from 'react'
import { render } from 'react-dom'

import ClassCounter from './ClassCounter'
import HookCounter from './HookCounter'

import './styles.scss'

const Application = () => {
  return (
    <main className="Application">
      <section className="counter">
        <ClassCounter max={15} step={5}/>
      </section>
      <section className="counter">
        <HookCounter max={15} step={5}/>
      </section>
    </main>
  )
}

render(<Application />, document.getElementById('root'))
