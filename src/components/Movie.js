import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Movie.css';

class Movie extends Component {

    // title={item.title}
    //         overview={item.overview}
    //         average_votes={item.average_votes}
    //         total_votes={item.total_votes}
    //         image_url={item.image_url}
    //         popularity={item.popularity}
    //         released_on={item.released_on}
    render() {
        return (
            < Card style = {{ width: '18rem' }} className='card'>
                    <Card.Img variant="top" src={this.props.image_url} className='cardimage'/>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.overview}
                        </Card.Text>
                        <Card.Text>
                        popularityt: {this.props.total_votes}
                        </Card.Text>
                        <Card.Text>
                            Released Date: {this.props.released_on}
                        </Card.Text>
                        <Card.Text>
                            Average Votes💓: {this.props.average_votes}
                        </Card.Text>
                        <Card.Text>
                            Total Votes: {this.props.total_votes}
                        </Card.Text>                        
                        <a href={this.props.image_url} rel='noreferrer' target='_blank'>Full Poster</a>
                    </Card.Body>
                </Card >

        );
    }
}

export default Movie;