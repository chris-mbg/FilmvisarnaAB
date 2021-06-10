import { NavLink } from 'react-router-dom';
import style from '../css/NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={`container ${style.mainContainer}`}>
      <h1 className={style.notFoundHeading}>
        404! Sidan kunde tyvärr inte hittas...
      </h1>
      <p className={style.paraText}>
        Det kan bero på ett stavfel eller att sidan inte finns längre. <br />
        Gå tillbaka till startsidan.
      </p>
      <NavLink to='/' className={`${style.linkStyle}`}>
        <button className={`btn ${style.homeBtn}`}>Start</button>
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
