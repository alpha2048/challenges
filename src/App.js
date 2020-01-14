import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetch from 'isomorphic-fetch';
import DonateCard from './component/donateCard';

import { summaryDonations } from './helpers';

import {
  Title,
  DonateMessage,
  CardLayout,
  CardLayout__Row,
  AllDonationLayout,
  AllDonationLayout__Row,
} from './App_markup';

function createRowCard(self, coupleCardItem) {
  return (
    <CardLayout__Row>
      {coupleCardItem[0] && (
        <DonateCard
          name={coupleCardItem[0].name}
          id={coupleCardItem[0].id}
          imageUrl={coupleCardItem[0].image}
          currency={coupleCardItem[0].currency}
          handlePay={(id, amount, currency) => handlePay(self, id, amount, currency).call()}/>
      )}
      {coupleCardItem[1] && (
        <DonateCard
          name={coupleCardItem[1].name}
          id={coupleCardItem[1].id}
          imageUrl={coupleCardItem[1].image}
          currency={coupleCardItem[1].currency}
          handlePay={(id, amount, currency) => handlePay(self, id, amount, currency).call()}/>
      )}
    </CardLayout__Row>
  )
}

export default connect((state) => state)(
  class App extends Component {
    constructor(props) {
      super();

      this.state = {
        charities: [],
        totalAmount: 0,
      };
    }

    componentDidMount() {
      const self = this;
      fetch('http://localhost:3001/charities')
        .then(function(resp) { return resp.json(); })
        .then(function(data) {
          self.setState({ charities: data }) });

      this.updateTotalAmount();
    }

    updateTotalAmount() {
      const self = this;
      fetch('http://localhost:3001/payments')
        .then(function(resp) { return resp.json() })
        .then(function(data) {
          self.setState({ totalAmount: summaryDonations(data.filter((item) => (item.amount != null)).map((item) => (item.amount))) });
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

      return (
        <div>
          <Title>
            Omise Tamboon React
          </Title>
          <DonateMessage>
            {this.props.message}
          </DonateMessage>
          <AllDonationLayout>
            <AllDonationLayout__Row>
              <div>
                All donations
              </div>
              <div>
                {this.state.totalAmount}
              </div>
            </AllDonationLayout__Row>
          </AllDonationLayout>
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
        self.updateTotalAmount();
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
