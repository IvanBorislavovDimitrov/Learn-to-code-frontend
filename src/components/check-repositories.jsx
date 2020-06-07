import React, { Component } from 'react'

class CheckRepositories extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="col-md-8 mt-4 container">
                    <h2 className="text-center">Вашите хранилища в GitHub</h2>
                    <table className="table table-bordered table-dark mt-4">

                        <thead>
                            <tr>
                                <th scope="col">Номер</th>
                                <th scope="col">Име</th>
                                <th scope="col">Описание</th>
                                <th scope="col">Създадена на</th>
                                <th scope="col">Обновена на</th>
                                <th scope="col">Действия</th>
                            </tr>
                        </thead>
                        <tbody id="repositories">
                            <tr id="loading">
                                <td><div class="spinner-border text-warning" role="status"></div></td>
                                <td><div class="spinner-border text-warning" role="status"></div></td>
                                <td><div class="spinner-border text-warning" role="status"></div></td>
                                <td><div class="spinner-border text-warning" role="status"></div></td>
                                <td><div class="spinner-border text-warning" role="status"></div></td>
                                <td><div class="spinner-border text-warning" role="status"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.getUserRepositories();
    }

    getUserRepositories = () => {
        const currentThis = this;
        fetch(process.env.REACT_APP_URL + '/github/repositories', {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            if (response.status === 401) {
                currentThis.props.history.push('/user/login');
                window.location.reload();
                return;
            }
            const jsonResponse = await response.json();
            let repositories = JSON.parse(JSON.stringify(jsonResponse));
            let count = 0;
            repositories.forEach(repository => {
                const tr = document.createElement('tr');
                const th = document.createElement('th');
                th.textContent = ++count + '';
                const repositoryName = document.createElement('td');
                repositoryName.textContent = repository['name'];
                const repositoryDescription = document.createElement('td');
                if (repository['description'] !== null) {
                    repositoryDescription.textContent = repository['description'];
                } else {
                    repositoryDescription.textContent = "Няма информация!";
                }
                const createdAt = document.createElement('td');
                createdAt.textContent = repository['created_at'];
                const updatedAt = document.createElement('td');
                updatedAt.textContent = repository['updated_at'];
                const tdButton = document.createElement('td');
                const checkRepositoryButton = document.createElement('a');
                checkRepositoryButton.setAttribute('class', 'btn btn-warning btn-sm');
                checkRepositoryButton.textContent = 'Виж';
                checkRepositoryButton.href = '/github/single-repository/' + repository['name'];
                tdButton.appendChild(checkRepositoryButton);
                tr.appendChild(th);
                tr.appendChild(repositoryName);
                tr.appendChild(repositoryDescription);
                tr.appendChild(createdAt);
                tr.appendChild(updatedAt);
                tr.appendChild(tdButton);
                const repositoriesElement = document.getElementById('repositories');
                repositoriesElement.appendChild(tr);
            });
            document.getElementById('loading').innerHTML = '';
        }).catch(error => {
            console.log(error);
        });
    }
}

export default CheckRepositories;