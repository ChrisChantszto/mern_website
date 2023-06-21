import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js';

function OrderPage({ products }) {

    return (
        <>
            <h2>Order</h2>
            <article>
                <p>On this page, you can order a single product from our selection below.</p>
                <form action="/submit-order" method="POST">
                    <fieldset>
                        <legend>Personal Information:</legend>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            autoFocus
                            required
                            className="required"
                            placeholder="Your full name"
                        />
                        <br />
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="required"
                            placeholder="Your email address"
                        />
                        <br />
                        <label htmlFor="address">Address:</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            required
                            className="required"
                            placeholder="Your shipping address"
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Products:</legend>
                        <table>
                            <caption>Available Products</caption>
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Select</th>
                                </tr>
                            </thead>
                            <tbody>{products.map((product, index) => (
                                <ProductRow key={index} product={product} name="chosenProduct" />
                            ))}</tbody>
                        </table>
                        <label htmlFor="instructions">Delivery Instructions:</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows="3"
                            cols="40"
                            placeholder="Enter any special delivery instructions"
                        ></textarea>
                    </fieldset>
                    <button type="submit">Submit Order</button>
                </form>
            </article>
        </>
    )
}

export default OrderPage;