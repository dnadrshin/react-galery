import React from 'react';
import ReactDOM from 'react-dom';
import Img from './Img';
import BigShow from './BigShow';



var Galery = React.createClass({
  getInitialState(){
    return {
      selectImgUrl: ''
    }
  },
  imgSelect(e){
    this.setState({
      selectImgUrl: e.target.src
    })
  },
  galeryStyle:{
  	display: 'flex',
  	flexDirection: 'column'
  },
  galeryListStyle:{
   	'display': 'flex',
    'justifyContent': 'center' 	
  },
  render(){
    return (
      <div style={this.galeryStyle}>
          <div className="galery_min" style={this.galeryListStyle}>
              {this.props.initGalery.map((item,i)=>{
                return <Img key={i} keyD={i} srcData={item} imgSelect={this.imgSelect}/>          
              })
          }
          </div>
          <div>
            <BigShow selectImgUrl={this.state.selectImgUrl}/>
          </div>
      </div>
    )
  }
})

export default Galery;