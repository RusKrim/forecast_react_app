import React from "react";
import "./styles.scss";
import moment from "moment";

export const ForecastForWeek = props => {
  const { source } = props;

  const { rain_posibility, humidity, day, temperature } = source;

  const forecastOfWeek = source
    .slice(0, 7)
    .map(({ temperature, day }, index) => (
      <div className="day cloudy selected" key={index}>
        <p>{moment(day).format("dddd")}</p>
        <span>{temperature}</span>
      </div>
    ));

  return (
    <>
      <div className="forecast">{forecastOfWeek}</div>
    </>
  );
};
