import React, {Component} from 'react';


export default class AccountHome extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="col-md-18 dashboard">
                <div className="row">
                    <div className="col-xs-8 no-gutter">
                        <div className="card">
                            <img src="/images/placeholders/dashboard-main.jpg" className="img-responsive" />
                            <div className="card__footer">
                                <img src="/images/placeholders/dashboard-spacer-400x200.jpg" className="img-responsive" />
                                <div className="card__actions">
                                    <ul>
                                        <li>Mr Richard Lowes, tel (07788 666758) <a href="">edit</a></li>
                                        <li><a href="">Change password</a></li>
                                        <li><a href="">Change profile photo</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="media-object">
                            <div className="media-object__img media-object__img--right">
                                <img src="/images/placeholders/dashboard-200x200.jpg" className="img-responsive" />
                            </div>
                            <div className="media-object__content">
                                <div className="info-box">
                                    info
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-8 no-gutter">
                        <div className="media-object">
                            <div className="media-object__img">
                                <img src="/images/placeholders/dashboard-200x200.jpg" className="img-responsive" />
                            </div>
                            <div className="media-object__content">
                                <div className="info-box">
                                    info
                                </div>
                            </div>
                        </div>
                        <div className="media-object">
                            <div className="media-object__img media-object__img--right">
                                <img src="/images/placeholders/dashboard-200x200.jpg" className="img-responsive" />
                            </div>
                            <div className="media-object__content">

                            </div>
                        </div>
                        <img src="/images/placeholders/dashboard-400x400.jpg" className="img-responsive" />
                    </div>

                    <div className="col-xs-8 no-gutter">
                        <div className="card">
                            <img src="/images/placeholders/dashboard-400x200.jpg" className="img-responsive" />
                            <div className="card__footer">
                                <img src="/images/placeholders/dashboard-spacer-400x200.jpg" className="img-responsive" />
                                <div className="card__actions">
                                    <ul>
                                        <li>Mr Richard Lowes, tel (07788 666758) <a href="">edit</a></li>
                                        <li><a href="">Change password</a></li>
                                        <li><a href="">Change profile photo</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            
                            <div className="card__footer">
                                <img src="/images/placeholders/dashboard-spacer-400x200.jpg" className="img-responsive" />
                                <div className="card__actions">
                                    <ul>
                                        <li>Mr Richard Lowes, tel (07788 666758) <a href="">edit</a></li>
                                        <li><a href="">Change password</a></li>
                                        <li><a href="">Change profile photo</a></li>
                                    </ul>
                                </div>
                            </div>
                            <img src="/images/placeholders/dashboard-400x200.jpg" className="img-responsive" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}