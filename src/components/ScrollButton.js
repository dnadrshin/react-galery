import React, { Component, PropTypes } from 'react';


class ScrollButton extends Component {


    render() {
    	let ScrollStyle = {
	  		'width': '30px',
	  		'height': '30px',
	  		'borderRadius': '30px',
	  		'background': '#fff',
		    'justifyContent': 'center',
		    'position': 'absolute',
		    'cursor': 'pointer',
		    'zIndex': 1,
		    'top': '80'    		
    	}
	    let leftScrollStyle = Object.assign({}, ScrollStyle, {'left':'7px'})
	  	let rightScrollStyle = Object.assign({}, ScrollStyle, {'right':'7px'})
	  	let imgStyle = {
	  		'width': '20px'
	  	}
        return (
            <div 
            style={this.props.direction=='right'?rightScrollStyle:leftScrollStyle}
            onClick={this.props.onClick}>
            	{this.props.direction=='right'?<img style={imgStyle} src="/public/img/arrow-right.png"/>:<img style={imgStyle} src="/public/img/arrow-left.png"/>}
            </div>
        );
    }
}

export default ScrollButton;
