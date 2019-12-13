// Types
import { types } from "./types";

const initialState = {
  data: [],
  isFetching: false,
  error: false
};

export const forecastReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.FORECAST_START_FETCHING:
      return { ...state, isFetching: true };
    case types.FORECAST_STOP_FETCHING:
      return { ...state, isFetching: false };
    case types.FORECAST_SET_FETCHING_ERROR:
      return { ...state, error: payload };
    case types.FORECAST_FILL:
      return { ...state, data: payload };

    default:
      return state;
  }
};
