import styles from "./PropertiesGallery.module.scss";
import React from "react";
import Image from "next/image";
import Fancybox from "../Fancybox/Fancybox";
import { useRouter } from "next/router";
import parse from "html-react-parser";

const PropertiesGallery = ({ properties }) => {
  const router = useRouter();
  const { locale } = router;
  return (
    <section className={styles.propertiesGallery}>
      <div className={"container"}>
        <div className={"md:grid md:grid-cols-2 mb-7 lg:mb-12"}>
          <h2 className={"h2 mb-4 md:mb-0"}>{locale === 'ru' ? "НЕДВИЖИМОСТЬ" : "INSPIRING REAL ESTATE"}</h2>
          <p className={"text"}>
            {locale === 'ru' ? <>которая будет вдохновлять <br /> вас <span> каждый день</span></> : "for everyday life"}
          </p>
        </div>

        <Fancybox options={{ infinite: true }}>
          <div className={"grid grid-cols-2 xl:grid-cols-4 gap-3"}>
            {properties &&
              properties.map((property) => (
                <div key={property.id} className={styles.item}>
                  <h3 className={styles.title}>{property.title}</h3>
                  {property.gallery.data &&
                    property.gallery.data.map((obj) => (
                      <div
                        className={styles.image}
                        key={obj.id}
                        data-fancybox="gallery"
                        data-src={obj.attributes.url}
                      >
                        <Image
                          alt={
                            obj.attributes.caption
                              ? obj.attributes.caption
                              : "Alex Villas Complex"
                          }
                          src={obj.attributes.url}
                          quality={80}
                          fill
                          blurDataURL={obj.attributes.placeholder}
                          placeholder={"blur"}
                          sizes="(max-width: 768px) 50vw,
                                 (max-width: 1200px) 25vw,
                                 25vw"
                          style={{
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    ))}
                </div>
              ))}
          </div>
        </Fancybox>
      </div>
    </section>
  );
};

export default PropertiesGallery;
