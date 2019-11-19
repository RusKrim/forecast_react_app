import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Routes
import { book } from './book';

// Layouts
import * as Views from '../views';

// Domains
import { Starships } from '../bus/starships';
import { Planets } from '../bus/planets';
import { Swapi } from '../bus/swapi';

export const Routes = () => (
    <>
        <Switch>
            <Route exact path = { book.starships }>
                <Views.Facade>
                    <Starships />
                </Views.Facade>
            </Route>
            <Route exact path = { book.planets }>
                <Views.Facade>
                    <Planets />
                </Views.Facade>
            </Route>
            <Route exact path = { book.swapi }>
                <Views.Facade>
                    <Swapi />
                </Views.Facade>
            </Route>
        </Switch>
    </>
);
