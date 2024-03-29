import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import Leaderboard from './components/Leaderboard';
import NewGame from './components/NewGame';
import reportWebVitals from './reportWebVitals';
import { ROUTES } from './routes'
import { app } from './firebase'
import { App } from './App'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
