import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export default class Confirm extends Component {
    render() {
        const { value, nextStep, prevStep } = this.props
      return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Confirm Details" />
                <List>
                    <ListItem 
                        primaryText="First Name"
                        secondaryText={value.firstName}
                    />
                    <ListItem 
                        primaryText="Last Name"
                        secondaryText={value.lastName}
                    />
                    <ListItem 
                        primaryText="Age"
                        secondaryText={value.age}
                    />
                    <ListItem 
                        primaryText="Gender"
                        secondaryText={value.gender}
                    />
                    <ListItem 
                        primaryText="Marital Status"
                        secondaryText={value.maritalStatus}
                    />
                    <ListItem 
                        primaryText="Education"
                        secondaryText={value.education}
                    />
                    <ListItem 
                        primaryText="Occupation"
                        secondaryText={value.occupation}
                    />
                    <ListItem 
                        primaryText="Salary"
                        secondaryText={value.income}
                    />
                </List>
                <br/>
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
