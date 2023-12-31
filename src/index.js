import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material';

const theme = createTheme({
  mode:'light',
  primary:{
      main:'grey'
  },
  secondary:{
      main:'blue'
  },

  background:{
      default:'green',
      paper:'#fff'
  }


})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

