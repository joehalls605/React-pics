import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import searchImages from './api';

searchImages("cars") // ✅ Correct
    .then(results => console.log(results))
    .catch(err => console.error(err));


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App/>);