import React, { Component } from 'react';

var BigShow = React.createClass({
	style: {
		'display': 'flex',
	    'justifyContent': 'center',
	    'padding': '20px'
	},
  render (){
    var style = {
      height: this.props.settings.bigShow.height
    }
    return <div style={this.style}>
		    	{
		    		(this.props.selectImgUrl!="")?
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