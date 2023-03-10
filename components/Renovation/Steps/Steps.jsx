import styles from "./Steps.module.scss";
import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
const RenovationSteps = ({ data, imageBefore, imageAfter, youtube, locale }) => {
  const textRu = {
    after: "После",
    before: "До",
  }
  
  const textEn = {
    after: "After",
    before: "Before",
  }
  //console.log(youtube)
  return (
    <section className={styles.steps}>
      <div className={"container"}>
        <h2 className={"h2 mb-8 md:mb-12"}>
          <span>{data.attributes?.title}</span>
        </h2>

        <div className={"grid md:grid-cols-6 xl:grid-cols-12"}>
          <div className={`${styles.stairsIcon} xl:col-span-4`}>
            <Image
              src={"/images/icons/steps.svg"}
              alt={"steps svg icon"}
              width={70}
              height={70}
            />
          </div>

          <div className={'md:col-span-5 xl:col-span-6'}>
            <p className={"text mb-9 md:pr-48 xl:pr-12"}>
              {parse(data.attributes?.description)}
            </p>
            <div className={"grid grid-cols-2 md:grid-cols-4"}>
              {data.attributes?.Checks && data.attributes.Checks.map((obj)=>(
                <div className={"mb-8"} key={obj.id}>
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
                  <h4 className={"text-white uppercase textSmall"}>
                    {parse(obj.label)}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        {data.attributes?.item && data.attributes.item.map((obj)=>(
          <div className={styles.step} key={obj.id}>
            <span className={styles.count}>{obj.Title}</span>
            <h3 className={styles.title}>{obj.subTitle}</h3>
            <p className={styles.text}>
              {obj.description}
            </p>
            {obj.Cheks.length != 0 ? (
              <ul className={styles.servicesList}>
                {obj.Cheks.map((chek, i)=>(
                  <li key={i}>{parse(chek.label)}</li>
                ))}
              </ul>
            ) : (
              ""
              // <div className={"grid md:grid-cols-2"}>
              //   <Renovation youtubeLinks={youtube.attributes?.YouTubeUrl} locale={locale} />
              // </div>
            )}
          </div>
        ))}
       
      </div>
    </section>
  );
};

export default RenovationSteps;
