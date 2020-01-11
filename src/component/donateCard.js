import React, { Component} from 'react';
//import style from './donateCard.css';
import {
  style_layout,
  style_image,
  style_description,
  style_description__button,
  style_description__text,
} from './donateCard_markup';

import image_id1 from '../../public/images/baan-kru-noi.jpg';

export default class DonateCard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  onClickDonate() {
    if (!window.confirm('do you donate?')) return false;

    //donate processing
  }

  render() {
    return (
      <div style={style_layout}>
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