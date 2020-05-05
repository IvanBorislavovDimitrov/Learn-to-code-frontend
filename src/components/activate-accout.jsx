import React, {Component} from 'react';

class ActivateAccount extends Component {

    render() {
        return (
            <React.Fragment>
                <h1 className="text-center">Your account has been activated! You will be redirected in just a
                    moment.</h1>
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.activateAccount();
    }

    activateAccount = () => {
        const username = this.getUsername();
        fetch(process.env.REACT_APP_URL + '/users/activate/' + username, {
            method: 'POST',
            credentials: 'include'
        }).then(async response => {
            await response.json();
            if (response.status !== 200) {
                alert('Something went wrong!');
                return;
            }
            this.props.history.push('/users/login');
            window.location.reload();
        }).catch(error => {
            console.log(error);
        });
    }

    getUsername = () => {
        const splitUrl = window.location.href.split('/');
        return decodeURIComponent(splitUrl[splitUrl.length - 1]);
    }
}

export default ActivateAccount;