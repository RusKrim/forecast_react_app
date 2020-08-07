import React from "react";
import styles from "./styles.module.scss";
import moment from "moment";
import cx from "classnames";

export const SelectedDay = ({ source }) => {
  const { type, temperature, rain_probability, humidity, day } = source;
  const selectedDay = source;

  const cn = cx(styles.icon, {
    [styles.icon_cloudy]: type === "cloudy",
    [styles.icon_sunny]: type === "sunny",
    [styles.icon_rainy]: type === "rainy",
  });

  const loader = "Загрузка...";
  return (
    <>
      <div className={styles.head}>
        <div className={cn}></div>
        <div className={styles.current__date}>
          <p>{selectedDay ? moment(temperature).format("dddd") : loader}</p>
          <span>{selectedDay ? moment(day).format("DD MMMM") : loader}</span>
        </div>
      </div>
      <div className={styles.current__weather}>
        <p className={styles.temperature}>
          {selectedDay ? temperature : loader}
        </p>
        <p className={styles.meta}>
          <span className={styles.rainy}>
            {selectedDay ? `${rain_probability}%` : loader}
          </span>
          <span className={styles.humidity}>
            {selectedDay ? `${humidity}%` : loader}
          </span>
        </p>
      </div>
    </>
  );
};
