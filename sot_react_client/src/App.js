import React, { Component } from 'react';

import './App.css';

import ControlPanel from './components/ControlPanel';
import Header from './components/Header';
import ShowDiv from './components/ShowDiv';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      backBgColor: '#FFFFFF',
      bgColor: '#FFFFFF',
      innerText: 'Default Text',
      borderColorT: '#000000',
      borderColorR: '#000000',
      borderColorB: '#000000',
      borderColorL: '#000000',
      borderWidthT: 1,
      borderWidthR: 1,
      borderWidthB: 1,
      borderWidthL: 1,
      borderRadiusTL: 0,
      borderRadiusTR: 0,
      borderRadiusBR: 0,
      borderRadiusBL: 0,
      borderStyleT: 'solid',
      borderStyleR: 'solid',
      borderStyleB: 'solid',
      borderStyleL: 'solid'
    };
    this.updateStyle = this.updateStyle.bind(this);
  };

  updateStyle(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    const styleName = event.target.name;
    const styleValue = event.target.value;
    return this.setState({[styleName]: styleValue});
  };


  render() {

    const previewStyle = {
      borderColor: `${this.state.borderColorT} ${this.state.borderColorR} ${this.state.borderColorB} ${this.state.borderColorL}`,
      borderWidth: `${this.state.borderWidthT}px ${this.state.borderWidthR}px ${this.state.borderWidthB}px ${this.state.borderWidthL}px`,
      borderStyle: `${this.state.borderStyleT} ${this.state.borderStyleR} ${this.state.borderStyleB} ${this.state.borderStyleL}`,
      borderRadius: `${this.state.borderRadiusTL}px ${this.state.borderRadiusTR}px ${this.state.borderRadiusBR}px ${this.state.borderRadiusBL}px`,
      backgroundColor: this.state.bgColor
    }

    const bgStyle = {
      backgroundColor: this.state.backBgColor
    }

    return (
      <div className="App">
        <Header />
        <ShowDiv bgStyle={bgStyle} innerText={this.state.innerText} previewStyle={previewStyle} />
        <ControlPanel previewStyle={previewStyle} onChangeForm={this.updateStyle} />
      </div>
    );
  }
}

export default App;
