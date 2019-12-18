import React from "react";
import "./styles.scss";
import moment from "moment";
import "moment/locale/ru";

export const Head = props => {
  const { source } = props;

  const list = source[0];
  const loader = "Загрузка...";

  moment.locale("ru");
  return (
    <>
      <div className="head">
        <div className="icon cloudy"></div>
        <div className="current-date">
          <p>{list ? moment(list.day).format("dddd") : loader}</p>
          <span>{list ? moment(list.day).format("DD MMMM") : loader}</span>
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
