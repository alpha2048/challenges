import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {
  Layout,
  Image,
  PaymentLayout,
  PaymentLayout__Close_Button,
  PaymentLayout__Close_Layout,
  Description,
  Description__Text,
  Description__Button,
  PaymentLayout__Selector,
  PaymentLayout__Title,
} from './donateCard_markup';

import image1 from '../../public/images/baan-kru-noi.jpg';
import image2 from '../../public/images/habitat-for-humanity-thailand.jpg';
import image3 from '../../public/images/paper-ranger.jpg';
import image4 from '../../public/images/makhampom-theater.jpg';
import image5 from '../../public/images/thailand-association-of-the-blind.jpg';

export default class DonateCard extends Component<> {
  constructor(props) {
    super(props);
    this.state = {
      openPaymentScreen: false,
      donateAmount: 0,
    };

    this.onClickDonate = this.onClickDonate.bind(this);
    this.onClickClosePay = this.onClickClosePay.bind(this);
    this.onClickPay = this.onClickPay.bind(this);
    this.onClickDonateAmount = this.onClickDonateAmount.bind(this);
  }

  componentDidMount() {
  }

  getImage(id: number) {
    switch (id) {
      case 1:
        return image1;
      case 2:
        return image2;
      case 3:
        return image3;
      case 4:
        return image4;
      case 5:
        return image5;
    }
  }

  onClickDonateAmount(amount: number) {
    this.setState({
      donateAmount:amount,
    });
  }

  onClickDonate() {
    this.setState({
      openPaymentScreen: true,
    });
  }

  onClickPay(id, amount, currency) {
    if (!window.confirm('Do you accept to donate?')) return false;

    this.props.handlePay(id, amount, currency);
    this.onClickClosePay();
  }

  onClickClosePay() {
    this.setState({
      openPaymentScreen: false,
      donateAmount: 0,
    });
  }

  render() {
    const payments = [10, 20, 50, 100, 500].map((amount, j) => (
      <label key={j}>
        <input
          type="radio"
          name="payment"
          onClick={() => this.onClickDonateAmount(amount)} /> 
        {amount}
      </label>
    ));

    return (
      <Layout>
        {this.state.openPaymentScreen && (
          <PaymentLayout>
            <PaymentLayout__Close_Layout>
              <PaymentLayout__Close_Button onClick={() => this.onClickClosePay()}>
                  ×
              </PaymentLayout__Close_Button>
            </PaymentLayout__Close_Layout>
            <PaymentLayout__Title>
              Select the amount to donate (USD)
            </PaymentLayout__Title>
            <PaymentLayout__Selector>
              {payments}
            </PaymentLayout__Selector>
            {this.state.donateAmount !== 0 && (
              <Description__Button onClick={() => this.onClickPay(this.props.id, this.state.donateAmount, this.props.currency)}>
                Pay
              </Description__Button>
            )}
          </PaymentLayout>
        )}
        <Image src={this.getImage(this.props.id)}/>
        <Description>
          <Description__Text>
            {this.props.name}
          </Description__Text>

          <Description__Button onClick={() => this.onClickDonate()}>
            donate
          </Description__Button>
        </Description>
      </Layout>
    );
  }
}

DonateCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  currency: PropTypes.string,
  handlePay: PropTypes.func,
};