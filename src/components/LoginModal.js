import style from '../css/LoginModal.module.css';

const LoginModal = () => {
  return (
    <div className={`form-group`}>
      <h2>Logga in</h2>
      <form>
        <label htmlFor='exampleInputEmail'>E-mail</label>
        <input type='email' className={`form-control`} required />
        <label htmlFor=''>Lösenord</label>
        <input type='password' className={`form-control`} required />
        <button className={`btn ${style.button}`}>Logga in</button>
      </form>
      <p>Inte medlen än? Registrera dig här</p>
    </div>
  );
};

export default LoginModal;
