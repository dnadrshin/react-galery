import React, { Component } from 'react';
import { NICE, SUPER_NICE } from './colors';

import Galery from './components/Galery';
import galeryData from './galeryData';


export class App extends Component {
    render() {
        return (
            <Galery initGalery={galeryData}/>
        );
    }
}
