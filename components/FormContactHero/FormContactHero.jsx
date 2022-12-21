import styles from './FormContactHero.module.scss'

const FormContactHero = ({hrefLabel}) => {
    return (
        <form className={styles.FormContactHero}>
            <input type="text" name="Name" placeholder='Your name: '/>
            <input type="text" name="Phone number" placeholder='Phone number: '/>
            <div className={styles.buttonBlock}>
                <button type="submit" className={styles.button}>{hrefLabel}</button>
                <div className={styles.arrow}>
                    <svg width="76" height="11" viewBox="0 0 76 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="5.5" x2="73" y2="5.5" stroke="#FF9900"/>
                        <path d="M76 5.5L65.5 10.2631V0.73686L76 5.5Z" fill="#FF9900"/>
                    </svg>
                </div>
            </div>

        </form>
    );
};

export default FormContactHero;