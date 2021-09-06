import axios from "axios";
import React from "react";
import './App.css';
import { Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      lat: '',
      lon: '',
      displayName: '',
      displayErr: false,
      newtext:false,


    }
  }

  getdata = async (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${location}&format=json`
    try {

      let getsourse = await axios.get(url);
      this.setState({
        lat: getsourse.data[0].lat,
        lon: getsourse.data[0].lon,
        displayName: getsourse.data[0].display_name,
        newtext:true
        
      })
    }
    catch {
      this.setState({
        displayErr: true,
        newtext: false,
      })
    }
  }

render() {

  return (
    <>
      <body className="body">
        <header className="Head">City Explorer </header>

        <Form className="Form" onSubmit={this.getdata}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter placeName</Form.Label>
            <Form.Control  name="location" type="text" placeholder="Enter placeName" />

          </Form.Group>
          <Button type="submit">
            Explore!
          </Button>
        </Form>

        {this.state.newtext && <h1>Welcome To {this.state.displayName} </h1>}

      {this.state.newtext &&  <p> {this.state.displayName} is located at {this.state.lat} by  {this.state.lon}</p>}

        {this.state.displayErr && <p>Error: Status Code: 400, 404, 500</p>}

        {this.state.newtext &&  <Image className="image" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.lat},${this.state.lon}&zoom=[1to18]`} fluid />}



        <footer className='footer' >&copy; Rihan Foudeh</footer>      </body>


    </>

  );
}
}



export default App;