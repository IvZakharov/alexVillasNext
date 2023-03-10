import styles from "./FormContactHero.module.scss";
import TextField from "../../ui/TextField/TextField";
import parse from "html-react-parser";
import { useRouter } from "next/router";

const FormContactHero = ({ hrefLabel, arrow }) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <form className={styles.FormContactHero}>
      <TextField type={'text'} name={'Name'} placeholder={locale === 'ru' ? 'Ваше Имя: ': 'Your name:'} required/>
      <TextField type={'text'} name={'Phone'} placeholder={locale === 'ru' ? 'Телефон/WhatsApp: ' : 'Phone/WhatsApp:'} required/>
      <button type="submit" className={`${styles.button}`}>
        <p>{parse(hrefLabel)}</p>
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
