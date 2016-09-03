import React, { Component, PropTypes } from 'react';


class ScrollButton extends Component {


    render() {
	    let leftScrollStyle = {
	  		'width': '30px',
	  		'height': '30px',
	  		'borderRadius': '30px',
	  		'background': '#fff',
		   	'display': 'flex',
		    'justifyContent': 'center',
		    'position': 'absolute',
		    'left': '0',
		    'cursor': 'pointer',
		    'zIndex': 1,
		    'top': '80'
	  	}
	  	let rightScrollStyle = {
	  		'width': '30px',
	  		'height': '30px',
	  		'borderRadius': '30px',
	  		'background': '#fff',
		   	'display': 'flex',
		    'justifyContent': 'center',
		    'position': 'absolute',
		    'right': '0',
		    'cursor': 'pointer',
		    'zIndex': 1,
		    'top': '80'
	  	}
        return (
            <div 
            style={this.props.direction=='right'?rightScrollStyle:leftScrollStyle}
            onClick={this.props.onClick}
            >--</div>
        );
    }
}

export default ScrollButton;
