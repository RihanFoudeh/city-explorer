import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Weather from './components/Weather';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      location : '',
      lat:'',
      lon:'',
      cityName:'',
      day:'',
      day2:'',
      day3:'',
      description:'',
      description2:'',
      description3:'',
      showERR:false,
      showtheTExt: false,
      errweathwer:false,
    }
  }
  

  getInputData = async (event) =>{
    event.preventDefault();
    const locationName = event.target.location.value;

    console.log(locationName);
    const url = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${locationName}&format=json`;
    try 
    {
    const respone = await axios.get(url);
    // console.log(respone);
    this.setState({
      location:respone.data[0].display_name,
      lon:respone.data[0].lon,
      lat:respone.data[0].lat,
      showtheTExt: true,
      showERR:false,
      cityName:locationName,
    })
    

    // console.log(this.state.lat);
  }
  catch 
  {
    console.log('err');
    this.setState({
      showERR:true,
      showtheTExt: false,
    })
  }
  this.getWeatherData();
  }
  
  getWeatherData = async (event) => {
    
    // const name = event.target.location.value;
    const url = `https://city-explorer-lab007.herokuapp.com/weather?searchQuery=${this.state.cityName}&lat=${this.state.lat}&lon=${this.state.lon}`;
    const WearherRes = await axios.get(url);
    if(!(WearherRes.data === '404 Not Found')){
    
    const date1 = WearherRes.data[0].date;
    const date2 = WearherRes.data[1].date;
    const date3 = WearherRes.data[2].date;
    const des1 = WearherRes.data[0].description;
    const des2 = WearherRes.data[1].description;
    const des3 = WearherRes.data[2].description;



    console.log(WearherRes);

    this.setState({
      day:date1,
      day2:date2,
      day3:date3,
      description:des1,
      description2:des2,
      description3:des3,
      errweathwer:false,
    })

  }else{
    this.setState({
    errweathwer:true,
    })
    console.log('err');

  }
  }
  


  render() {
    return (
      <>      
      <body className='body'>
      <header className='header' >City Explorer</header>
        <Form className='form'  onSubmit={this.getInputData}>
          <Form.Group className="mb-3" controlId="place" >
            <Form.Label>Place Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Place Name" name="location" />
          </Form.Group>

          <Button variant="primary" type="submit" >
            Explore!
          </Button>
        </Form>
        {this.state.showtheTExt && <h1>Welcome to {this.state.location}</h1>}

        {this.state.showtheTExt && <p className='para'>Location Name: {this.state.location}, at latitude: {this.state.lat}, by longitude: {this.state.lon}</p>}
        {this.state.showtheTExt && <Image className='image' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY}&center=${this.state.lat},${this.state.lon}&zoom=1-18`} fluid />}

        {this.state.showERR && <p className='error'>Error: Status Code: 400, 404, 500</p>}
       
        <Weather 
        day={this.state.day}
        day2={this.state.day2}
        day3={this.state.day3}
        description={this.state.description}
        description2={this.state.description2}
        description3={this.state.description3}
        weatherErr={this.state.errweathwer}
        
        
        />
        
      <footer className='footer' >&copy; RIHAN FOUDEH</footer>
      </body>
</>
    )

  }

}
export default App;