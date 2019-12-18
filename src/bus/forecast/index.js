import React from "react";
import { useForecastFetch } from "./hooks/useForecastFetch";

export const Forecast = () => {
  const { isFetching, data, error } = useForecastFetch();

  const errorMessage = error.status === 404 && <p>Not found!</p>;

  const loader = isFetching && <p>Loading data from API...</p>;

  const day =
    isFetching ||
    data.map(
      ({ rain_probability, humidity, day, temperature, type, objectId }) => (
        <li key={objectId}>{humidity}</li>
      )
    );
  return (
    <>
      <h1>Прогноз погоды</h1>
      {errorMessage}
      {loader}
      <ul>{day}</ul>
    </>
  );
};
