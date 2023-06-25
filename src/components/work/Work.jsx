import React from 'react'
import "./work.css"
import Works from './Works'


const Work = () => {
  return (
    <section className="work section" id="porfolio">
        <h2 className="section__title">Porfolio</h2>
        <span className="section__subtitle">Trabajos</span>

        <Works />
    </section>
  )
}

export default Work