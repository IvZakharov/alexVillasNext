import styles from "./Range.module.scss";
import React from "react";

const Range = ({ defaultValue, min, max, step }) => {
  const valueRef = React.useRef(null);
  const [value, setValue] = React.useState(defaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.range}>
      <div className={styles.rangeValue}>
        <span ref={valueRef}> {value} $</span>
      </div>
      <input
        onChange={handleChange}
        type="range"
        className={styles.field}
        min={min}
        max={max}
        defaultValue={defaultValue}
        step={step}
      />
      <div className={"flex justify-between items-center"}>
        <p className={"text"}>{min}</p>
        <p className={"text"}>{max}</p>
      </div>
    </div>
  );
};

export default Range;
