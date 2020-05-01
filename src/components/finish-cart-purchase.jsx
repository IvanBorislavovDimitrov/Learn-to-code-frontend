import React, {Component} from 'react';

class FinishCartPurchase extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="mr-3 ml-3 mt-3 mb-3">
                    <h2>Enroll for courses</h2>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Short description</th>
                            <th scope="col">Actions</th>
                        </tr>
                        </thead>
                        <tbody id="finish-courses-table">

                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }

    componentDidMount() {
        this.getCoursesInCart();
    }

    getCoursesInCart = () => {
        const currentThis = this;
        fetch(process.env.REACT_APP_URL + '/courses/cart/all', {
            method: 'GET',
            credentials: 'include'
        }).then(async response => {
            const jsonResponse = await response.json();
            const coursesInCart = JSON.parse(JSON.stringify(jsonResponse));
            let totalPrice = 0;
            const table = document.getElementById('finish-courses-table');
            if (coursesInCart.length === 0) {
                return;
            }
            coursesInCart.forEach(course => {
                const tr = document.createElement('tr');
                const courseName = document.createElement('td');
                courseName.textContent = course['name'];
                const courseDescription = document.createElement('td');
                courseDescription.textContent = course['description'];
                const coursePrice = document.createElement('td');
                coursePrice.textContent = '$' + course['price'];
                const actions = document.createElement('td');
                const removeButton = document.createElement('button');
                removeButton.setAttribute('class', 'btn btn-danger btn-sm');
                removeButton.textContent = 'Remove';
                removeButton.onclick = () => {
                    async function removeFromCart() {
                        return await fetch(process.env.REACT_APP_URL + '/courses/cart/remove/' + course['name'], {
                            method: 'POST',
                            credentials: 'include',
                            mode: 'cors',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        });
                    }

                    removeFromCart().then(async response => {
                        if (response.status === 200) {
                            table.innerText = '';
                            currentThis.getCoursesInCart();
                        } else {
                            alert('Add to cart failed!');
                        }
                    });
                };
                actions.appendChild(removeButton);
                tr.appendChild(courseName);
                tr.appendChild(coursePrice);
                tr.appendChild(courseDescription);
                tr.appendChild(actions);
                table.appendChild(tr);
                totalPrice += parseFloat(course['price']);
            });
            const finalTr = document.createElement('tr');
            const finalPrice = document.createElement('td');
            finalPrice.textContent = 'Total: $' + totalPrice;
            finalPrice.setAttribute('colSpan', '3');
            const finalAction = document.createElement('td');
            const finalizeButton = document.createElement('button');
            finalizeButton.textContent = 'Finish';
            finalizeButton.setAttribute('class', 'btn btn-danger btn');
            finalizeButton.onclick = () => {
                async function enrollForCoursesFromCart() {

                    // TODO: Add verification, payments

                    return await fetch(process.env.REACT_APP_URL + '/courses/cart/enroll-from-cart', {
                        method: 'POST',
                        mode: 'cors',
                        cache: 'no-cache',
                        credentials: 'include',
                    });
                }

                enrollForCoursesFromCart().then(async respone => {
                    if (respone.status === 200) {
                        this.props.history.push('/');
                        window.location.reload();
                    } else {
                        alert("Failed to enroll for courses!");
                    }
                });
            };
            finalAction.appendChild(finalizeButton);
            finalTr.appendChild(finalPrice);
            finalTr.appendChild(finalAction);
            table.appendChild(finalTr);
        }).catch(error => {
            console.log(error);
        });
    }

}

export default FinishCartPurchase;