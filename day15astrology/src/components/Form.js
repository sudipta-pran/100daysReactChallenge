import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchHoroscope} from '../actions/horoscopeActions'
import './Form.css'

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      "year": '',
      "month": '',
      "day": '',
      "hour": '',
      "min": '',
      "lat": '',
      "lon": ''
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = () => {
    const data = {
      "year": this.state.year === '' ? 1992 : this.state.year,
      "month": this.state.month === '' ? 7 : this.state.month,
      "day": this.state.day === '' ? 22 : this.state.day,
      "hour": this.state.hour === '' ? 9 : this.state.hour,
      "min": this.state.min === '' ? 21 : this.state.min,
      "lat": this.state.lat === '' ? 26.188429 : this.state.lat,
      "lon": this.state.lon === '' ? 91.743949 : this.state.lon,
      "tzone": 5.5
      }
  this.props.fetchHoroscope(data)
  }
  render() {
    return (
      <div className="Form">
        <h1>Fill the following with appropriate details. Leave blank to use default values.</h1>
        <label>Date of birth</label><br/>
        <input name="day" placeholder="Day, e.g. 15" value={this.state.day} onChange={this.handleChange}/> | 
        <input name="month" placeholder="Month, e.g. 3" value={this.state.month} onChange={this.handleChange}/> | 
        <input name="year" placeholder="Year, e.g. 2010" value={this.state.year} onChange={this.handleChange}/><br/>
        <label>Time of birth (Default 9:21 a.m.)</label><br/>
        <input name="hour" placeholder="Hour (24hr format), e.g. 15" value={this.state.hour} onChange={this.handleChange}/> | 
        <input name="min" placeholder="Minute, e.g. 30"  value={this.state.min} onChange={this.handleChange}/><br/>
        <label>Place of birth (Default Guwahati, 26.188429, 91.743949)</label><br/>
        <input name="lat" placeholder="Latitude, e.g. 26.188429" value={this.state.lat} onChange={this.handleChange}/> | 
        <input name="lon" placeholder="Longitude, e.g. 91.743949"  value={this.state.lon} onChange={this.handleChange}/><br/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default connect(null, {fetchHoroscope})(Form)