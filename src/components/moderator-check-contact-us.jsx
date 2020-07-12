import React, { Component } from 'react';

class ContactUsForms extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="col-md-8 mt-4 container">
                    <h2 className="text-center">Получени съобщения</h2>
                    <table className="table table-bordered table-dark mt-4">
                        <thead>
                            <tr>
                                <th scope="col">Име</th>
                                <th scope="col">Имейл</th>
                                <th scope="col">Тема</th>
                                <th scope="col">Съобщение</th>
                            </tr>
                        </thead>
                        <tbody id="contacts">
                            <tr id="loading">
                                <td><div className="spinner-border text-warning" role="status"></div></td>
                                <td><div className="spinner-border text-warning" role="status"></div></td>
                                <td><div className="spinner-border text-warning" role="status"></div></td>
                                <td><div className="spinner-border text-warning" role="status"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </React.Fragment>
        );
    };

    componentDidMount() {
        const userRoles = localStorage.getItem('userRoles');
        if (userRoles == null || !userRoles.includes('ROLE_MODERATOR')) {
            this.props.history.push('/not-found');
            return;
        }
        this.loadContactUsForms();
    }

    loadContactUsForms = () => {
        fetch(process.env.REACT_APP_URL + '/contact-us', {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            if (response.status !== 200) {
                alert('Please reload the page!');
                return;
            }
            const jsonResponse = await response.json();
            let contactUsForms = JSON.parse(JSON.stringify(jsonResponse));
            const loading = document.getElementById('loading');
            loading.innerHTML = '';
            contactUsForms.forEach(contactUsForm => {
                const tableRowElement = document.createElement('tr');
                const usernameTd = document.createElement('td');
                usernameTd.textContent = usernameTd.textContent = contactUsForm['username'];
                const emailTd = document.createElement('td');
                emailTd.textContent = contactUsForm['email'];
                const subjectTd = document.createElement('td');
                subjectTd.textContent = contactUsForm['subject'];
                const messageTd = document.createElement('td');
                messageTd.textContent = contactUsForm['message'];
                tableRowElement.appendChild(usernameTd);
                tableRowElement.appendChild(emailTd);
                tableRowElement.appendChild(subjectTd);
                tableRowElement.appendChild(messageTd);

                const contacts = document.getElementById('contacts');
                contacts.appendChild(tableRowElement);
            });
        })
    }

}

export default ContactUsForms;