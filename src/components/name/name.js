import React from 'react';
import './name.sass'
import Button from '../button/button';

class Name extends React.Component {

    handlesubmit = (e) => {
        e.preventDefault()
        this.props.next()
    }

    render() {
        return (
            <div className="nameComponent">
                <p className="join">Join the list</p>

                <form onSubmit={this.handlesubmit} className="nameForm">
                    <p className="formInstruction">almost done! please enter your first and last name</p>
                    <input
                        id="firstName"
                        type="text"
                        defaultValue={this.props.fName}
                        onChange={this.props.changeEvent}
                        placeholder="First Name"
                        required />
                    <input
                        id="lastName"
                        type="text"
                        defaultValue={this.props.lName}
                        onChange={this.props.changeEvent}
                        placeholder="Last Name"
                        required />
                    <Button buttonName={'SIGN UP'} />
                </form>
            </div>
        )
    }
}

export default Name;