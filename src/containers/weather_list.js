import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartItem from "../components/chart";
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

    renderWeather(cityData) {
        const city = cityData.city.name;
        const tempValue = cityData.list.map(weather => weather.main.temp= Math.round(weather.main.temp - 273.15));
        const pressureValue = cityData.list.map(pressure => pressure.main.pressure);
        const humidityValue = cityData.list.map(humidity => humidity.main.humidity);
        const {lon, lat } = cityData.city.coord;

        return(
            <tr key={city}>
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                </td>
                <td><ChartItem data={tempValue} color="green" units="C"/></td>
                <td><ChartItem data={pressureValue} color="red" units="hPa"/></td>
                <td><ChartItem data={humidityValue} color="blue" units="%"/></td>
            </tr>
        )
    };

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (celsius)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(WeatherList);