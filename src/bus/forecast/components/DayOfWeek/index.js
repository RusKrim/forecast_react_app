import React from "react";
import styles from "./styles.module.scss";
import moment from "moment";
import "./style.scss";
import cx from "classnames";
export const DayOfWeek = ({ source }) => {
  const { day, temperature, type } = source;

  return (
    <>
      <div className={styles.day}>
        <p>{moment(day).format("dddd")}</p>
        <div className={cx(`day-${type}`)}></div>
        <span>{temperature}</span>
      </div>
    </>
  );
};
