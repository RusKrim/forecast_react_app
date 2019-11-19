import React from 'react';
import { Starships } from '../starships';
import { Planets } from '../planets';
import { useLoading } from './hooks/useLoading';

export const Swapi = () => {
  const { isDataLoading } = useLoading();
  const status = isDataLoading && 'NOT READY';

  return (
    <>
      <h1>Swapi {status}</h1>
      <Starships />
      <Planets />
    </>
  )
};