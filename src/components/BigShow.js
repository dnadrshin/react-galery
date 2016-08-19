import React, { Component } from 'react';

var BigShow = React.createClass({
  render: function(){
    var style = {
      height: '240'+'px'
    }
    return <div><img style={style} src={this.props.selectImgUrl}/></div>
  }
})


export default BigShow;