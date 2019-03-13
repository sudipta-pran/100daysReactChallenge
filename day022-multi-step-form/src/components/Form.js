import React, { Component } from 'react'
import PersonalDetails from './PersonalDetails'
import ProfessionalDetails from './ProfessionalDetails'
import Confirm from './Confirm'
import Success from './Success'

export default class Form extends Component {
  state = {
      step: 1,
      firstName: '',
      lastName: '',
      age: '',
      gender : '',
      maritalStatus: '',
      occupation: '',
      education: '',
      income: ''
  }

  prevStep = () => {
      this.setState({
          step: this.state.step - 1
      })
  }

  nextStep = () => {
        this.setState({
            step: this.state.step + 1
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

  render() {
      const { step, firstName, lastName, age, gender, maritalStatus, occupation, education, income } = this.state
      const personal = {firstName, lastName, age, gender, maritalStatus}
      const professional = {occupation, education, income}

      switch(step){
          case 1:
            return (
                <PersonalDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    value={personal}
                />
            )
            case 2:
              return (
                  <ProfessionalDetails
                    prevStep={this.prevStep}
                      nextStep={this.nextStep}
                      handleChange={this.handleChange}
                      value={professional}
                  />
              )
              case 3:
                return (
                    <Confirm
                    prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        value={{...personal, ...professional}}
                    />
                )
                case 4:
                  return (
                      <Success />
                  )
                default:
                    return
      }
    
  }
}
