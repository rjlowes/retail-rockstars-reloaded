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
                    <label htmlFor="email" className="form-group__label">Email</label>
                    <div className="form-group__input">
                        <input type="email" name="email" id="email" className="form-input" placeholder="email@example.com" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-group__label">Password</label>
                    <div className="form-group__input">
                        <input type="password" name="password" id="password" className="form-input" placeholder="Your password" onChange={this.handleChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn--block">Sign in</button>
            </form>
        );
    }
}

LoginForm.propTypes = {
    user: PropTypes.object,
    parentSubmit: PropTypes.func
};
