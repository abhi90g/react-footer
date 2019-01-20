import React, { Component } from 'react';
import Email from '../components/email/email';
import Name from '../components/name/name';
import Thankyou from '../components/thankyou/thankyou';

class FormSignup extends Component {
    state = {
        step: 1,
        email: '',
        emailError: false,
        firstName: '',
        firstNameError: false,
        lastName: '',
        lastNameError: false
    }

    next = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input]: event.target.value })
    }

    render() {
        const { email, emailError, firstName, firstNameError, lastName, lastNameError } = this.state
        const values = { email, emailError, firstName, firstNameError, lastName, lastNameError }
        switch (this.state.step) {
            case 1:
                return <Email
                    next={this.next}
                    email={values.email}
                    error={values.emailError}
                    changeEvent={this.handleChange} />
            case 2:
                return <Name
                    next={this.next}
                    fName={values.firstName}
                    fNameError={values.firstNameError}
                    lName={values.lastName}
                    lNameError={values.lastNameError}
                    changeEvent={this.handleChange} />
            case 3:
                return <Thankyou />
            default:
                return;
        }
    }
}

export default FormSignup;