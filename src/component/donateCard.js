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
    };
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
    console.log(this.props);
    const imageUrl = `../../public/images/${this.props.image}`;
    console.log(imageUrl);
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
                Pay
            </Description__Button>
          </PaymentLayout>
        )}
        <Image src={this.getImage(this.props.id)}/>
        <Description>
          <Description__Text>
            {this.props.name}
          </Description__Text>

          <Description__Button onClick={this.onClickDonate.bind(this)}>
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
};