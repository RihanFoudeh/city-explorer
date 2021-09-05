import axios from "axios";
import React from "react";

import { Form, Button , Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {


constructor (props){
  super(props);

  this.state={

    lat:'',
    lon:'',
    displayName:'',
    mapFlag:false,
    displayErr:false,



  }
}

getdata = async (event)  =>{

  event.preventDefault();


  const  location =event.target.location.value;

// console.log(location);


const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${location}&format=json`




let getsourse = await axios.get(url);



this.setState({

lat:getsourse.data[0].lat ,
lon:getsourse.data[0].lon,
displayName:getsourse.data[0].display_name


// 




})
console.log(this.state.lat);

}






  render() {

    return (



      <>

        <Form onSubmit={this.getdata}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter placeName</Form.Label>
            <Form.Control name="location" type="text" placeholder="Enter placeName" />

          </Form.Group>
          <Button type="submit">
            Explore!
          </Button>
        </Form>

      <p>Display name : {this.state.displayName}</p>
      <p>Lat : {this.state.lat}</p>
      <p>Lon : {this.state.lon}</p>



      </>



    );
  }
}


export default App;