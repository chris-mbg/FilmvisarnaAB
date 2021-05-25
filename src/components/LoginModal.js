import style from '../css/LoginModal.module.css';

const LoginModal = () => {
  return (
    <div className={`form-group ${style.modalContainer}`}>
      <h2 className={style.loginHeading}>Logga in</h2>
      <form>
        <input
          type='email'
          className={`form-control ${style.input}`}
          required
          placeholder='E-post'
        />
        <input
          type='password'
          className={`form-control`}
          required
          placeholder='Lösenord'
        />
        <button type='submit' className={`btn ${style.loginBtn}`}>
          Logga in
        </button>
      </form>
      {/* <NavLink
        exact
        to='/register'
        className={`${style.regText}`}
        onClick={() => props.setShowLoginModal(false)}
      >
        Inte medlen än? Registrera dig här
      </NavLink> */}
      <p className={style.regText}>Inte medlen än? Registrera dig här</p>
    </div>
  );
};

export default LoginModal;
