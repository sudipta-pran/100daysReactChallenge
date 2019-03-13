import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import '../App.css';

 class PersonalDetails extends Component {
  
  render() {
      const { value, handleChange, nextStep } = this.props
    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title="Enter Personal Details" />
              <TextField
                hintText="Enter Your First Name"
                floatingLabelText="First Name"
                onChange={handleChange}
                name="firstName"
                defaultValue={value.firstName}
              /><br/>
              <TextField
                hintText="Enter Your Last Name"
                floatingLabelText="Last Name"
                onChange={handleChange}
                name="lastName"
                defaultValue={value.lastName}
              /><br/>
              <TextField
                hintText="Enter Your Age"
                floatingLabelText="Age"
                onChange={handleChange}
                name="age"
                defaultValue={value.age}
              /><br/>
              <TextField
                hintText="Enter Your Gender"
                floatingLabelText="Gender"
                onChange={handleChange}
                name="gender"
                defaultValue={value.gender}
              /><br/>
              <TextField
                hintText="Enter Your Marital Status"
                floatingLabelText="Marital Status"
                onChange={handleChange}
                name="maritalStatus"
                defaultValue={value.maritalStatus}
              /><br/>
              <RaisedButton
                className="materialBtn"
                label="Continue"
                primary={true}
                onClick={nextStep}
                />
          </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default PersonalDetails
