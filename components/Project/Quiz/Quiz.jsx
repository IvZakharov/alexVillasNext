import styles from "./Quiz.module.scss";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Checkbox from "../../../ui/Checkbox/Checkbox";
import Radio from "../../../ui/Radio/Radio";
import TextField from "../../../ui/TextField/TextField";
import Range from "../../../ui/Range/Range";

const inputs = [
  {
    id: 0,
    title: "С какой целью планируете покупку недвижимости?",
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
        label: "Аппартаменты",
        name: "property",
        id: "apartments",
        checked: false,
      },
    ],
  },
  {
    id: 2,
    title: "Строящийся или готовый?",
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

const Quiz = ({ title }) => {
  const [step, setStep] = React.useState(0);

  const nextStep = () => {
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
          <h2 className={"h2 mb-4"}>
            <span>
              ИНТЕРЕСУЕТ <br /> НЕДВИЖИМОСТЬ
            </span>{" "}
            <br /> НА БАЛИ?
          </h2>
          <p className={"text"}>
            Ответьте на <span>5 вопросов</span> и получите <br />
            <span>скидку 10.000$</span> при оплате полностью
          </p>
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
            <form className={styles.form}>
              {inputs &&
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
                  width="41"
                  height="7"
                  viewBox="0 0 51 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.0025 3.75L45.0025 0.863249V6.63675L50.0025 3.75ZM0 4.25H45.5025V3.25H0V4.25Z"
                    fill="#FF9900"
                  />
                </svg>
              </i>
              <span>Назад</span>
            </button>

            <button className={styles.buttonNext} onClick={nextStep}>
              <span>
                {step === inputs.length - 1 ? "Получить подборку" : "Далее"}
              </span>
              <i>
                <svg
                  width="41"
                  height="7"
                  viewBox="0 0 51 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.0025 3.75L45.0025 0.863249V6.63675L50.0025 3.75ZM0 4.25H45.5025V3.25H0V4.25Z"
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
