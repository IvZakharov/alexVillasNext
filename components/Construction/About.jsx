import styles from "./Construction.module.scss";
import React from "react";
import parse from "html-react-parser";

const ConstructionAbout = ({data}) => {
  return (
    <section>
      <div className={"container"}>
        <div className={"grid md:grid-cols-3 gap-10"}>
          <h2 className={"h2"}>
            {parse(data.attributes?.title)}
          </h2>

          <div className={"md:col-span-2"}>
            <p className={"text mb-10 md:mb-16"}>
              {parse(data.attributes?.description)}
            </p>

            <div className={"flex flex-wrap gap-10 md:gap-12 mb-10"}>
              {data.attributes?.Cheks && data.attributes.Cheks.map((obj, i)=>(
                <div key={i} className={"md:mb-8"}>
                  <i className={"block mb-5"}>
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 7.13205L6.33333 13.0912L17 1.17285"
                        stroke="#FF9900"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                  <h4 className={"text-white uppercase text-xl"}>
                    {parse(obj.label)}
                  </h4>
                </div>
              ))}
            </div>
            {data.attributes?.Second && (
              <ul className={styles.list}>
                {data.attributes?.Second.map((sec, i)=>(
                  <li key={i}>{sec.label}</li>
                ))}
              </ul>
            )}
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionAbout;
