import React from 'react';
import logo from './logo.svg';
import './App.css';

class Item extends React.Component {

    state = {
        inputValue: 0
    };

  render(){
    return (
        <div>
            <span>{this.props.value}</span>
          <input />
        </div>
    );
  }

}

export default Item;
