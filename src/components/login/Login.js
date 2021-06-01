import style from '../../css/Login.module.css';
import React, { useState, useContext } from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../App';
import { UserContext } from '../../contexts/UserContext';

export const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const initialState = {
    email: '',
    password: '',
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    fetch(`/api/v1/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: data.email,
        password: data.password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((resJson) => {
        dispatch({
          type: 'LOGIN',
          payload: resJson,
        });
      })
      .catch((error) => {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: error.message || error.statusText,
        });
      });
  };

  return (
    <div className={`form-group ${style.modalContainer}`}>
      <h2 className={style.loginHeading}>Logga in</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          className={`form-control ${style.input}`}
          value={data.email}
          onChange={handleInputChange}
          name='email'
          id='email'
          placeholder='E-postadress'
        />
        <input
          type='password'
          className={`form-control ${style.input}`}
          value={data.password}
          onChange={handleInputChange}
          name='password'
          id='password'
          placeholder='Lösenord'
        />

        {data.errorMessage && <p className='form-error'>{data.errorMessage}</p>}

        <button
          className={`btn ${style.loginBtn}`}
          disabled={data.isSubmitting}
        >
          {data.isSubmitting ? 'Laddar...' : 'Logga in'}
        </button>
      </form>

      <p className={style.regText}>
        <BrowserRouter>
          <Switch>
            <Link to='/registration' className={`${style.linkStyle}`}>
              Inte medlem än? Registrera dig här.
            </Link>
          </Switch>
        </BrowserRouter>
      </p>
    </div>
  );
};
export default Login;
