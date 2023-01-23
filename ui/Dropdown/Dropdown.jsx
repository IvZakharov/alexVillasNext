import React, { useEffect, useState } from "react";
import styles from "./Dropdown.module.scss";
import Link from "next/link";

const Dropdown = ({lable, list}) => {
  return (
    <div className={styles.dropdown}>
      <span className={`${styles.lable} text`}>
        {lable}
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.42871 0.5L10.0001 9.5L18.5716 0.5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <ul>
        {list && list.map((obj, i) => (
          <li key={i}>
            <Link href={obj.link}>
              {obj.name}
            </Link>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Dropdown;