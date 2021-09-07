import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class Weather extends React.Component{
  
    render(){
        
        return(
            <>
            <br></br>
                
                {this.props.weatherData.map(item=>{
                    return ( 
                    <>
                    <p>date: {item.date}</p>
                    <p>description: {item.description}</p>
                    </>
                    )
                })}

                {this.props.weatherErr && <p>Status Code: 400, 404, 500</p>}
            </>
        )
    }
}

export default Weather;