import React from "react";
import styles from "./styles.module.scss";
import { DayOfWeek } from "../DayOfWeek";
import { useSelector } from "react-redux";
import { useForecastFetch, useForecastWeek } from "../../hooks";

export const Week = () => {
  const { isFetching } = useForecastFetch();
  const { weekData } = useForecastWeek();
  const { filteredDays } = useSelector((state) => state.forecast);

  const weekS = !filteredDays.length ? weekData : filteredDays;

  const week = weekS.map((data) => (
    <DayOfWeek key={data.objectId} source={data} />
  ));

  const weekJSX =
    isFetching || week.length ? (
      <div className={styles.forecast}>{week}</div>
    ) : (
      <h1>По заданным критериям ничего нет</h1>
    );

  return <>{weekJSX}</>;
};
