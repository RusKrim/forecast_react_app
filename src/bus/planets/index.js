import React from 'react';
import { usePlanetsFetch } from './hooks/usePlanetsFetch';
import { Title } from '../../common/title';

export const Planets = () => {
  const { isFetching, data, error } = usePlanetsFetch();

  const errorMessage = error.status === 404 && (
    <p>Not found!</p>
  );

  const loader = isFetching && (
    <p>Loading data from API...</p>
  );

  const list = isFetching || data.map(({name}, index) => (
    <li key={index}>{name}</li>
  ));

  return (
    <>
      <Title>Planets</Title>
      {errorMessage}
      {loader}
      {list}
    </>
  )
};
