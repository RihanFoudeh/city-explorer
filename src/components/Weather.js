import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';
import Weathertable from './WeatherDay';

class Weather extends React.Component {
    render() {
        return (
            <>
                {this.props.weatherData.map( (item,i) => {
                    return (
                        <Weathertable
                        i={i +1}
                        date={item.date}
                        description={item.description}
                        />
                    )
                })}

                {this.props.weatherErr && <p>Status Code: 400, 404, 500</p>}
            </>
        )
    }
}

export default Weather;