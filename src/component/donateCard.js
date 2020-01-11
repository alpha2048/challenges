import React, { Component} from 'react';
//import style from './donateCard.css';

import image_id1 from '../../public/images/baan-kru-noi.jpg';

const style_layout = {
  backgroundColor: 'aqua',
  width: 600,
  height: 400,
  borderRadius: 4 };

export default class DonateCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style_layout}>
        <img src={image_id1} alt="Logo" />
        <div>
          test
        </div>
      </div>
    );
  }
}