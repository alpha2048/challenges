import React, { Component} from 'react';
import {
  Layout,
  Image,
  PaymentLayout,
  PaymentLayout__Close_Button,
  PaymentLayout__Close_Layout,
  Description,
  Description__Text,
  Description__Button,
} from './donateCard_markup';

import image_id1 from '../../public/images/baan-kru-noi.jpg';

export default class DonateCard extends Component<> {
  constructor(props) {
    super(props);
    this.state = {
      openPaymentScreen: false,
    };
  }

  componentDidMount() {
  }

  onClickDonate() {
    this.setState({
      openPaymentScreen: true,
    });
  }

  onClickPay() {
    if (!window.confirm('do you donate?')) return false;

    //donate processing
  }

  onClickClosePay() {
    this.setState({
      openPaymentScreen: false,
    });
  }

  render() {
    return (
      <Layout>
        {this.state.openPaymentScreen && (
          <PaymentLayout>
            <PaymentLayout__Close_Layout>
              <PaymentLayout__Close_Button onClick={this.onClickClosePay.bind(this)}>
                  ×
              </PaymentLayout__Close_Button>
            </PaymentLayout__Close_Layout>
            <Description__Button onClick={this.onClickPay.bind(this)}>
                pay
            </Description__Button>
          </PaymentLayout>
        )}
        <Image src={image_id1} alt="Logo" />
        <Description>
          <Description__Text>
            Baan Kru Noi
          </Description__Text>

          <Description__Button onClick={this.onClickDonate.bind(this)}>
            donate
          </Description__Button>
        </Description>
      </Layout>
    );
  }
}