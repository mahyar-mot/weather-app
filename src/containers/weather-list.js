import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from './chart';

class WeatherList extends Component {

    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map( city => city.main.temp);
        const pressures = cityData.list.map( city => city.main.pressure);
        const humidities = cityData.list.map( city => city.main.humidity);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temps} color="orange" units="k"/>
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidities} color="red" units="%"/>
                </td>
            </tr>
        )
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temprature (k)</th>
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