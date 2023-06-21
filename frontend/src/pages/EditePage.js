import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditPage() {
    const [symbol, setSymbol] = useState('');
    const [price, setPrice] = useState('');
    const [number, setNumber] = useState('');
    const [profit, setProfit] = useState('');
    const [positivity, setPositivity] = useState('');
    const [date, setDate] = useState('');

    const navigate = useNavigate();
    const { id } = useParams();

    const fetchTraderData = async () => {
        const response = await fetch(`/traders/${id}`);
        const traderData = await response.json();
        setSymbol(traderData.symbol);
        setPrice(traderData.price);
        setNumber(traderData.number);
        setProfit(traderData.profit);
        setPositivity(traderData.positivity);
        setDate(traderData.date);
    };

    useEffect(() => {
        fetchTraderData();
    }, []);

    const updateTraderData = async () => {
        const updatedEntry = {
            symbol,
            price: Number(price),
            number: Number(number),
            profit: Number(profit),
            positivity,
            date,
        };

        const response = await fetch(`/traders/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedEntry),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200 || response.status === 204) {
            alert('Successfully updated the entry.');
            navigate('/traders');
        } else {
            alert('Failed to update the entry.');
        }
    };

    return (
        <div>
            <h1>Edit Entry</h1>
            <p>Use the form below to edit the selected entry.</p>
            <table>
                <tbody>
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
            </table>
            <button onClick={updateTraderData}>Save Changes</button>
        </div>
    );
}

export default EditPage;