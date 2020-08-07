// Types
import { types } from "./types";

import { api } from "../../api";

export const forecastActions = Object.freeze({
  // Sync
  startFetching: () => {
    return {
      type: types.FORECAST_START_FETCHING,
    };
  },
  stopFetching: () => {
    return {
      type: types.FORECAST_STOP_FETCHING,
    };
  },
  fill: (payload) => {
    return {
      type: types.FORECAST_FILL,
      payload,
    };
  },
  setFetchingError: (error) => {
    return {
      type: types.FORECAST_SET_FETCHING_ERROR,
      error: true,
      payload: error,
    };
  },

  setSelectedDay: (payload) => {
    return {
      type: types.FORECAST_SET_SELECTED_DAY,
      payload,
    };
  },

  // Async
  fetchAsync: () => async (dispatch) => {
    dispatch({
      type: types.FORECAST_FETCH_ASYNC,
    });

    dispatch(forecastActions.startFetching());

    try {
      const response = await api.forecast.fetch();

      if (response.status === 200) {
        const result = await response.json();
        dispatch(forecastActions.setSelectedDay(result[0]));
        dispatch(forecastActions.fill(result));
      }
    } catch (error) {
      dispatch(forecastActions.setFetchingError(error));
    }

    dispatch(forecastActions.stopFetching());
  },
});
