import Weather from "./components/Weather";
import Form from "./components/Form";
import React, { Component } from "react";
import "./styles.css";
class App extends Component {
  state = {
    tempreature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    erorr: ""
  };
  GetWeather = async (e) => {
    //to stop page reloading..[e.preventDefault()]
    e.preventDefault();
    //to link between inputs and fech
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=501f0b0bf6379a3d9f79b12fa14f8b6f`;
    //to get data
    const api = await fetch(url);
    const data = await api.json();
    if (city && country) {
      this.setState({
        tempreature: data.main.temp,
        city: data.name,
        country: data.sys.counrty,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        erorr: ""
      });
    } else {
      this.setState({
        tempreature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        erorr: "Empty inputs"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <Form GetWeather={this.GetWeather} />
        <Weather
          tempreature={this.state.tempreature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          erorr={this.state.erorr}
        />
      </div>
    );
  }
}

export default App;
