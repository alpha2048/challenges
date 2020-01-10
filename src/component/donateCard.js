import React, { Component} from 'react';
//import style from './donateCard.css';

const style = {
  backgroundColor: 'aqua',
  width: 400,
  height: 300,
  borderRadius: 4 };

export default class DonateCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style}>
        {/*<img src="../../public/images/baan-kru-noi.jpg"/>*/}
        {/*<img src={require('../../public/images/baan-kru-noi.jpg')}/>*/}
        <div>
          test
        </div>
      </div>
    );
  }
}