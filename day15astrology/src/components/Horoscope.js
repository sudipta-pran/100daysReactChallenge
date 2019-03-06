import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchHoroscope} from '../actions/horoscopeActions'

class Horoscope extends Component {
    componentWillMount(){
        const data = {
            "year": 1992,
            "month": 7,
            "day": 22,
            "hour": 9,
            "min": 21,
            "lat": 25.31668,
            "lon": 83.01042,
            "tzone": 5.5
            }
        this.props.fetchHoroscope(data)
    }
  render() {
    let item
      if(this.props.horoscope){
         item = this.props.horoscope.sunrise
      }
    return (
      <div>
        {item}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    horoscope: state.horoscope.horoscope
})

export default connect(mapStateToProps, {fetchHoroscope})(Horoscope)
