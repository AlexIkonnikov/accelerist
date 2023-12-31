import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './ui/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { RootRouter } from './route/RootRouter';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { injectStore } from './services/ApiClient';
import { ToastContainer } from './ui/ToastContainer';
import { PersistGate } from 'redux-persist/integration/react'
import './assets/fonts/index.css';

injectStore(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <GlobalStyle />
          <ToastContainer />
          <RootRouter />
        </React.StrictMode>
        </PersistGate>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
