import styles from "../../css/ConfirmModal.module.css";

const ConfirmModal = () => {
  return (
    <div className={styles.modal_container}>
      <h2 className={styles.header}>Biljetter bokade!</h2>

      <div className={styles.button_confirm_wrapper}>
        <button className={`${styles.button_confirm} btn`}>OK</button>
      </div>
      {/* /.button_wrapper */}
    </div>
  );
};

export default ConfirmModal;
