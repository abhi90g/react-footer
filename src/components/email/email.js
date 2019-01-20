import React from 'react';
import './email.sass'
import Button from '../button/button'

class Email extends React.Component {

    handlesubmit = (e) => {
        e.preventDefault()
        this.props.next()
        console.log(this.props)
    }

    render() {
        console.log('email props - ', this.props)
        return (
            <div className="emailComponent">
                <p className="join">Join the list</p>

                <form onSubmit={this.handlesubmit} className="emailForm">
                    <p className="formInstruction">sign up for the tlc newsletter</p>

                    <input
                        id="email"
                        type="email"
                        defaultValue={this.props.email}
                        onChange={this.props.changeEvent}
                        placeholder="enter email address"
                        required />
                    <Button buttonName={'NEXT'} />
                    <div className="disclamer row">
                        <input
                            id="privacyCheck"
                            type="checkbox"
                            onChange={this.props.changeEvent}
                            required />
                        <p className="privacyStatement"> I agree to recieve information from Discovery Communications in accordance with the following <a href="/">Privacy Policy</a></p>
                    </div>
                    
                </form>
            </div>

        )
    }
}


export default Email;