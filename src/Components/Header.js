import React, { useState, useEffect } from 'react';
import { RiEyeLine, RiEyeOffLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { FaLock } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useForm } from 'react-hook-form';


const Header = () => {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const { register, handleSubmit } = useForm();

  const toggleNavMenu = () => {
    setNavMenuOpen(!navMenuOpen);
  };

  const toggleLoginForm = () => {
    setLoginFormOpen(!loginFormOpen);
  };


  const [visible, setVisible] = useState(false);

  function HandleIsVisible() {
    setVisible(!visible);
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

            <div className="input-group flex flex-row items-center justify-center rounded-md bg-zinc-200 py-2 text-zinc-400">
              
              <input
                placeholder="Senha"
                className="form-control bg-zinc-200 text-zinc-500 focus:outline-none"
                type={visible ? "text" : "password"}
                {...register("password")}
              />
            
              <span className="password-toggle cursor-pointer transition" onClick={HandleIsVisible}>
                {visible ? (
                  <AiFillEye size={20} className="mr-2" />
                ) : (
                  <AiFillEyeInvisible size={20} className="mr-2" />
                )}
              </span>
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
              <div className="input-group flex flex-row items-center justify-center rounded-md bg-zinc-200 py-2 text-zinc-400">
  
                <input
                  placeholder="Senha"
                  className="bg-zinc-200 text-zinc-500 focus:outline-none"
                  type={visible ? "text" : "password"}
                  {...register("password")}
                />
                <span className="password-toggle cursor-pointer transition" onClick={HandleIsVisible}>
                  {visible === false ? (
                    <AiFillEye size={20} className="mr-2" />
                  ) : (
                    <AiFillEyeInvisible size={20} className="mr-2" />
                  )}
                </span>
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