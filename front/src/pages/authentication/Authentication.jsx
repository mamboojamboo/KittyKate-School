import React, {
  useState, useEffect, useContext, Fragment
} from 'react';
import { Link, Redirect } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import useLocalStorage from '../../hooks/useLocalStorage';
import { CurrentUserContext } from '../../contexts/currentUser';
import BackendErrorMessages from '../../components/backendErrorMessages/BackendErrorMessages';
import './styles/authentication.css';

const Authentication = (props) => {
  const isLogin = props.match.path === '/signin';
  const pageTitle = isLogin ? 'Вход' : 'Регистрация';
  const descriptionLink = isLogin ? '/signup' : '/signin';
  const descriptionText = isLogin ? 'Еще не зарегистрировались?' : 'Уже есть аккаунт?';
  const apiUrl = isLogin ? '/users/login' : '/users';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl);
  const [, setToken] = useLocalStorage('token');
  const [, setCurrentUserState] = useContext(CurrentUserContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = isLogin
      ? { email, password }
      : { email, password, username };
    doFetch({
      method: 'POST',
      data: {
        user
      }
    });
  };

  useEffect(() => {
    if (!response) {
      return;
    }
    setToken(response.user.token);
    setIsSuccessfullSubmit(true);
    setCurrentUserState((state) => ({
      ...state,
      isLoggedIn: true,
      isLoading: false,
      currentUser: response.user
    }));
  }, [response, setToken, setCurrentUserState]);

  if (isSuccessfullSubmit) {
    return <Redirect to='/'/>;
  }

  return (
    <div className='auth'>
      <form className='auth__form' onSubmit={handleSubmit}>

        <h1 className='auth__page-title'>{pageTitle}</h1>
        <Link to={descriptionLink} className='auth__link-to-signup'>
          {descriptionText}
        </Link>
        {error && <BackendErrorMessages backendErrors={error.errors}/>}

        {!isLogin && (
          <Fragment>
            <label className='auth__user-name-label'>
              <span id='errorName'></span>
            </label>
            <input
              className='auth__user-name-input'
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Fragment>
        )}

        <label className='auth__email-label'>
          <span id='errorEmail'></span>
        </label>
        <input
          className='auth__email-input'
          type='email'
          placeholder='Email@email.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className='auth__password-label'>
          <span id='errorPassword'></span>
        </label>
        <input
          className='auth__password-input'
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className='auth__button'
          type='submit'
          disabled={isLoading}
        >
          {pageTitle}
        </button>

      </form>
    </div>
  );
};

export default Authentication;
