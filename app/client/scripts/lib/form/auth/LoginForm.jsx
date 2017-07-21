import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class LoginForm extends Component {

    constructor(props) {
        super(props);

        // this.state = {email: 'test@123.xom', password: "password"};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.props.user[event.target.name] = event.target.value;
    }

    // TODO validate
    handleSubmit(event) {
        event.preventDefault();
        this.props.parentSubmit();
    }

    render() {
        return (
            <form method="post" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" id="email" className="form-input" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" id="password" className="form-input" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn">Login</button>
            </form>
        );
    }
}

LoginForm.propTypes = {
    user: PropTypes.object,
    parentSubmit: PropTypes.func
};
