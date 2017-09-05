import React, {Component} from 'react';


export default class Search extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.refs.reveal.classList.toggle('c-togglebox__main--show');
        this.refs.toggle.classList.toggle('c-togglebox__btn--show');
    }

    render() {
        return (
            <div className="c-togglebox">
                <form role="search" className="search c-togglebox__main" ref="reveal">
                    <label htmlFor="keywords" className="sr-hidden">Search</label>
                    <div className="form-compact__wrap">
                        <input type="search" results="5" name="keywords" placeholder="Search your style" value="" className="form-input form-input--ext" />
                        <button type="submit" className="form-compact__btn">
                            S
                        </button>
                    </div>
                </form>
                <button ref="toggle" className="c-togglebox__btn" onClick={this.toggle}>

                </button>
            </div>
        );
    }
}