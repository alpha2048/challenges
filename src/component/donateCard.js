import React, { Component} from 'react';
//import style from './donateCard.css';

import image_id1 from '../../public/images/baan-kru-noi.jpg';

const style_layout = {
  backgroundColor: 'aqua',
  width: 450,
  height: 300,
  borderRadius: 4,
};

const style_image = {
  maxWidth: '100%',
  height: 'auto',
  width: 'auto',
};

const style_description = {
  display: 'flex',
  flexDirection: 'row',
  padding: 16,
  justifyContent: 'space-between',
  alignItems: 'center',
};

const style_description__text = {
  fontWeight: 600,
  color: 'black',
  fontSize: 14,
};

const style_description__button = {
  border: '1px solid blue',
  color: 'blue',
  fontSize: 14,
  backgroundColor: 'white',
  paddingLeft: 8,
  paddingRight: 8,
  paddingTop: 4,
  paddingBottom: 4,
  fontWeight: 600,
};

export default class DonateCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style_layout}>
        <img style={style_image} src={image_id1} alt="Logo" />
        <div style={style_description}>
          <div style={style_description__text}>
            test of test
          </div>

          <div style={style_description__button}>
            donate
          </div>
        </div>
      </div>
    );
  }
}