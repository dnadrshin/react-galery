import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

var galeryData =[
  'http://orto.zaimi24.ru/upload/medialibrary/244/2447ae83b54e924925eee7e4593ee613.jpg',
  'http://orto.zaimi24.ru/upload/medialibrary/574/5743137110af183cfb4b274d437a50f0.jpg',
  'http://orto.zaimi24.ru/upload/medialibrary/574/5743137110af183cfb4b274d437a50f0.jpg'
]

var imgStyle ={
  height: '120px',
  float: 'left',
  marginLeft: '14px',
  cursor: 'pointer'
}

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
              }
              )}
          </div>
          <div>
            <BigShow selectImgUrl={this.state.selectImgUrl}/>
          </div>
      </div>
    )
  }
})

var BigShow = React.createClass({
  render: function(){
    var style = {
      height: '240'+'px'
    }
    return <div><img style={style} src={this.props.selectImgUrl}/></div>
  }
})

var Img = React.createClass({
  render: function(){
    return (
    <div>
      <img 
        style={imgStyle} 
        key={this.props.keyD} 
        src={this.props.srcData}
        onClick={this.props.imgSelect}/>
    </div>
    )
  }
})


ReactDOM.render(
  <Galery initGalery={galeryData}/>,
  document.getElementById('root')
);