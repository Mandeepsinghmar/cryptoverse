
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { colors, fonts } from './utils/theme';
import { store } from './store';

const theme = extendTheme({
  colors,
  fonts,
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Provider store={store}>
          <App />

        </Provider>

      </Router>

    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

