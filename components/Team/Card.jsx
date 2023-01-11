import styles from "./Team.module.scss";
import Image from "next/image";
import { youtubeParser } from "../../utils/youtubeParser";
import React from "react";
import Link from "next/link";

const Card = ({
  name,
  position,
  imageUrl,
  description,
  instagramLink,
  linkedinLink,
}) => {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image
          alt={"Alex Villas Youtube placeholder"}
          src={imageUrl}
          quality={80}
          fill
          priority
          sizes="(max-width: 576px) 50vw,
              (max-width: 1200px) 33vw,
              25vw"
          style={{
            objectFit: "contain",
            objectPosition: "bottom",
          }}
        />
      </div>
      <div className={styles.info}>
        <h3 className={`${styles.name} mb-4 md:mb-6`}>{name}</h3>
        <p className={"text mb-4 md:mb-7 text-center"}>{position}</p>
        <p className={"text mb-4 md:mb-7 text-center"}>{description}</p>
        <ul className={styles.socials}>
          {instagramLink && (
            <li>
              <Link href={instagramLink}>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_333_529)">
                    <path
                      d="M29.333 7.3335H14.6663C10.6163 7.3335 7.33301 10.6167 7.33301 14.6668V29.3335C7.33301 33.3836 10.6163 36.6668 14.6663 36.6668H29.333C33.3831 36.6668 36.6663 33.3836 36.6663 29.3335V14.6668C36.6663 10.6167 33.3831 7.3335 29.333 7.3335Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 27.5C25.0376 27.5 27.5 25.0376 27.5 22C27.5 18.9624 25.0376 16.5 22 16.5C18.9624 16.5 16.5 18.9624 16.5 22C16.5 25.0376 18.9624 27.5 22 27.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30.25 13.75V13.751"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_333_529">
                      <rect width="44" height="44" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
          )}

          {linkedinLink && (
            <li>
              <Link href={linkedinLink}>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_333_534)">
                    <path
                      d="M32.9997 7.3335H10.9997C8.97463 7.3335 7.33301 8.97512 7.33301 11.0002V33.0002C7.33301 35.0252 8.97463 36.6668 10.9997 36.6668H32.9997C35.0247 36.6668 36.6663 35.0252 36.6663 33.0002V11.0002C36.6663 8.97512 35.0247 7.3335 32.9997 7.3335Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.667 20.1665V29.3332"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.667 14.6665V14.6848"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 29.3332V20.1665"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M29.3333 29.3332V23.8332C29.3333 22.8607 28.947 21.9281 28.2594 21.2404C27.5718 20.5528 26.6391 20.1665 25.6667 20.1665C24.6942 20.1665 23.7616 20.5528 23.0739 21.2404C22.3863 21.9281 22 22.8607 22 23.8332"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_333_534">
                      <rect width="44" height="44" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </article>
  );
};

export default Card;
