import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
    return _.round(_.sum(data)/data.length)
}

export default class ChartItem extends Component {
    render() {
        return (
            <div>
                <Sparklines data={this.props.data} svgHeight={150} svgWidth={200}>
                    <SparklinesLine color={this.props.color} />
                    <SparklinesReferenceLine type="avg"/>
                </Sparklines>
                <div>
                    <p>Average value: {average(this.props.data)} {this.props.units} </p>
                </div>
            </div>
        );
    }
}