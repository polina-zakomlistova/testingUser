import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers/store';
import App from './app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <StoreProvider>
            <Router>
                <App />
            </Router>
        </StoreProvider>
    </React.StrictMode>,
);
