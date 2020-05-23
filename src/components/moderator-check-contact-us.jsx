import React, { Component } from 'react';

class ContactUsForms extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="col-md-8 mt-4 container">
                    <h2 className="text-center">Received messages</h2>
                    <table className="table table-bordered table-dark mt-4">
                        <thead>
                            <tr>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Message</th>
                            </tr>
                        </thead>
                        <tbody id="contacts">
                            <tr id="loading">
                                <td><div class="spinner-border text-warning" role="status"></div></td>
                                <td><div class="spinner-border text-warning" role="status"></div></td>
                                <td><div class="spinner-border text-warning" role="status"></div></td>
                                <td><div class="spinner-border text-warning" role="status"></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </React.Fragment>
        );
    };

    componentDidMount() {
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