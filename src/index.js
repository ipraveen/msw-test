import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser');
    worker.start();
}

ReactDOM.render(
    <React.StrictMode>
        <App id="EMP000" />
    </React.StrictMode>,
    document.getElementById('root')
);
