import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import DonateCard from './component/donateCard';

import { summaryDonations } from './helpers';

import {
  Title,
  Row,
  CardLayout,
} from './App_markup';

function createRowCard(self, coupleCardItem) {
  return (
    <Row>
      {coupleCardItem[0] && (
        <DonateCard
          name={coupleCardItem[0].name}
          id={coupleCardItem[0].id}
          image={coupleCardItem[0].image}
          currency={coupleCardItem[0].currency}
          handlePay={(id, amount, currency) => handlePay(self, id, amount, currency).call()}/>
      )}
      {coupleCardItem[1] && (
        <DonateCard
          name={coupleCardItem[1].name}
          id={coupleCardItem[1].id}
          image={coupleCardItem[1].image}
          currency={coupleCardItem[1].currency}
          handlePay={(id, amount, currency) => handlePay(self, id, amount, currency).call()}/>
      )}
    </Row>
  )
}

export default connect((state) => state)(
  class App extends Component {
    constructor(props) {
      super();

      this.state = {
        charities: [],
        selectedAmount: 10,
      };
    }

    componentDidMount() {
      const self = this;
      fetch('http://localhost:3001/charities')
        .then(function(resp) { return resp.json(); })
        .then(function(data) {
          self.setState({ charities: data }) });

      fetch('http://localhost:3001/payments')
        .then(function(resp) { return resp.json() })
        .then(function(data) {
          self.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount: summaryDonations(data.map((item) => (item.amount))),
          });
        })
    }

    render() {
      const self = this;
      const cardList = this.state.charities;
      const divideLength = 2;
      const splitCardList = [];

      for (let i = 0; i < cardList.length; i += divideLength){
        splitCardList[i] = cardList.slice(i, i + divideLength);
      }

      const cards = splitCardList.map(function(item) {
        return createRowCard(self, item);
      });

      const style = {
        color: 'red',
        margin: '1em 0',
        fontWeight: 'bold',
        fontSize: '16px',
        textAlign: 'center',
      };
      const donate = this.props.donate;
      const message = this.props.message;

      return (
        <div>
          <Title>Omise Tamboon React</Title>
          <p>All donations: {donate}</p>
          <p style={style}>{message}</p>
          <CardLayout>
            {cards}
          </CardLayout>
        </div>
      );
    }
  }
);

function handlePay(self, id, amount, currency) {
  return function() {
    fetch('http://localhost:3001/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
      .then(function(resp) {
        return resp.json(); })
      .then(function() {
        self.props.dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount,
        });
        self.props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: `Thanks for donate ${amount}!`,
        });

        setTimeout(function() {
          self.props.dispatch({
            type: 'UPDATE_MESSAGE',
            message: '',
          });
        }, 2000);
      });
  }
}
