import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import {theme} from "./component/theme/Theme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import './i18n'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div/>}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);