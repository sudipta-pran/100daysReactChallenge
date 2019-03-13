import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class ProfessionalDetails extends Component {
    render() {
        const { value, handleChange, nextStep, prevStep } = this.props
      return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter Professional Details" />
                <TextField
                  hintText="Enter Your Education"
                  floatingLabelText="Education"
                  onChange={handleChange}
                  name="education"
                  defaultValue={value.education}
                /><br/>
                <TextField
                  hintText="Enter Your Occupation"
                  floatingLabelText="Occupation"
                  onChange={handleChange}
                  name="occupation"
                  defaultValue={value.occupation}
                /><br/>
                <TextField
                  hintText="Enter Your Income"
                  floatingLabelText="Income"
                  onChange={handleChange}
                  name="income"
                  defaultValue={value.income}
                /><br/>
               <RaisedButton
                className="materialBtn"
                  label="Back"
                  onClick={prevStep}
                  /> 
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
