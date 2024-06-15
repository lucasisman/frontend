import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/products', {
        title,
        price,
        description
        })
        .then(res => {
            setMessage('Product created successfully');
            setTitle('');
            setPrice('');
            setDescription('');
            console.log(res.data);
        })
        .catch(err => {
            setMessage('Error creating product');
            console.error(err);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Title</label>
            <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div>
            <label>Price</label>
            <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
        </div>
        <div>
            <label>Description</label>
            <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <button type="submit">Create Product</button>
        {message && <p>{message}</p>}
        </form>
    );
};

export default ProductForm;
