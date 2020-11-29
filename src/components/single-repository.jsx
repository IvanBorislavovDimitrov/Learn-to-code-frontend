import React, { Component } from 'react';

class SingleRepository extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repositoryName: null,
            description: null,
            createdAt: null,
            updatedAt: null,
            fullName: null,
            htmlUrl: null
        };
    }

    render() {
        return (
            <React.Fragment>
                <div className="container justify-content text-center mt-5 mb-5 card">
                    <h1 className="mt-5">Име на хранилището: {this.state.repositoryName}</h1>
                    <h1>Описание: {this.state.descritpion}</h1>
                    <h1>Създадено на: {this.state.createdAt}</h1>
                    <h1>Променено на: {this.state.updatedAt}</h1>
                    <h1>Пълно име: {this.state.fullName}</h1>
                    <h1 className="mb-5">Линк: <a href={this.state.htmlUrl}>натисни</a></h1>
                </div>
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.getRepository();
    }

    getRepository = () => {
        const repositoryName = this.getRepositoryName();
        fetch(process.env.REACT_APP_URL + '/github/repositories/' + repositoryName, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(async response => {
            const jsonResponse = await response.json();
            let repositoryMap = JSON.parse(JSON.stringify(jsonResponse));
            this.setState({
                repositoryName: repositoryMap['name'],
                descritpion: repositoryMap['description'],
                createdAt: repositoryMap['created_at'],
                updatedAt: repositoryMap['updated_at'],
                fullName: repositoryMap['full_name'],
                htmlUrl: repositoryMap['html_url']
            });
        }).catch(error => {
            console.log(error);
        })
    }

    getRepositoryName = () => {
        const splitUrl = window.location.href.split('/');
        return decodeURIComponent(splitUrl[splitUrl.length - 1]);
    }

}

export default SingleRepository;