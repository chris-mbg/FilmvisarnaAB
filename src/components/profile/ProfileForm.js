import styles from "../../css/ProfileForm.module.css";
import { Col, Row } from "react-bootstrap";

const ProfileForm = () => {
  return (
    <form className={styles.form}>
      <Row noGutters>
        <Col xs={11} sm={11} md={11} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="firstname">
              Förnamn:
            </label>

            <input
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="text"
              id="firstname"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={1}
          lg={1}
        >
          <i class={`${styles.icon} fas fa-edit`} />
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={11} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="lastname">
              Efternamn:
            </label>

            <input
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="text"
              id="lastname"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={1}
          lg={1}
        >
          <i class={`${styles.icon} fas fa-edit`} />
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={11} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="phone">
              Telefonnummer:
            </label>

            <input
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="tel"
              id="phone"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={1}
          lg={1}
        >
          <i class={`${styles.icon} fas fa-edit`} />
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={11} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="email">
              E-post:
            </label>

            <input
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="email"
              id="email"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={1}
          lg={1}
        >
          <i class={`${styles.icon} fas fa-edit`} />
        </Col>
      </Row>

      <Row noGutters>
        <Col xs={11} sm={11} md={11} lg={11}>
          <div className="form-group">
            <label className="pl-2" htmlFor="password">
              Lösenord:
            </label>

            <input
              autoComplete="off"
              required
              className={`${styles.input} form-control`}
              type="password"
              id="password"
            />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={1}
          sm={1}
          md={1}
          lg={1}
        >
          <i class={`${styles.icon} fas fa-edit`} />
        </Col>
      </Row>
    </form>
  );
};

export default ProfileForm;
