import React from "react";
import styles from "./styles.module.scss";

export const ForecastFilter = () => {
  return (
    <>
      <div className={styles.filter}>
        <span className={styles.checkbox}>Облачно</span>
        <span className={`${styles.checkbox} `}>Солнечно</span>
        <p className={styles.custom__input}>
          <label htmlFor="min-temperature">Минимальная температура</label>
          <input id="min-temperature" type="text" />
        </p>
        <p className={styles.custom__input}>
          <label htmlFor="min-temperature">Максимальная температура</label>
          <input id="max-temperature" type="text" />
        </p>
        <button>Отфильтровать</button>
      </div>
    </>
  );
};
