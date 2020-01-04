/*
  http://bit.ly/2DTXGpe - `@babel/polyfill` has been deprecated.
  If you need to polyfill certain JS features, uncomment the two imports below.
  Be sure to adjust the `browserslist` field in your `package.json` file.
*/
// import 'core-js/stable'
// import 'regenerator-runtime/runtime' // Needed to polyfill async / await.

// Import our top-level sass file.
import './styles/styles.scss';

// Import React.
import React from 'react';
import ReactDOM from 'react-dom';

// Import our top-level component.
import App from 'components/App';

// Top-level classes on the body. Feel free to remove / change.
document.body.className = ' fw4 white-80';

// Define root
const rootEl = document.querySelector('#app');

//Define lodash
var _ = require('lodash');

// Mount our app.
ReactDOM.render(<App />, rootEl);
if (module.hot) {
  module.hot.accept(<App />, () => {
    const NextApp = require(<App />).default;
    ReactDOM.render(<NextApp />, rootEl);
  });
}
