import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import './styles/styles.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(<AppRouter />, rootElement);
