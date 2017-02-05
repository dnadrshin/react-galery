import React, { Component } from 'react';

class ScrollButton extends Component {
	render() {
		let ScrollStyle = {
			'border'        : '2px solid gray',
			'width'         : '30px',
			'height'        : '30px',
			'borderRadius'  : '30px',
			'background'    : '#fff',
			'display'       : 'flex',
			'alignItems'    : 'center',
			'justifyContent': 'center',
			'position'      : 'absolute',
			'cursor'        : 'pointer',
			'zIndex'        : 1,
			'top'           : '80'
		},

		leftScrollStyle = Object.assign({}, ScrollStyle, {'left':'7px'}),
		rightScrollStyle = Object.assign({}, ScrollStyle, {'right':'7px'}),

		imgStyle = {
			'width': '20px'
		}

		return (
			<div
				style={this.props.direction=='right'?rightScrollStyle:leftScrollStyle}
				onClick={this.props.onClick}
			>
				{this.props.direction=='right'
					? <img style={imgStyle} src="/public/img/arrow-right.png"/>
					: <img style={imgStyle} src="/public/img/arrow-left.png"/>
				}
			</div>
		);
	}
}

export default ScrollButton;
