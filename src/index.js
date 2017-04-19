import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';
import { observe } from './GameMechanics';

const rootEl = document.getElementById('root');
observe(cars =>
  ReactDOM.render(
    <Main cars={cars} />,
    rootEl
  )
);