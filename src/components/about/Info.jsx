import React from 'react'

const Info = () => {
  return (
    
    <div className="about__info grid">
        <div className="about__box">
        <i class="bx bx-code-alt about__icon"></i>
            <h3 className="about__title">
                Hobby 1
            </h3>
            <span className="about__subtitle">
                Hobby 1 descrip
            </span>
        </div>

        <div className="about__box">
        <i class="bx bx-joystick about__icon"></i>
            <h3 className="about__title">
                Hobby 2
            </h3>
            <span className="about__subtitle">
                hobb2 descrip
            </span>
        </div>

        <div className="about__box">
        <i class="bx bx-world about__icon"></i>
            <h3 className="about__title">
                Hobby 3
            </h3>
            <span className="about__subtitle">
                Hobby 3 descrip
            </span>
        </div>
    </div>
    
  )
}

export default Info