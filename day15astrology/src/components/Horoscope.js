import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchHoroscope} from '../actions/horoscopeActions'
import './Horoscope.css'

class Horoscope extends Component {
    
  render() {
    let item
      if(this.props.horoscope.sign){
         item = <div>
           <h1>Your Horoscope data</h1>
           <ul>
             <li>Your Sign: <strong>{this.props.horoscope.sign}</strong></li>
             <li>Your Name Alphabet: <strong>{this.props.horoscope.name_alphabet}</strong></li>
             <li>Your Sign Lord: <strong>{this.props.horoscope.SignLord}</strong></li>
             <li>Your Naksahtra: <strong>{this.props.horoscope.Naksahtra}</strong></li>
             <li>Your NaksahtraLord: <strong>{this.props.horoscope.NaksahtraLord}</strong></li>
             <li>The Yog: <strong>{this.props.horoscope.Yog}</strong></li>
             <li>The Tithi: <strong>{this.props.horoscope.Tithi}</strong></li>
           </ul>
        </div>
      }else{
        item = <h1>Fill the details above</h1>
      }
    return (
      <div className="Horoscope">
        {item}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    horoscope: state.horoscope.horoscope
})

export default connect(mapStateToProps, {fetchHoroscope})(Horoscope)
