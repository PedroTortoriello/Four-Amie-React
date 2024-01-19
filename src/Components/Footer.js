import React from 'react';
import { RiLinkedinFill, RiMailFill, RiInstagramFill } from 'react-icons/ri';
import FourLogo from './img/four-logo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid">
        <div className="footer__logo">
          <a href="#" className="footer__logo-link"><img src={FourLogo} alt="Logo da Four Tecnologia"></img></a>
        </div>
        <ul className="footer__social">
          <li><a href="https://www.linkedin.com/company/four-tecnologia-e-consultoria/" className="footer__social-link"><RiLinkedinFill /></a></li>
          <li><a href="mailto:info@fourtc.com.br" className="footer__social-link"><RiMailFill /></a></li>
          <li><a href="https://www.instagram.com/four_tec?igsh=bmQzaXNoZ213eXJv" className="footer__social-link"><RiInstagramFill /></a></li>
        </ul>
      </div>
      <div className="footer__copyright">
        <p className="footer__text">© 2024 Four Tecnologia. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
