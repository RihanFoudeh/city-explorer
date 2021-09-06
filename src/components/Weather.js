import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class Weather extends React.Component{
    render(){
        
        return(
            <>
            <br></br>
                {!(this.props.weatherErr) && this.props.day &&  <p>date: {this.props.day}</p>}
                {!(this.props.weatherErr)&&this.props.description && <p>description: {this.props.description}</p>}
                <br></br>
                {!(this.props.weatherErr) && this.props.day2 &&<p>date: {this.props.day2}</p>}
                {!(this.props.weatherErr)&&this.props.description2 && <p>description: {this.props.description2}</p>}
                <br></br>
                {!(this.props.weatherErr) &&this.props.day3 && <p>date: {this.props.day3}</p>}
                {!(this.props.weatherErr)&&this.props.description3 && <p>description: {this.props.description3}</p>}
                {this.props.weatherErr && <p>Status Code: 400, 404, 500</p>}
            </>
        )
    }
}

export default Weather;