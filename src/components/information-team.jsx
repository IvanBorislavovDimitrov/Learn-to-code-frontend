import React, { Component } from 'react';

class Team extends Component {

    render() {
        return (
            <React.Fragment>

                <section id="breadcrumbs" class="breadcrumbs">
                    <div class="container">
                        <ol>
                            <li><a href="index.html">Начало</a></li>
                            <li>Преподаватели</li>
                        </ol>
                        <h2>Преподаватели</h2>
                    </div>
                </section>

                <section id="team" class="team">
                    <div class="container">
                        <div id="teachers" class="row">

                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    };

    componentDidMount() {
        this.loadTeachers();
    }

    loadTeachers = () => {

        fetch(process.env.REACT_APP_URL + '/users/teachers', {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            const jsonResponse = await response.json();
            let teachers = JSON.parse(JSON.stringify(jsonResponse));
            teachers.forEach(teacher => {
                const firstDiv = document.createElement('div');
                firstDiv.setAttribute('class', 'col-lg-4 col-md-6 d-flex align-items-stretch');
                const secondDiv = document.createElement('div');
                secondDiv.setAttribute('class', 'member');
                const img = document.createElement('img');
                img.setAttribute('width', 300);
                img.setAttribute('height', 200);
                img.setAttribute('src', process.env.REACT_APP_URL + '/resource/images/' + teacher['profilePictureName']);
                const h4 = document.createElement('h4');
                const teacherHref = document.createElement('a');
                teacherHref.textContent = teacher['firstName'] + " " + teacher['lastName'];
                teacherHref.href = '/users/' + teacher['username'] + '/profile';
                h4.appendChild(teacherHref);
                const p = document.createElement('p');
                p.textContent = teacher['description'];
                const thirdDiv = document.createElement('div');
                thirdDiv.setAttribute('class', 'social');
                const a = document.createElement('a');
                a.href = "#";
                const i = document.createElement('i');
                i.setAttribute('class', 'icofont-linkedin');
                firstDiv.appendChild(secondDiv);
                secondDiv.appendChild(img);
                secondDiv.appendChild(h4);
                secondDiv.appendChild(p);
                secondDiv.appendChild(thirdDiv);
                thirdDiv.appendChild(a);
                a.appendChild(i);
                const teachers = document.getElementById('teachers');
                teachers.appendChild(firstDiv);
            });
        }).catch(error => {
            console.log(error);
        });
    }
}

export default Team;