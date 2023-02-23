import styles from "./Quiz.module.scss";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useForm } from "react-hook-form";
import Checkbox from "../../../ui/Checkbox/Checkbox";
import Radio from "../../../ui/Radio/Radio";
import TextField from "../../../ui/TextField/TextField";
import Range from "../../../ui/Range/Range";
import { useRouter } from "next/router";

const inputs = [
  {
    id: 0,
    title: "Для чего вам недвижимость на Бали?",
    fields: [
      { type: "checkbox", label: "Для жизни", name: "live", id: "live" },
      {
        type: "checkbox",
        label: "Для инвестиций",
        name: "invest",
        id: "invest",
      },
      {
        type: "checkbox",
        label: "Рассмотрю все варианты",
        name: "all",
        id: "all",
      },
    ],
  },
  {
    id: 1,
    title: "Выберите вид недвижимости",
    fields: [
      {
        type: "radio",
        label: "Виллы",
        name: "property",
        id: "villas",
        checked: true,
      },
      {
        type: "radio",
        label: "Апартаменты",
        name: "property",
        id: "apartments",
        checked: false,
      },
    ],
  },
  {
    id: 2,
    title: "Строящийся или готовый объект?",
    fields: [
      {
        type: "radio",
        label: "Строящийся",
        name: "status",
        id: "constructed",
        checked: true,
      },
      {
        type: "radio",
        label: "Готовый",
        name: "status",
        id: "finished",
        checked: false,
      },
    ],
  },
  {
    id: 3,
    title: "На какой бюджет вы рассчитываете?",
    fields: [
      { type: "range", min: 0, max: 500000, defaultValue: 250000, step: 10 },
    ],
  },
  {
    id: 4,
    title:
      "Под ваши параметры подходит несколько проектов. На 1 из них действуют специальные условия до конца месяца!",
    fields: [
      { type: "text", label: "Ваше имя:" },
      { type: "tel", label: "Номер телефона:" },
    ],
  },
];

const inputsEn = [
  {
    id: 0,
    title: "What is your purpose in buying real estate in Bali?",
    fields: [
      { type: "checkbox", label: "for life", name: "live", id: "live" },
      {
        type: "checkbox",
        label: "for investments",
        name: "invest",
        id: "invest",
      },
      {
        type: "checkbox",
        label: "I am interested in any option",
        name: "all",
        id: "all",
      },
    ],
  },
  {
    id: 1,
    title: "Choose the property type:",
    fields: [
      {
        type: "radio",
        label: "villa",
        name: "property",
        id: "villas",
        checked: true,
      },
      {
        type: "radio",
        label: "apartment",
        name: "property",
        id: "apartments",
        checked: false,
      },
    ],
  },
  {
    id: 2,
    title: "Ready-made or under construction?",
    fields: [
      {
        type: "radio",
        label: "ready-made",
        name: "status",
        id: "constructed",
        checked: true,
      },
      {
        type: "radio",
        label: "under construction",
        name: "status",
        id: "finished",
        checked: false,
      },
    ],
  },
  {
    id: 3,
    title: "What is your budget?",
    fields: [
      { type: "range", min: 0, max: 500000, defaultValue: 250000, step: 10 },
    ],
  },
  {
    id: 4,
    title:
      "We have a couple of projects for you. One of them is on the special offer this month!",
    fields: [
      { type: "text", label: "Your name:" },
      { type: "tel", label: "Your phone number:" },
    ],
  },
];

const Quiz = ({ title }) => {
  const router = useRouter();
  const { locale } = router;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [formData, setFormData] = React.useState([]);
  const [step, setStep] = React.useState(0);
  const [validate, setValidate] = React.useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      setFormData((prev) => [...prev, value]);
    }
  };

  React.useEffect(() => {
    setValidate(true);
  }, [formData]);

  console.log(formData);

  const nextStep = () => {
    if (formData.length === 0) {
      setValidate(false);
      return;
    }

    if (step === inputs.length - 1) {
      console.log("send");
    } else {
      setStep((prev) => prev + 1);
    }
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <section className={styles.quiz}>
      <div className={"container"}>
        <div className={"mb-8 lg:mb-12"}>
          {locale === "en" ? (
            <h2 className={"h2 mb-4"}>
              <span>
                DO YOU WANT <br /> TO INVEST
              </span>{" "}
              <br /> IN BALI?
            </h2>
          ) : (
            <h2 className={"h2 mb-4"}>
              <span>
                ИНТЕРЕСУЕТ <br /> НЕДВИЖИМОСТЬ
              </span>{" "}
              <br /> НА БАЛИ?
            </h2>
          )}

          {locale === "en" ? (
            <p className={"text"}>
              Answer <span>5 questions</span> and get <br />
              <span>$10,000 discount</span> on full payment
            </p>
          ) : (
            <p className={"text"}>
              Ответьте на <span>5 вопросов</span> и получите <br />
              <span>скидку 10.000$</span> при оплате полностью
            </p>
          )}
        </div>

        <div className={"max-w-2xl"}>
          <div className={"mb-10"}>
            <ProgressBar
              completed={step}
              maxCompleted={4}
              isLabelVisible={false}
              height={"5px"}
              baseBgColor={"#292929"}
              bgColor={"#FF9900"}
              transitionDuration={".3s"}
            />
          </div>

          <div className={"mb-10 md:mb-16 relative"}>
            <form
              className={`${styles.form} ${!validate && styles.error}`}
              onSubmit={handleSubmit(onSubmit)}
            >
              {locale === "en" &&
                inputsEn.map((obj, idx) => (
                  <div
                    key={obj.id}
                    className={`${styles.stepContent} ${
                      step === idx ? styles.active : null
                    }`}
                  >
                    <h3 className={styles.title}>{obj.title}</h3>
                    <div className={styles.fields}>
                      {obj.fields &&
                        obj.fields.map((field, idx) => {
                          {
                            switch (field.type) {
                              case "checkbox":
                                return (
                                  <Checkbox
                                    key={idx}
                                    text={field.label}
                                    name={field.name}
                                    id={field.id}
                                    value={field.label}
                                    onChange={(e) => handleChange(e)}
                                  />
                                );
                              case "radio":
                                return (
                                  <Radio
                                    key={idx}
                                    text={field.label}
                                    name={field.name}
                                    id={field.id}
                                    checked={field.checked}
                                  />
                                );
                              case "range":
                                return (
                                  <Range
                                    key={idx}
                                    defaultValue={field.defaultValue}
                                    min={field.min}
                                    max={field.max}
                                    step={field.step}
                                  />
                                );
                              case "text":
                                return (
                                  <div
                                    className={"mb-5 md:w-1/2 xl:w-1/3"}
                                    key={idx}
                                  >
                                    <TextField
                                      placeholder={field.label}
                                      type={"text"}
                                      required={true}
                                    />
                                  </div>
                                );
                              case "tel":
                                return (
                                  <div
                                    className={"mb-5 md:w-1/2 xl:w-1/3"}
                                    key={idx}
                                  >
                                    <TextField
                                      placeholder={field.label}
                                      type={"tel"}
                                      required={true}
                                    />
                                  </div>
                                );
                              default:
                                return null;
                            }
                          }
                        })}
                    </div>
                    {!validate && (
                      <span className={styles.errorMessage}>
                        {locale === "en"
                          ? "Please fill out all required fields"
                          : "Пожалуйста, заполните поля"}
                      </span>
                    )}
                  </div>
                ))}

              {locale === "ru" &&
                inputs.map((obj, idx) => (
                  <div
                    key={obj.id}
                    className={`${styles.stepContent} ${
                      step === idx ? styles.active : null
                    }`}
                  >
                    <h3 className={styles.title}>{obj.title}</h3>
                    <div className={styles.fields}>
                      {obj.fields &&
                        obj.fields.map((field, idx) => {
                          {
                            switch (field.type) {
                              case "checkbox":
                                return (
                                  <Checkbox
                                    key={idx}
                                    text={field.label}
                                    name={field.name}
                                    id={field.id}
                                    value={field.label}
                                    onChange={(e) => handleChange(e)}
                                  />
                                );
                              case "radio":
                                return (
                                  <Radio
                                    key={idx}
                                    text={field.label}
                                    name={field.name}
                                    id={field.id}
                                    checked={field.checked}
                                  />
                                );
                              case "range":
                                return (
                                  <Range
                                    key={idx}
                                    defaultValue={field.defaultValue}
                                    min={field.min}
                                    max={field.max}
                                    step={field.step}
                                  />
                                );
                              case "text":
                                return (
                                  <div
                                    className={"mb-5 md:w-1/2 xl:w-1/3"}
                                    key={idx}
                                  >
                                    <TextField
                                      placeholder={field.label}
                                      type={"text"}
                                      required={true}
                                    />
                                  </div>
                                );
                              case "tel":
                                return (
                                  <div
                                    className={"mb-5 md:w-1/2 xl:w-1/3"}
                                    key={idx}
                                  >
                                    <TextField
                                      placeholder={field.label}
                                      type={"tel"}
                                      required={true}
                                    />
                                  </div>
                                );
                              default:
                                return null;
                            }
                          }
                        })}
                    </div>
                    {!validate && (
                      <span className={styles.errorMessage}>
                        {locale === "en"
                          ? "Please fill out all required fields"
                          : "Пожалуйста, заполните поля"}
                      </span>
                    )}
                  </div>
                ))}
            </form>
          </div>

          <div className={"flex items-center justify-between"}>
            <button
              disabled={!step}
              className={styles.buttonPrev}
              onClick={prevStep}
            >
              <i>
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0245 3.5L6.02448 0.613249V6.38675L11.0245 3.5ZM0.974609 4H6.52448V3H0.974609V4Z"
                    fill="#FF9900"
                  />
                </svg>
              </i>
              {locale === "en" ? <span> Previous </span> : <span> Назад </span>}
            </button>

            <button
              type={step === inputs.length - 1 ? "submit" : "button"}
              className={styles.buttonNext}
              onClick={nextStep}
            >
              {locale === "en" ? (
                <span>
                  {step === inputs.length - 1 ? "Get the offers" : "Next"}
                </span>
              ) : (
                <span>
                  {step === inputs.length - 1 ? "Получить подборку" : "Далее"}
                </span>
              )}

              <i>
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 12 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.0245 3.5L6.02448 0.613249V6.38675L11.0245 3.5ZM0.974609 4H6.52448V3H0.974609V4Z"
                    fill="#FF9900"
                  />
                </svg>
              </i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
