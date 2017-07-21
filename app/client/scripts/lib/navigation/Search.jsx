import React, {Component} from 'react';


export default class Search extends Component {

    render() {
        return (
            <form role="search" className="search">
                <label htmlFor="keywords" className="sr-hidden">Search</label>
                <div className="form-compact__wrap">
                    <input type="search" results="5" name="keywords" placeholder="What's your search term?" value="" className=" form-control form-control--ext" />
                    <button type="submit" className="form-compact__btn">
                        S
                    </button>
                </div>
            </form>
        );
    }
}