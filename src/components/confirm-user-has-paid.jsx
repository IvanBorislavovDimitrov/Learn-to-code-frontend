import React, {Component} from 'react';

class ConfirmUserHasPaid extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="col-md-8 mt-4 container">
                    <h2 className="text-center">Получени съобщения</h2>
                    <table className="table table-bordered table-dark mt-4">
                        <thead>
                        <tr>
                            <th scope="col">Име на курсист</th>
                            <th scope="col">Име на курс</th>
                            <th scope="col">Потврди</th>
                        </tr>
                        </thead>
                        <tbody id="contacts">
                        <tr id="loading">
                            <td>
                                <div className="spinner-border text-warning" role="status"></div>
                            </td>
                            <td>
                                <div className="spinner-border text-warning" role="status"></div>
                            </td>
                            <td>
                                <div className="spinner-border text-warning" role="status"></div>
                            </td>
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
        fetch(process.env.REACT_APP_URL + '/courses/unpaid', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
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
                const courseName = document.createElement('td');
                courseName.textContent = contactUsForm['courseName'];

                const subjectTd = document.createElement('td');
                subjectTd.textContent = contactUsForm['subject'];

                const tdButton = document.createElement('td');
                const approve = document.createElement('a');
                approve.setAttribute('class', 'btn btn-warning btn-sm');
                approve.textContent = 'Потвърди';
                approve.onclick = () => {
                    fetch(process.env.REACT_APP_URL + '/courses/has-paid/' + contactUsForm['courseName'] + '/' + contactUsForm['username'], {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.getItem('token')
                        }
                    }).then(async response => {
                        if (response.status !== 200) {
                            alert('Please reload the page!');
                            return;
                        }
                        window.location.reload();
                    });
                }
                tdButton.appendChild(approve);

                tableRowElement.appendChild(usernameTd);
                tableRowElement.appendChild(courseName);
                tableRowElement.appendChild(tdButton);

                const contacts = document.getElementById('contacts');
                contacts.appendChild(tableRowElement);
            });
        })
    }

}

export default ConfirmUserHasPaid;