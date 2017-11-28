import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Message } from 'semantic-ui-react';

import styled from 'styled-components';

import Cards from './Cards';
import { fetchRestaurantsAction } from '../actions/index';

const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 300;
  font-size: 4rem;
  margin: 0px;
  letter-spacing: -1px;
  -webkit-text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  -moz-text-shadow: 0 2px 4px rgba(0, 0, 0.3);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const SubTitle = styled.h2`
  font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 300;
  font-size: 2rem;
  margin: 0px;
  letter-spacing: -1px;
  -webkit-text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  -moz-text-shadow: 0 2px 4px rgba(0, 0, 0.3);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

class Main extends Component {
  renderResult() {
    if (this.props.restaurants.length) return <Cards restaurants={this.props.restaurants} />;
    if (this.props.error)
      return (
        <Message
          color="orange"
          compact
          header="Sorry, we couldn't find restaurants near by this address!!"
          content="Can you check the address?"
        />
      );
  }

  render() {
    return (
      <Container>
        <Title>A Better Way to Get Your Food </Title>
        <SubTitle>Order From Local Restaurants You Love</SubTitle>
        <Input
          icon="bullseye"
          size="massive"
          iconPosition="left"
          ref={r => (this.ina = r)}
          action={{
            color: 'red',
            labelPosition: 'right',
            icon: 'shipping',
            size: 'massive',
            content: 'DELIVERY',
            onClick: () => this.props.fetchRestaurantsAction(this.ina.inputRef.value),
          }}
          defaultValue="532 Victoria Avenue East, Winnipeg, MB, Canada"
        />
        {this.renderResult()}
      </Container>
    );
  }
}

export default connect(({ places: { searchResult: { restaurants = [] } }, error }) => ({ restaurants, error }), {
  fetchRestaurantsAction,
})(Main);
