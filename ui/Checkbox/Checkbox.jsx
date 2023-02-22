import styles from "./Checkbox.module.scss";
import React from "react";
import { useForm } from "react-hook-form";

const Checkbox = ({ text, id, name }) => {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleChange = (e) => {
    console.log(e.target.name);
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="checkbox"
        onChange={handleChange}
        className={styles.checkbox}
        id={id}
        name={name}
      />
      <label htmlFor={id} className={"text"}>
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
