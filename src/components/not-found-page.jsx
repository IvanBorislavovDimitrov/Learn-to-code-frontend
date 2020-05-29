import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <h1>Сраницата, която се опитвате да отворите не съществува!</h1>
                </div>
            </React.Fragment>
        );
    }
}

export default NotFound;