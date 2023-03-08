import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#12141E ",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/coins/:id" element={<CoinPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;