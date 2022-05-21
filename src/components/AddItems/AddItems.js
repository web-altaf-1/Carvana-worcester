import React from 'react';
import { Form } from 'react-bootstrap';
import './AddItems.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const AddItems = () => {
    const [user, loading, error] = useAuthState(auth);


    const handleAddItems = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const details = event.target.details.value;
        const img = event.target.url.value;
        const email = user.email;
        const newItem = {name,price ,quantity,details,img,email}

        // send data to the server 

        fetch('http://localhost:5000/addItems', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newItem),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                window.confirm('Are you sure add this item ?? ')
                event.target.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        
    }

    return (
        <div >
            <h2 className='text-center text-primary py-3'>Please add items </h2>
            <Form className='w-50 mx-auto shadow-lg p-5 mb-4' onSubmit={handleAddItems}>
                <Form.Group className="m-3" >
                    <Form.Label>Enter Car Name</Form.Label>
                    <Form.Control
                        type="text"
                        name='name'
                        placeholder="Example : Toyota"
                        required

                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Enter Car Price</Form.Label>
                    <Form.Control
                        type="number"
                        name='price'
                        placeholder="Example : $ 10000"
                        required

                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Enter Car Quantity</Form.Label>
                    <Form.Control
                        type="number"
                        name='quantity'
                        placeholder="Example : 200"
                        required

                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Car Details</Form.Label>
                    <Form.Control
                        type="text"
                        name='details'
                        placeholder="Details about car"
                        required

                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Car Image URL</Form.Label>
                    <Form.Control
                        type="url"
                        name='url'
                        placeholder="https://example.com"
                        required

                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                        type="email"
                        required

                        value={user.email}
                        readOnly
                    />
                </Form.Group>

                <input type="submit" value="Add Item +" className="link add-item-btn d-flex m-auto mt-4 " />
            </Form>
        </div>
    );
};

export default AddItems;