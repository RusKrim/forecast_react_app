import React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import moment from "moment";
import cx from "classnames";
import { useSelectedDay } from "../../hooks";
export const DayOfWeek = ({ source }) => {
  const { setSelectedDay } = useSelectedDay();
  const { selectedDay } = useSelector((state) => state.forecast);
  const { day, temperature, type } = source;

  const iconCn = cx(styles.icon, {
    [styles.icon_rainy]: type === "rainy",
    [styles.icon_sunny]: type === "sunny",
    [styles.icon_cloudy]: type === "cloudy",
  });
  const dayCn = cx(styles.day, {
    [styles.day_selected]: selectedDay.day === day,
  });

  return (
    <>
      <div className={dayCn} onClick={() => setSelectedDay(source)}>
        <p>{moment(day).format("dddd")}</p>
        <div className={iconCn}></div>
        <span>{temperature}</span>
      </div>
    </>
  );
};
