import React from 'react';

var BigShow = React.createClass({
	style: {
			'display': 'flex',
			'justifyContent': 'center',
			'padding': '14px',
			'alignItems': 'center'
	},

	render (){
		var style = {
			width: this.props.settings.bigShow.width
		}
		return <div style={this.style}>
			{
				(this.props.selectImgUrl!='')
				? <img
					style={style}
					src={this.props.selectImgUrl}
				/>
				: <div>no select img</div>
			}
		</div>
	}
})

export default BigShow;