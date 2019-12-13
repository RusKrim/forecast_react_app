import React from "react";
import { useForecastFetch } from "./hooks/useForecastFetch";
import { Title } from "../../common/title";

export const Forecast = () => {
  const { isFetching, data, error } = useForecastFetch();

  const errorMessage = error.status === 404 && <p>Not found!</p>;

  const loader = isFetching && <p>Loading data from API...</p>;

  const list =
    isFetching ||
    data.map(
      ({ rain_probability, humidity, day, temperature, type, objectId }) => (
        <li key={objectId}>{humidity}</li>
      )
    );
  return (
    <>
      <Title>Прогноз погоды</Title>
      {errorMessage}
      {loader}
      <ul>{list}</ul>
    </>
  );
};
