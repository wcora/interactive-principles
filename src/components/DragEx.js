import React, { Component } from 'react';
import Dragula from 'react-dragula';

export default class DragEx extends Component {

    dragulaDecorator(componentBackingInstance) {
        if (componentBackingInstance) {
            let options = { };
            Dragula([componentBackingInstance], options);
        }
    }

    render () {
        return <div className='container' ref={this.dragulaDecorator}>
            <div>Swap me around</div>
            <div>Swap her around</div>
            <div>Swap him around</div>
            <div>Swap them around</div>
            <div>Swap us around</div>
            <div>Swap things around</div>
            <div>Swap everything around</div>
        </div>;
    }
}