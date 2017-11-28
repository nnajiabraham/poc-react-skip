import React, { Component } from 'react';
import { Button, Card, Image, Icon } from 'semantic-ui-react';

import styled from 'styled-components';

const Group = styled(Card.Group)`
  justify-content: center;
  padding: 40px;
`;

const Badge = styled.div`
  display: flex;
  justify-content: space-around;
  color: darkorange;
`;

class Cards extends Component {
  calculateFee(fees) {
    const validFee = fees.filter(fee => fee.orderMinimumCents === 0);
    return Math.floor(validFee[0].feeCents / 100);
  }

  renderCards() {
    return this.props.restaurants.map((item, i) => {
      return (
        <Card key={i} color="red">
          <Card.Content>
            <Image floated="right" size="mini" src={item.logoUrl} />
            <Card.Header>
              {item.name} <Icon name="star" />
              {item.skipScore}
            </Card.Header>
            <Card.Meta>{item.streetAddress}</Card.Meta>
            <Card.Description>{item.cuisines.join(', ')}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Badge>
              <Icon name="road" />
              {`${Math.floor(item.distance.value, 2)} ${item.distance.unit}`}
              <Icon name="hourglass half" /> {item.minEstimatedTime} - {item.maxEstimatedTime} Minutes
              <Icon name="money" />
              {`CAN$ ${this.calculateFee(item.fees)}`}
            </Badge>
            <div className="ui two buttons">
              <Button basic color={item.isOpen ? 'green' : 'red'}>
                {item.isOpen ? 'See Menu' : 'Closed Yet'}
              </Button>
            </div>
          </Card.Content>
        </Card>
      );
    });
  }

  render() {
    return <Group>{this.renderCards()}</Group>;
  }
}

export default Cards;
