import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AppProvider } from './storage/data_fetch';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <GoogleOAuthProvider clientId="369497167960-kacuvdv01t5bo3faru78m6nqc5kjkm1m.apps.googleusercontent.com">
        <AppProvider>
            <App/>
        </AppProvider>
    </GoogleOAuthProvider>
)

reportWebVitals();
