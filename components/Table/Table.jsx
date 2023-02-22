import styles from "./Table.module.scss";
import React from "react";

const Table = ({ tableData }) => {
  return (
    <div className={styles.table}>
      <div className={styles.tableWrap}>
        {tableData &&
          tableData.map((obj) => (
            <div key={obj.id} className={styles.row}>
              <p>{obj.name}</p>
              <p>{obj.firstValue}</p>
              <p>{obj.secondValue}</p>
              {/*<p>{obj.thirdValue}</p>*/}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Table;
