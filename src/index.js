import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
