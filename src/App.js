import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';

const Cover = styled.div`
  font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: white;
  background: papayawhip;
  background: url(https://www.skipthedishes.com/static/skip_refresh/img/home/landing_background.jpg?_v20171124211701755)
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

class App extends Component {
  render() {
    return (
      <Cover>
        <Header />
        <Main />
      </Cover>
    );
  }
}

export default App;
