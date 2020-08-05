import React from "react";
import "./styles.scss";
import { Forecast } from "../../bus/forecast";

export const Main = () => {
  return (
    <>
      <main>
        <Forecast />
      </main>
    </>
  );
};
