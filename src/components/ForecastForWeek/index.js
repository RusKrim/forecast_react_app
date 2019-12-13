import React from "react";
import "./styles.scss";
import moment from "moment";

export const ForecastForWeek = props => {
  const { source } = props;
  const currentTime = moment();

  console.log(currentTime.weekday(source.day));

  const forecastOfWeek = source
    .slice(0, 7)
    .map(({ rain_posibility, temperature, humidity }, index) => (
      <div className="day cloudy selected" key={index}>
        <p>{temperature}</p>
        <span>{temperature}</span>
      </div>
    ));

  return (
    <>
      <div className="forecast">{forecastOfWeek}</div>
    </>
  );
};
