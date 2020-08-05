import React from "react";
import styles from "./styles.module.scss";
import moment from "moment";

export const SelectedDay = ({ source }) => {
  const selectedDay = source[0];

  const loader = "Загрузка...";
  return (
    <>
      <div className={styles.head}>
        <div className={`${styles.icon} ${styles.cloudy}`}></div>
        <div className={styles.current__date}>
          <p>{selectedDay ? moment(selectedDay.day).format("dddd") : loader}</p>
          <span>
            {selectedDay ? moment(selectedDay.day).format("DD MMMM") : loader}
          </span>
        </div>
      </div>
      <div className={styles.current__weather}>
        <p className={styles.temperature}>
          {selectedDay ? selectedDay.temperature : loader}
        </p>
        <p className={styles.meta}>
          <span className={styles.rainy}>
            {selectedDay ? `${selectedDay.rain_probability}%` : loader}
          </span>
          <span className={styles.humidity}>
            {selectedDay ? `${selectedDay.humidity}%` : loader}
          </span>
        </p>
      </div>
    </>
  );
};
