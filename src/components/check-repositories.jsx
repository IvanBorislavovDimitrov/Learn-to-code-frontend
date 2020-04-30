import React, { Component } from 'react'

class CheckRepositories extends Component {

    render() {
        return (
            <React.Fragment>

                <table className="table table-bordered table-dark mt-4">

                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Created at</th>
                            <th scope="col">Updated at</th>
                            <th scope="col">Actions</th>
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
                    repositoryDescription.textContent = "No content provided!";
                }
                const createdAt = document.createElement('td');
                createdAt.textContent = repository['created_at'];
                const updatedAt = document.createElement('td');
                updatedAt.textContent = repository['updated_at'];
                const tdButton = document.createElement('td');
                const checkRepositoryButton = document.createElement('a');
                checkRepositoryButton.setAttribute('class', 'btn btn-warning btn-sm');
                checkRepositoryButton.textContent = 'Check';
                checkRepositoryButton.href = '/github/check-repositories/' + repository['name'];
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

{/* <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
</tr> */}

export default CheckRepositories;