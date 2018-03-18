import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { AppRegistry } from 'react-native';

// register the app
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
