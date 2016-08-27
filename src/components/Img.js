import React, { Component } from 'react';

var Img = React.createClass({


  render(){
    /**
     * [margin for first element and next]
     * @return {[String]} [margin]
     */
    let marginLeft = ()=>{
       return (this.props.keyD==0)?'0':'14px'
      }
    /**
     * [style object for img]
     * @type {Object}
     */
    let imgStyle={
      height: this.props.settings.list.picHeight,
      float: 'left',
      marginLeft: '14px',
      cursor: 'pointer',
      marginLeft: marginLeft()
    }
    return (
    <div>
      <img 
        style={imgStyle} 
        src={this.props.srcData.img}
        onClick={this.props.imgSelect}/>
        {this.props.key}
    </div>
    )
  }
})

export default Img;