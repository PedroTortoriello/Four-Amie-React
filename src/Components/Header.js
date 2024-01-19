import React, { useState, useEffect } from 'react';
import { RiEyeLine, RiEyeOffLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Header = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const toggleNavMenu = () => {
    setNavMenuOpen(!navMenuOpen);
  };

  const toggleLoginForm = () => {
    setLoginFormOpen(!loginFormOpen);
  };

  const handlePasswordVisibility = (e, inputId) => {
    e.preventDefault();
    setShowPassword(!showPassword);
    const passwordInput = document.getElementById(inputId);
   
    if (passwordInput) {
       const type = showPassword ? 'password' : 'text';
       passwordInput.type = type;
       passwordInput.focus();
    }
  };

  const handlePasswordVisibility2 = (e, inputId) => {
    e.preventDefault();
    setShowPassword2(!showPassword2);
    const passwordInput = document.getElementById(inputId);
  
    if (passwordInput) {
      const type = showPassword2 ? 'password' : 'text';
      passwordInput.type = type;
      passwordInput.focus();
    }
  };


  useEffect(() => {
    const inputFields = document.querySelectorAll('.input-group input');

    inputFields.forEach((input) => {
      const togglePassword = input.parentElement.querySelector('.toggle-password');

      input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
        if (togglePassword) {
          togglePassword.style.display = 'block';
        }
      });

      input.addEventListener('blur', () => {
        if (input.value === '') {
          input.parentElement.classList.remove('focused');
          if (togglePassword) {
            togglePassword.style.display = 'none';
          }
        }
      });
    });
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Four | Amie
        </a>

        <div className={`nav__menu ${navMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                A Amie
              </a>
            </li>
            <li className="nav__item">
              <a href="#serviços" className="nav__link">
                Serviços
              </a>
            </li>
          </ul>

          <div className={`login-form-mobile ${loginFormOpen ? 'open' : ''}`}>
            <form action="" id="formvalidate">
              <div className="input-group">
                <label className="palceholder" htmlFor="userName">
                  E-mail
                </label>
                <input
                  className="form-control"
                  name="userName"
                  id="userName"
                  type="text"
                  placeholder=""
                />
                <span className="lighting"></span>
              </div>
              <div className="input-group">
                <label className="placeholder" htmlFor="userPassword">
                  Senha
                  <span
                    className="toggle-password"
                    onClick={() => handlePasswordVisibility('userPassword')}
                  >
                    {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                  </span>
                </label>
                <input
                  className="form-control"
                  name="userPassword"
                  id="userPassword"
                  type={showPassword ? 'text' : 'password'}
                  placeholder=""
                  onFocus={(e) => handlePasswordVisibility(e)}
                  onBlur={(e) => handlePasswordVisibility(e, 'userPassword')}
                />
              </div>

              <button type="submit" id="login">
                Entrar
              </button>

              <div className="clearfix supporter">
                <div className="pull-left remember-me">
                  <input id="rememberMe" type="checkbox" />
                  <label htmlFor="rememberMe">Continuar Logado </label>
                </div>
                <a className="forgot pull-right" href="#">
                  Esqueci a Senha
                </a>
              </div>
            </form>
          </div>

          <RiCloseLine className="ri-close-line nav__close" id="nav-close" onClick={toggleNavMenu} />
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleNavMenu}>
          <RiMenu3Line />
        </div>

        <div className={`login-container ${loginFormOpen ? 'open' : ''}`}>
          <button className="login-btn" onClick={toggleLoginForm}>
            Login
          </button>
          <div className="login-form">
            <form action="" id="formvalidate2">
              <div className="input-group">
                <label className="palceholder" htmlFor="userName">
                  E-mail
                </label>
                <input
                  className="form-control"
                  name="userName"
                  id="userName2"
                  type="text"
                  placeholder=""
                />
                <span className="lighting"></span>
              </div>
              <div className="input-group">
                <label className="placeholder" htmlFor="userPassword2">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    Senha
                    <span className="toggle-password" style={{ marginLeft: '8px' }}>
                      {showPassword2 ? <RiEyeOffLine /> : <RiEyeLine />}
                    </span>
                  </div>
                </label>
                <input
                  className="form-control"
                  name="userPassword"
                  id="userPassword2"
                  type={showPassword2 ? 'text' : 'password'}
                  placeholder=""
                  onFocus={(e) => handlePasswordVisibility2(e)}
                  onBlur={(e) => handlePasswordVisibility2(e, 'userPassword2')}
                />
              </div>
            


              <button type="submit" id="login2">
                Entrar
              </button>

              <div className="clearfix supporter">
                <div className="pull-left remember-me">
                  <input id="rememberMe2" type="checkbox" />
                  <label htmlFor="rememberMe2">Continuar Logado </label>
                </div>
                <a className="forgot pull-right" href="#">
                  Esqueci a Senha
                </a>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;