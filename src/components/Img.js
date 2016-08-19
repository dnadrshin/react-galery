import React, { Component } from 'react';

var imgStyle ={
  height: '120px',
  float: 'left',
  marginLeft: '14px',
  cursor: 'pointer'
}


var Img = React.createClass({
  render: function(){
    return (
    <div>
      <img 
        style={imgStyle} 
        key={this.props.keyD} 
        src={this.props.srcData}
        onClick={this.props.imgSelect}/>
    </div>
    )
  }
})

export default Img;