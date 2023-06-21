// src/pages/CreatePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreatePage() {
    const [symbol, setSymbol] = useState('');
    const [price, setPrice] = useState('');
    const [number, setNumber] = useState('');
    const [profit, setProfit] = useState('');
    const [positivity, setPositivity] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();

    const addToLog = async () => {
        const newEntry = {
            symbol,
            price: Number(price),
            number: Number(number),
            profit: Number(profit),
            positivity,
            date,
        };

        const response = await fetch('/traders', {
            method: 'POST',
            body: JSON.stringify(newEntry),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 201) {
            alert('Successfully added new entry to the log.');
            navigate('/traders');
        } else {
            alert('Failed to add the new entry to the log.');
        }
    };

    return (
        <div>
            <h1>Create New Entry</h1>
            <p>Use the form below to add a new entry to the log.</p>
            <table>
                <tbody>
                    {/* Add your form controls here */}
                    <tr>
                        <td>
                            <label htmlFor="symbol">Symbol</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="symbol"
                                value={symbol}
                                onChange={(e) => setSymbol(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="price">Price</label>
                        </td>
                        <td>
                            <input
                                type="number"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="number">Number</label>
                        </td>
                        <td>
                            <input
                                type="number"
                                id="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="profit">Profit</label>
                        </td>
                        <td>
                            <input
                                type="number"
                                id="profit"
                                value={profit}
                                onChange={(e) => setProfit(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="positivity">Positivity</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                id="positivity"
                                value={positivity}
                                onChange={(e) => setPositivity(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="date">Date</label>
                        </td>
                        <td>
                            <input
                                type="date"
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">
                            <button onClick={addToLog}>Save Entry</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default CreatePage;