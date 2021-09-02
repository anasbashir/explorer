import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'src/globalStyle';
import MainApp from 'src/navigation/RouterConfig';
import { Provider } from 'react-redux';
import store from './redux/store';

function noop() {}
(() => {
  if (process.env.NODE_ENV !== 'development') {
    console.log = noop;
    console.warn = noop;
    console.error = noop;
  }
})();

const Wrapper = styled.div``;
const App = () => {
  return (
    <Wrapper>
      <Provider store={store}>
        <GlobalStyle />
        <MainApp />
      </Provider>
    </Wrapper>
  );
};

export default App;
