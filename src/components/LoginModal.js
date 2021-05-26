import React, { useState } from 'react';

import style from '../css/LoginModal.module.css';

const LoginModal = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={`form-group ${style.modalContainer}`}>
      <h2 className={style.loginHeading}>Logga in</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type='email'
          className={`form-control ${style.input}`}
          required
          placeholder='E-post'
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          className={`form-control`}
          required
          placeholder='Lösenord'
        />
        <button type='submit' className={`btn ${style.loginBtn}`}>
          Logga in
        </button>
      </form>
      <p className={style.regText}>Inte medlem än? Registrera dig här.</p>
    </div>
  );
};

export default LoginModal;
