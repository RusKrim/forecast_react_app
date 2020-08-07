import React from "react";
import { ForecastFilter, SelectedDay, Week } from "./components";
import { useForecastFetch, useForecastWeek } from "./hooks";
import { useSelectedDay } from "./hooks/useSelectedDay";

export const Forecast = () => {
  const { isFetching, error } = useForecastFetch();
  const { selectedDayItem, setSelectedDay } = useSelectedDay();
  const { weekData, data } = useForecastWeek();

  const errorMessage = error.status === 404 && <p>Not found!</p>;

  const loader = isFetching && <p>Loading data from API...</p>;

  const currentDayJSX = selectedDayItem && (
    <SelectedDay source={selectedDayItem} />
  );
  return (
    <>
      {errorMessage}
      {loader}
      <h1>Прогноз погоды</h1>
      <ForecastFilter />
      {currentDayJSX}
      <Week weekSource={weekData} data={data} setSelect={setSelectedDay} />
    </>
  );
};
