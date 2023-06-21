import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js";

function StaffPage() {
    const [results, setResults] = useState([])


    const fetchApi = () => fetch('https://randomuser.me/api/?results=10')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch data from API');
            }
            return response.json();
        })
        .then((data) => {
            setResults(data.results);
        })
        .catch((error) => {
            alert('API is unavailable. Please try again later.');
            console.error(error);
        });

    return (
        <>
            <h2>Staff</h2>
            <article>
                <p>On this page, you can view staff information generated either by the browser or requested from the
                    Express server.</p>
                <button onClick={fetchApi}>Get data from the api fetching</button>
                <table>
                    <thead>
                        <tr>
                            <th>Portrait</th>
                            <th>Name/Email</th>
                            <th>Telephone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody id="staffTableBody">
                        {results.map((person, i) => <StaffRow person={person} key={i} />)}
                    </tbody>
                </table>
            </article>
        </>
    )
}

export default StaffPage;