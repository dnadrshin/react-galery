import React from 'react';
import Img from './Img';
import BigShow from './BigShow';
import ScrollButton from './ScrollButton';

const galeryWidth = 800;

const Galery = React.createClass({
    getInitialState() {
        return {
            selectImgUrl: '',
            position: 0
        }
    },

    imgSelect(e) {
        this.setState({
            selectImgUrl: e.target.src
        })
    },

    galeryStyle: {
        display: 'flex',
        flexDirection: 'column'
    },

    clickHandlerLeft() {
        if (this.state.position < 0) this.setState({ position: this.state.position + 140 });
    },

    clickHandlerRight() {
        if (this.state.position > -galeryWidth - 200) this.setState({ position: this.state.position - 140 });
    },

    render() {
        let galeryListStyle = {
            'width': galeryWidth + 'px',
            'margin': 'auto',
            'overflow': 'hidden',
            'userSelect': 'none',
            'WebkitUserSelect': 'none',
            'position': 'relative'
        }

        let galeryListScrollStyle = {
            'display': 'flex',
            'flexWrap': 'nowrap',
            'position': 'relative',
            'left': this.state.position + 'px',
            'transition': 'all 0.5s ease-in-out'
        }

        return ( <
            div style = { this.galeryStyle } >
            <
            div className = "galery_min"
            style = { galeryListStyle } >
            <
            ScrollButton onClick = { this.clickHandlerLeft }
            /> <
            div className = "galery_min-scroll"
            style = { galeryListScrollStyle } >

            {
                this.props.initGalery.map((item, i) => {
                    return <Img key = { i }
                    keyD = { i }
                    srcData = { item }
                    imgSelect = { this.imgSelect }
                    settings = { this.props.settings }
                    />          
                })
            }

            <
            /div> <
            ScrollButton direction = { 'right' }
            onClick = { this.clickHandlerRight }
            /> <
            /div> <
            div >
            <
            BigShow selectImgUrl = { this.state.selectImgUrl }
            settings = { this.props.settings }
            /> <
            /div> <
            /div>
        )
    }
})

export default Galery;