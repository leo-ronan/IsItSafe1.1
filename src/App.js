import React from 'react';
import MyMap from "./component/myMap";
import Heading from "./components/heading";
import Form from "./components/form";
import Forecast from "./components/forecast";
import Local from './components/local';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Jumbotron from './components/jumbotronn';
import Search from './components/search';
import './App.css';
import './components/API-Call';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const api_key = '71bd3c9de51567a495cc45c857ebcaf2';

class App extends React.Component {
  state = {
    tempature: " ",
    City: "",
    Country: "",
    humidity: "",
    description: "",
    icon: "",
    error: ""
  }
  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    if (!(city && country)) {
      return this.setState({
        error: "Please fill out the imput fields properly"
      })
    }
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${api_key}`);

    const response = await api_call.json();
    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      pressure: response.main.pressure,
      icon: response.weather[0].icon,
      description: response.weather[0].description,
      error: ""
    })
  }

  render() {
    return (
      
     

        <>
        
<Navbar />
          <Router>
        <div >
        <Jumbotron />
          <Heading />
         
          <Switch>
            <Route path="/local" component={Local}/>
            
            <Route path="/search" component={Search}/>

            <Route exact path="/">
              <Form loadWeather={this.getWeather} />
              <Forecast
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                pressure={this.state.pressure}
                icon={this.state.icon}
                description={this.state.description}
                error={this.state.error}
              />
            </Route>
            <Route exact path="/home">
              <div className="homeParent">
              <Form loadWeather={this.getWeather} />
              <div className="secondChild">
              <Forecast
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                pressure={this.state.pressure}
                icon={this.state.icon}
                description={this.state.description}
                error={this.state.error}
              />
              <Local />
              
              </div>
             
              </div>
            </Route>
            <Route exact path="/map">
              <MyMap />
              <div id="disasterCount"></div>
              <div id="data"></div>
            </Route>
            <Redirect to="/home"></Redirect>
          </Switch>
        </div>
      </Router>

        </>
        
    );


  }

}

export default App;

