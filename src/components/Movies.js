import React, { Component } from 'react';
import './Movie.css';
import Moviecard from './Movie';
class Movie extends Component {

    render() {
        return (
            <>
                {this.props.movieData.map(item => {
                    return (
                        <Moviecard
                            title={item.title}
                            overview={item.overview}
                            average_votes={item.average_votes}
                            total_votes={item.total_votes}
                            image_url={item.image_url}
                            popularity={item.popularity}
                            released_on={item.released_on}
                        />
                    );

                })
                }
            </>

        );
    }
}

export default Movie;