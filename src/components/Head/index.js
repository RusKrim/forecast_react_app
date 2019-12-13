import React from "react";
import "./styles.scss";

export const Head = props => {
  const { source } = props;

  const list = source[0];
  console.log(list);
  const loader = "Загрузка...";
  return (
    <>
      <div className="head">
        <div className="icon cloudy"></div>
        <div className="current-date">
          <p>Пятница</p>
          <span>{list ? list.day : loader}</span>
        </div>
      </div>
      <div className="current-weather">
        <p className="temperature">{list ? list.temperature : loader}</p>
        <p className="meta">
          <span className="rainy">
            {list ? `${list.rain_probability}%` : loader}
          </span>
          <span className="humidity">
            {list ? `${list.humidity}%` : loader}
          </span>
        </p>
      </div>
    </>
  );
};
