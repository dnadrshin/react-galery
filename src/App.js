import React, { Component } from 'react';

import Galery from './components/Galery';
import galeryData from './galeryData';

const GalerySettings = {
      list:{
        picHeight: '200px'
      },
      bigShow:{
        height: '600px'
      }
    }

export class App extends Component {
    render() {
        return (
          <Galery initGalery={galeryData} settings={GalerySettings}/>
        );
    }
}
