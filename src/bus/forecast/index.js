import React from "react";
import { useSelector } from "react-redux";
import { ForecastFilter, SelectedDay, Week } from "./components";
import { useForecastFetch } from "../forecast/hooks";

export const Forecast = () => {
  const { isFetching, error } = useForecastFetch();
  const { selectedDay } = useSelector((state) => state.forecast);
  const errorMessage = error.status === 404 && <p>Not found!</p>;

  const loader = isFetching && <p>Loading data from API...</p>;
  const selectedDayJSX = selectedDay && <SelectedDay source={selectedDay} />;

  return (
    <>
      {errorMessage}
      {loader}
      <ForecastFilter />
      {selectedDayJSX}
      <Week />
    </>
  );
};
