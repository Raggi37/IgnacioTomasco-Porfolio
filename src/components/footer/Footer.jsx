import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className='footer__title'>/Ignacio</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre mí</a>
                </li>
                
                <li>
                    <a href="#porfolio" className="footer__link">Proyectos</a>
                </li>
                
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/ignacio-tomasco" className="footer__social-link" target="_blank" rel="noreferrer noopener"> 
                    <i class="uim uil-linkedin"></i>
                </a>
        
                <a href="https://www.github.com/Raggi37" className="footer__social-link" target="_blank" rel="noreferrer noopener">
                    <i class="uil uil-github"></i> 
                </a>
    
            </div>

            <span className='footer__copy'>&#169; Todos los derechos reservados</span>
        </div>

    </footer>
  )
}

export default Footer