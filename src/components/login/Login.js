import React, { useState } from 'react';

import { AuthContext } from '../../App';
import style from '../../css/Login.module.css';

export const Login = () => {
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

  return (
    <div className={`form-group ${style.modalContainer}`}>
      <h2 className={style.loginHeading}>Logga in</h2>
      <form>
        <label htmlFor='email'>
          <input
            type='text'
            value={data.email}
            onChange={handleInputChange}
            name='email'
            id='email'
            className={`form-control ${style.input}`}
            required
            placeholder='E-post'
          />
        </label>
        <label htmlFor='password'>
          <input
            type='password'
            value={data.password}
            onChange={handleInputChange}
            name='password'
            id='password'
            className={`form-control`}
            required
            placeholder='Lösenord'
          />
        </label>

        {data.errorMessage && (
          <span className='form-error'>{data.errorMessage}</span>
        )}

        <button
          disabled={data.isSubmitting}
          className={`btn ${style.loginBtn}`}
        >
          {data.isSubmitting ? 'Loading...' : 'Login'}
        </button>
      </form>
      <p className={style.regText}>Inte medlem än? Registrera dig här.</p>
    </div>
  );
};

export default Login;
