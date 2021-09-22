import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle: FC = () => {
  return (
    <>
      <Normalize />
    </>
  );
};

const Normalize = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    overflow-y: scroll;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, html {
    height: 100vh;
    min-width: 100%;
    min-width: 100%;
    font-family: Rubik-Regular;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
  }
`;
