import React from 'react';
import ReactDOM from 'react-dom/client';

import { Global } from '@emotion/react';

import Pagination from 'components/pagination';
import reportWebVitals from 'reportWebVitals';
import reset from 'styles/reset';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Global styles={reset} />
        <Pagination count={10} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
