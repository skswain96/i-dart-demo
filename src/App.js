import React, { lazy, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import Spinner from './UI/Spinner/Spinner'
import { Grid } from '@material-ui/core'

const Home = lazy(() => import('./components/Home/Home'))

const LoadingScreen = (
  <Grid container justify="center"
    style={{
      minWidth: '100vw',
      minHeight: '100vh',
      color: '#f5f5f5',
      alignItems: 'center'
    }}>

    <Spinner />
  </Grid>
)

function App() {
  return (
    <div className="App">
      <Switch >
        <Suspense fallback={LoadingScreen}>
          <Route key="home" to="/" component={Home} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
