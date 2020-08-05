import React from "react";
import styles from "./styles.module.scss";
import { DayOfWeek } from "../DayOfWeek";
import { useForecastFetch } from "../../hooks";

export const Week = ({ weekSource }) => {
  const { isFetching } = useForecastFetch();
  const weekEl = weekSource.map((data) => (
    <DayOfWeek key={data.objectId} source={data} />
  ));

  const weekJSX =
    isFetching || weekEl.length ? (
      <div className={styles.forecast}>{weekEl}</div>
    ) : (
      <h1>По заданным критериям ничего нет</h1>
    );

  return <>{weekJSX}</>;
};
