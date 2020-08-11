import React from "react";
import styles from "./styles.module.scss";
import moment from "moment";
import cx from "classnames";
import { capitalizeFirstLetter } from "../../../../helpers/capitalizeFirstLetter";

export const SelectedDay = ({ source }) => {
  const { type, temperature, rain_probability, humidity, day } = source;

  const cn = cx(styles.icon, {
    [styles.icon_cloudy]: type === "cloudy",
    [styles.icon_sunny]: type === "sunny",
    [styles.icon_rainy]: type === "rainy",
  });

  const currentDay = moment(day).format("dddd");

  return (
    <>
      <div className={styles.head}>
        <div className={cn}></div>
        <div className={styles.current__date}>
          <p>{capitalizeFirstLetter(currentDay)}</p>
          <span>{moment(day).format("DD MMMM")}</span>
        </div>
      </div>
      <div className={styles.current__weather}>
        <p className={styles.temperature}>{temperature}</p>
        <p className={styles.meta}>
          <span className={styles.rainy}>{`${rain_probability}%`}</span>
          <span className={styles.humidity}>{`${humidity}%`}</span>
        </p>
      </div>
    </>
  );
};
