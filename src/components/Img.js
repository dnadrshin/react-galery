import React from 'react';

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
      cursor: 'pointer',
      //'pointerEvents': 'none',
      marginLeft: marginLeft()
    }
    return (
    <div>
      <img 
        style={imgStyle} 
        src={this.props.srcData.img}
        onClick={this.props.imgSelect}/>
    </div>
    )
  }
})

export default Img;