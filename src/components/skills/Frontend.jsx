import React from 'react'

const Frontend = () => {
  return (
     <div className="skills__content f">
        <h3 className="skills__title">Frontend</h3>
        
        <div className="skills__box">
            <div className="skills__group">
                
                <div className="skills__data">
                <i class='bx bx-check-circle' ></i>

                <div>
                    <h3  className="skills__name">HTML5</h3>
                    <span className="skills__level">Intermedio</span>
                </div>
                </div>
            
                
                <div className="skills__data">
                <i class='bx bx-check-circle' ></i>

                <div>
                    <h3  className="skills__name"> CSS3</h3>
                    <span className="skills__level">Intermedio</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-check-circle' ></i>

                <div>
                    <h3  className="skills__name"> Javascript</h3>
                    <span className="skills__level"> Básico/Intermedio</span>
                </div>
                </div>
            </div>
           
           
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bx-check-circle' ></i>

                <div>
                    <h3  className="skills__name"> Git & Github</h3>
                    <span className="skills__level"> Intermedio</span>
                </div>
                </div>
                
                <div className="skills__data">
                <i class='bx bx-check-circle' ></i>

                <div>
                    <h3  className="skills__name"> Tailwind</h3>
                    <span className="skills__level"> Intermedio</span>
                </div>
                </div>
            
                
                <div className="skills__data">
                <i class='bx bx-check-circle' ></i>

                <div>
                    <h3  className="skills__name"> React</h3>
                    <span className="skills__level"> Básico</span>
                </div>
                </div>

            </div>
        </div>
     </div>
  )
}

export default Frontend