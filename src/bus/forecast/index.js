import React from "react";
import { ForecastFilter, SelectedDay, Week } from "./components";
import { useForecastFetch, useForecastWeek } from "./hooks";

export const Forecast = () => {
  const { isFetching, data, error } = useForecastFetch();
  const { weekData } = useForecastWeek();

  const errorMessage = error.status === 404 && <p>Not found!</p>;

  const loader = isFetching && <p>Loading data from API...</p>;
  return (
    <>
      {errorMessage}
      {loader}
      <h1>Прогноз погоды</h1>
      <ForecastFilter />
      <SelectedDay source={data} />
      <Week weekSource={weekData} />
    </>
  );
};
