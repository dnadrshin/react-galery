import React, { Component } from 'react';

let imgStyle ={
  height: '120px',
  float: 'left',
  marginLeft: '14px',
  cursor: 'pointer'
}

let deleteImg = {
  width: '30px',
  height: '30px',
  borderRadius: '30px',
  background: '#fff',
  color: '#000',
  position: 'absolute',
  right: '0px',
  cursor: 'pointer'
}


var Img = React.createClass({
  render: function(){
    return (
    <div>
      <img 
        style={imgStyle} 
        key={this.props.keyD} 
        src={this.props.srcData.img}
        onClick={this.props.imgSelect}/>
      <div style={deleteImg}>-</div>
    </div>
    )
  }
})

export default Img;