import React, { useContext, Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { CurrentUserContext } from '../../contexts/currentUser';
import logoImage from './img/logo.png';
import './styles/topBar.css';

const TopBar = () => {
  const [currentUserState] = useContext(CurrentUserContext);
  return (
    <header className='header'>
      <nav className='header__nav'>
        <div className='header__logo-wrapper'>
          <Link to='/'>
            <img
              className='header__logo-img'
              src={logoImage}
              alt='KittyKate-School-logo'
            />
          </Link>
          <Link to='/' className='header__logo-text'>
            Школа иностранных языков<br/>Китти-Кейт
          </Link>
        </div>

        <ul className='header__menu'>
          <li>
            <NavLink to='/' className='header__menu-link' exact>
              Главная
            </NavLink>
          </li>

          <li>
            <NavLink to='/courses' className='header__menu-link'>
              Курсы
            </NavLink>
          </li>

          {currentUserState.isLoggedIn === false && (
            <Fragment>
              <li>
                <NavLink to='/signin' className='header__menu-link'>
                  Вход
                </NavLink>
              </li>
              <li>
                <NavLink to='/signup' className='header__menu-link'>
                  Регистрация
                </NavLink>
              </li>
            </Fragment>
          )}

          {currentUserState.isLoggedIn && (
              <li>
                <NavLink to={`/profiles/${currentUserState.currentUser.username}`} className='header__menu-link'>
                  {currentUserState.currentUser.username}
                </NavLink>
              </li>
          )}

        </ul>
      </nav>
    </header>
  );
};

export default TopBar;
