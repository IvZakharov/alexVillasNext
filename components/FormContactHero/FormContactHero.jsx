import styles from "./FormContactHero.module.scss";
import TextField from "../../ui/TextField/TextField";

const FormContactHero = ({ hrefLabel }) => {
  return (
    <form className={styles.FormContactHero}>
      <TextField type={'text'} name={'Name'} placeholder={'Your name: '} required/>
      <TextField type={'text'} name={'Phone'} placeholder={'Phone number: '} required/>
      <button type="submit" className={`${styles.button}`}>
        {hrefLabel}
        <div className={styles.arrow}>
          <svg
            width="40"
            height="6"
            viewBox="0 0 40 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 3L35 0.113249V5.88675L40 3ZM0 3.5L35.5 3.5V2.5L0 2.5L0 3.5Z"
              fill="#FF9900"
            />
          </svg>
        </div>
      </button>
    </form>
  );
};

export default FormContactHero;
