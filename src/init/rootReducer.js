import { combineReducers } from 'redux';

import { starshipsReducer as starships } from '../bus/starships/reducer';
import { planetsReducer as planets } from '../bus/planets/reducer';

export const rootReducer = combineReducers({
    starships,
    planets
});