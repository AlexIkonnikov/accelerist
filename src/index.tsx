import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './ui/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { AuthRoute } from './route/AuthRoute';


ReactDOM.render(
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <GlobalStyle />
          <AuthRoute/>
      </React.StrictMode>
    </ThemeProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
