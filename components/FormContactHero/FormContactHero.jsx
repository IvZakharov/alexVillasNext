import styles from "./FormContactHero.module.scss";
import TextField from "../../ui/TextField/TextField";

const FormContactHero = ({ hrefLabel, arrow }) => {
  return (
    <form className={styles.FormContactHero}>
      <TextField type={'text'} name={'Name'} placeholder={'Ваше Имя: '} required/>
      <TextField type={'text'} name={'Phone'} placeholder={'Телефон: '} required/>
      <button type="submit" className={`${styles.button}`}>
        <p>{hrefLabel}</p>
        {arrow && (
          <div className={styles.arrow}>
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.0245 3.5L6.02448 0.613249V6.38675L11.0245 3.5ZM0.974609 4H6.52448V3H0.974609V4Z" fill="#FF9900"/>
            </svg>
          </div>
        )}

      </button>
    </form>
  );
};

export default FormContactHero;
