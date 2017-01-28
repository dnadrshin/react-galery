import React from 'react';

const
	Img = React.createClass({

	render(){
		let marginLeft = ()=>{
			return (this.props.keyD==0)?'0':'14px'
		}
		let imgStyle={
			height: this.props.settings.list.picHeight,
			float: 'left',
			cursor: 'pointer',
			marginLeft: marginLeft()
		}
		return (
		<div>
			<img
				style={imgStyle}
				src={this.props.srcData.img}
				onClick={this.props.imgSelect}
			/>
		</div>
		)
	}
})

export default Img;