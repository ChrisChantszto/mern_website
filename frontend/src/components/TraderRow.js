// src/components/TraderRow.js
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function TraderRow({ trader, onEdit, onDelete }) {
  return (
    <tr>
      <td>{trader.symbol}</td>
      <td>{trader.price}</td>
      <td>{trader.number}</td>
      <td>{trader.profit}</td>
      <td>{trader.positivity}</td>
      <td>{trader.date.slice(0, 10)}</td>
      <td>
        <button onClick={() => onEdit(trader._id)}>
          <EditIcon />
        </button>
        <button onClick={() => onDelete(trader._id)}>
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
}

export default TraderRow;