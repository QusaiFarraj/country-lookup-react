import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/main';
import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
