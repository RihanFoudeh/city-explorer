import axios from "axios";
import React from "react";
import './App.css';
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
      <body className="body">
      <header className="Head">City Explorer </header>

        <Form className="Form" onSubmit={this.getdata}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter placeName</Form.Label>
            <Form.Control id="control"  name="location" type="text" placeholder="Enter placeName" />

          </Form.Group>
          <Button  type="submit">
            Explore!
          </Button>
        </Form>
<h1>Welcome To {this.state.displayName} </h1>
      <p> {this.state.displayName} is located at {this.state.lat} by  {this.state.lon}</p>
      {/* <p>Lat : </p>
      <p>Lon :</p> */}

      <Image className="image" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.lat},${this.state.lon}&zoom=[1 to 18]`}  fluid />



      <footer className='footer' >&copy; Rihan Foudeh</footer>      </body>


      </>

    );
  }
}


export default App;