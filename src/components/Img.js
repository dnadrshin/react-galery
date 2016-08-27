import React, { Component } from 'react';

var Img = React.createClass({
  render(){
    let imgStyle={
      height: this.props.settings.list.picHeight,
      float: 'left',
      marginLeft: '14px',
      cursor: 'pointer'
    }
    let firstImgStyle ={
      height:  this.props.settings.list.picHeight,
      float: 'left',
      cursor: 'pointer'
    }
    return (
    <div>
      <img 
        style={(this.props.keyD==0)?firstImgStyle:imgStyle} 
        src={this.props.srcData.img}
        onClick={this.props.imgSelect}/>
    </div>
    )
  }
})

export default Img;