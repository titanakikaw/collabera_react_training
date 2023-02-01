/* eslint-disable react/no-unused-state */
import React, { Component, createRef } from 'react';
import CityClearBtn from './CityClearBtn';
import CityForm from './CityForm';
import CityInfo from './CityInfo';
import './weather.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class index extends Component {
  state = {
    Cities: [],
    City: null,
    error: null,
  };

  cityText = createRef();

  async componentDidMount() {
    await this.loadCities();
  }

  loadCities = async () => {
    try {
      const res = await fetch('http://localhost:3000/WeatherList');
      const json = await res.json();
      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      this.setState({ Cities: json });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  getCity = async e => {
    e.preventDefault();
    const name = this.cityText.current.value;
    const { Cities } = this.state;
    const city = Cities.find(x => x.Name === name);
    if (city) {
      this.setState({ City: city, error: null });
    } else {
      this.setState({ City: null, error: 'No city matched the search !' });
    }
  };

  clearCity = () => {
    this.setState({ City: null, error: null });
    this.cityText.current.value = null;
  };

  render() {
    const { City, error } = this.state;
    return (
      <div className="todo">
        <CityForm getCity={this.getCity} ref={this.cityText} />
        {error && (
          <h1 style={{ fontWieght: 'bold', color: 'red' }}> {error}</h1>
        )}

        {City && (
          <div className="todo__detailContainer">
            <CityInfo CityInfo={City} />
            <CityClearBtn clearCity={this.clearCity} />
          </div>
        )}
      </div>
    );
  }
}
