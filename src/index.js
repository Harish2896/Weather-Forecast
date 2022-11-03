import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.scss";
import App from './App';
import SearchCountryProvider from "./contexts/search-country.context";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchCountryProvider>
      <App />
    </SearchCountryProvider>
  </React.StrictMode>
);


