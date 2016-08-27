import React, { Component } from 'react';

var BigShow = React.createClass({
	style: {
	'display': 'flex',
    'justifyContent': 'center',
    'padding': '20px'
	},
  render (){
    var style = {
      height: '240'+'px'
    }
    return <div style={this.style}><img style={style} src={this.props.selectImgUrl}/></div>
  }
})
 

export default BigShow;