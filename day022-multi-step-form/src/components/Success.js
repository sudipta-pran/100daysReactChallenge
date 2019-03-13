import React from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default function Success() {
  return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title="Successfully Submitted" />
              <div>
                <h1>Thank You for Choosing Us</h1>
              </div>
          </React.Fragment>
      </MuiThemeProvider>    
  )
}
