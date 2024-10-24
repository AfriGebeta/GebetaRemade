import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './redux/store'
import {Provider} from 'react-redux'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById('root'));

export const query = new QueryClient()

root.render(
    <React.StrictMode>
        <QueryClientProvider client={query}>
            <Provider store={store}>
                <App/>
                <Toaster/>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);

reportWebVitals();
