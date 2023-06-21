// src/components/TraderTable.js
import React from 'react';
import { Link } from 'react-router-dom';
import TraderRow from './TraderRow';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function TraderTable({ traders, onDelete, onEdit }) {
  return (
    <table>
      <caption>
        <Link to="/create">
          <AddCircleOutlineIcon />
          Create New Trader
        </Link>
      </caption>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>Number</th>
          <th>Profit</th>
          <th>Positivity</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {traders.map((trader, index) => (
          <TraderRow key={index} trader={trader} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </tbody>
    </table>
  );
}

export default TraderTable;