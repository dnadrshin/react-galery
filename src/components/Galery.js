import React from 'react';
import ReactDOM from 'react-dom';
import Img from './Img';
import BigShow from './BigShow';



var Galery = React.createClass({
  getInitialState: function(){
    return {
      selectImgUrl: ""
    }
  },
  imgSelect: function(e){
    console.log(e.target.src);
    this.setState({
      selectImgUrl: e.target.src
    })
  },
  render: function(){
    return (
      <div>
          <div className="galery_min">
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