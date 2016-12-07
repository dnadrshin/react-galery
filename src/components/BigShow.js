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
			//todo: dfsdfsd
      //height: this.props.settings.bigShow.height;
      width: this.props.settings.bigShow.width
    }
    return <div style={this.style}>
			{
				(this.props.selectImgUrl!='')?
				/**
				 * [style description]
				 * @type {Object}
				 */
				(<img 
					style={style} 
					src={this.props.selectImgUrl}/>):
				/**
				 * if img not select
				 */
				(<div>no select img</div>)
			}
		</div>
  }
})
 

export default BigShow;