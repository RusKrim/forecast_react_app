// Types
import { types } from "./types";

import { api } from "../../api";
import moment from "moment";

export const forecastActions = Object.freeze({
  // Sync
  startFetching: () => {
    return {
      type: types.FORECAST_START_FETCHING
    };
  },
  stopFetching: () => {
    return {
      type: types.FORECAST_STOP_FETCHING
    };
  },
  fill: payload => {
    return {
      type: types.FORECAST_FILL,
      payload
    };
  },
  setFetchingError: error => {
    return {
      type: types.FORECAST_SET_FETCHING_ERROR,
      error: true,
      payload: error
    };
  },
  selectDay: payload => {
    return {
      type: types.FORECAST_SELECT_DAY,
      payload
    };
  },
  forecastFilter: payload => {
    return {
      type: types.FORECAST_FILTER,
      payload
    };
  },
  // Async
  fetchAsync: () => async dispatch => {
    dispatch({
      type: types.FORECAST_FETCH_ASYNC
    });

    dispatch(forecastActions.startFetching());

    try {
      const response = await api.forecast.fetch();

      if (response.status === 200) {
        const results = await response.json();
        dispatch(forecastActions.fill(results));
      }
    } catch (error) {
      dispatch(forecastActions.setFetchingError(error));
    }

    dispatch(forecastActions.stopFetching());
  }
});
