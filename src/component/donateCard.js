import React, { Component} from 'react';
//import style from './donateCard.css';
import {
  style_layout,
  style_image,
  style_description,
  style_description__button,
  style_description__text,
  style_payment_layout,
  style_payment_layout__close_layout,
  style_payment_layout__close_button,
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
      <div style={style_layout}>
        {this.state.openPaymentScreen && (
          <div style={style_payment_layout}>
            <div style={style_payment_layout__close_layout}>
              <div style={style_payment_layout__close_button} onClick={this.onClickClosePay.bind(this)}>
                  ×
              </div>
            </div>
            <div style={style_description__button} onClick={this.onClickPay.bind(this)}>
                pay
            </div>
          </div>
        )}
        <img style={style_image} src={image_id1} alt="Logo" />
        <div style={style_description}>
          <div style={style_description__text}>
            Baan Kru Noi
          </div>

          <div style={style_description__button} onClick={this.onClickDonate.bind(this)}>
            donate
          </div>
        </div>
      </div>
    );
  }
}