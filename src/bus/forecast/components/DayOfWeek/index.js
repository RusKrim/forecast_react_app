import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import "./style.scss";
import moment from "moment";
import cx from "classnames";
import { forecastActions } from "../../actions";
export const DayOfWeek = ({ source }, { data }) => {
  const dispatch = useDispatch();
  const { selectedDayItem } = useSelector((state) => state.forecast);
  const { day, temperature, type } = source;

  const customClass = cx(styles.icon, {
    [styles.icon_rainy]: type === "rainy",
    [styles.icon_sunny]: type === "sunny",
    [styles.icon_cloudy]: type === "cloudy",
  });
  const dayss = cx(styles.day, {
    [styles.day_selected]: selectedDayItem.day === day,
  });
  //   const days = cx("day", {
  //     day_selected: selectedDayItem.day === day,
  //   });
  const clic = () => {
    dispatch(forecastActions.setSelectedDay(source));
  };

  const cl = cx(styles.day, {});

  return (
    <>
      <div className={dayss} onClick={() => clic()}>
        <p>{moment(day).format("dddd")}</p>
        <div className={customClass}></div>
        <span>{temperature}</span>
      </div>
    </>
  );
};
