import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default class ChartItem extends Component {
    render() {
        return (
            <div>
                <Sparklines data={this.props.data} svgHeight={150} svgWidth={200}>
                    <SparklinesLine color={this.props.color} />
                </Sparklines>
            </div>
        );
    }
}