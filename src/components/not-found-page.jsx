import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex justify-content-center mt-5 mb-5">
                <h1>The Requested page was not found!</h1>
                </div>
            </React.Fragment>
        );
    }
}

export default NotFound;