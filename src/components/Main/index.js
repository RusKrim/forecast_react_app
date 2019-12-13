import React from "react";
import { Head } from "../../components/Head";
import { ForecastFilter } from "../../components/Filter";
import { ForecastForWeek } from "../../components/ForecastForWeek";

import { useForecastFetch } from "../../bus/forecast/hooks/useForecastFetch";

export const Main = () => {
  const { data } = useForecastFetch();

  const source = data;

  return (
    <main>
      <ForecastFilter />
      <Head source={source}></Head>
      <ForecastForWeek source={source}></ForecastForWeek>
    </main>
  );
};
