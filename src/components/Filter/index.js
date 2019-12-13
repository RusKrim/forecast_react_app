import React from "react";
import "./styles.scss";
export const ForecastFilter = () => {
  //   const { isFetching, data, error } = useForecastFetch();

  return (
    <>
      <div className="filter">
        <span className="checkbox">Облачно</span>
        <span className="checkbox selected">Солнечно</span>
        <p className="custom-input">
          <label htmlFor="min-temperature">Минимальная температура</label>
          <input id="min-temperature" type="text" />
        </p>
        <p className="custom-input">
          <label htmlFor="min-temperature">Максимальная температура</label>
          <input id="max-temperature" type="text" />
        </p>
        <button>Отфильтровать</button>
      </div>
    </>
  );
};
