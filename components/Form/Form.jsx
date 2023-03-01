import styles from "./Form.module.scss";
import Button from "../../ui/Button/Button";
import Link from "next/link";
import TextField from "../../ui/TextField/TextField";
import { useRouter } from "next/router";

const Form = ({ fields, submitButtonText }) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <form className={styles.form}>
      {fields &&
        fields.map((obj, idx) => (
          <div className={"mb-6 md:mb-9 w-60 md:w-96"} key={idx}>
            <TextField
              name={obj.name}
              type={obj.type}
              placeholder={obj.placeholder}
              required={obj.required}
            />
          </div>
        ))}
      <div className={"pt-5 flex items-center gap-4 md:gap-8 xl:gap-12"}>
        <Button type={"submit"}>{submitButtonText}</Button>

        <Link href={"#"} className={styles.policyLink}>
          {locale === 'ru' ? "Политика конфиденциальности" : "Privacy Policy" }
        </Link>
      </div>
    </form>
  );
};

export default Form;
