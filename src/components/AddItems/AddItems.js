import React from 'react';
import { Form } from 'react-bootstrap';

const AddItems = () => {
    return (
        <div>
            <h2>Please add items </h2>
            <Form>
                <Form.Group className="m-3">
                    <Form.Label>Enter Car Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Example : C-Class"
                        required
                        
                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Enter Car Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Example : &#x20B9; 10000000"
                        required
                        
                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Enter Car Quantity</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Example : 200"
                        required
                        
                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Car Details</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Details about car"
                        required
                        
                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Car Image URL</Form.Label>
                    <Form.Control
                        type="url"
                        placeholder="https://example.com"
                        required
                        
                    />
                </Form.Group>
                <Form.Group className="m-3">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                        type="email"
                        required
                        
                        readOnly
                    />
                </Form.Group>

                <input type="submit" value="Add Item +" className="link" />
            </Form>
        </div>
    );
};

export default AddItems;