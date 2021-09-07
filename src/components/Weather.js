import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';

class Weather extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         date1:'',
    //     }
    // }

    // getWeatherData = ()=>{
    //     this.setState({
    //         date1:this.props.weatherData[0].date
    //     })
    // }

    // day={this.state.day}
    //     day2={this.state.day2}
    //     day3={this.state.day3}
    //     description={this.state.description}
    //     description2={this.state.description2}
    //     description3={this.state.description3}


    render() {



        return (
            <>
                <br></br>

                {this.props.weatherData.map( (item,i) => {
                    return (
                        <>
                            <Table striped bordered hover>
                                <thead className='thead'>
                                    <tr>
                                        <th>Day</th>
                                        <th>Date</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{i +1}</td>
                                        <td>{item.date}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </>
                    )
                })}

                {this.props.weatherErr && <p>Status Code: 400, 404, 500</p>}
            </>
        )
    }
}

export default Weather;