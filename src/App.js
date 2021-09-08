import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './components/Weather';
import Movie from './components/Movies';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: '',
      lat: '',
      lon: '',
      cityName: '',
      weatherData: [],
      movieData: [],
      displayErr: false,
      showtext: false,
      weatherErr: false,
    }
  }


  getInputData = async (event) => {
    event.preventDefault();
    const locationName = event.target.location.value;

    console.log(locationName);
    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${locationName}&format=json`;
    try {
      const respone = await axios.get(url);
      // console.log(respone);
      this.setState({
        location: respone.data[0].display_name,
        lon: respone.data[0].lon,
        lat: respone.data[0].lat,
        showtext: true,
        displayErr: false,
        cityName: locationName,
      })

      // console.log(this.state.lat);
    }
    catch
    {
      console.log('err');
      this.setState({
        displayErr: true,
        showtext: false,
      })
    }
    this.getWeatherData();
    this.getMovieData();
  }

  getWeatherData = async () => {

    const url = `https://city-explorer-lab007.herokuapp.com/weather?searchQuery=${this.state.cityName}`;
    console.log(url);
    const WearherRes = await axios.get(url);
    if (!(WearherRes.data === '404 Not Found')) {

      console.log(WearherRes);

      this.setState({
        weatherErr: false,
        weatherData: WearherRes.data,
      })
    } else {
      this.setState({
        weatherErr: true,
      })
      console.log('err');

    }
  }

  getMovieData = async () => {

    const url = `https://city-explorer-lab007.herokuapp.com/movies?searchQuery=${this.state.cityName}`;
    axios
      .get(url)
      .then(result => {
        this.setState({
          movieData: result.data,
        })
        console.log(this.state.movieData);
      })
      .catch(err => console.log(err))

  }



  render() {
    return (
      <>
        <body className='body'>
          <header className='header' >City Explorer</header>
          <Form className='form' onSubmit={this.getInputData}>
            <Form.Group className="mb-3" controlId="place" >
              <Form.Label>Place Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Place Name" name="location" />
            </Form.Group>

            <Button variant="primary" type="submit" >
              Explore!
            </Button>
          </Form>
          {this.state.showtext && <h1>Welcome to {this.state.location}</h1>}

          {this.state.showtext && <p className='para'>Location Name: {this.state.location}, at latitude: {this.state.lat}, by longitude: {this.state.lon}</p>}
          {this.state.showtext && <Image className='image' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.lat},${this.state.lon}&zoom=1-18`} fluid />}

          {this.state.displayErr && <p className='error'>Error: Status Code: 400, 404, 500</p>}

          <Weather
            weatherData={this.state.weatherData}
            weatherErr={this.state.weatherErr}

          />
          <Row className="justify-content-between" className='row'>
            
              <Movie
               movieData={this.state.movieData}
              />

          </Row>


          <footer className='footer' >&copy; Riahn Foudeh</footer>
        </body>
      </>
    )

  }

}

export default App;