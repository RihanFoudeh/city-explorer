import Table from 'react-bootstrap/Table';
import './Movie.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';

class Weathertable extends Component {
    render() {
        return (

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
                                        <td>{this.props.i}</td>
                                        <td>{this.props.date}</td>
                                        <td>{this.props.description}</td>
                                    </tr>
                                </tbody>
                            </Table>

        );
    }
}

export default Weathertable;