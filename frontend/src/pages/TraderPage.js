import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TraderTable from "../components/TraderTable";

function TraderPage() {
  const navigate = useNavigate();
  const [traders, setTraders] = useState([]);
  
  const fetchTraders = async () => {
    const response = await fetch("/traders");
    const data = await response.json();
    setTraders(data);
  };

  const handleEdit = (_id) => {
    navigate(`/edit/${_id}`);
  };

  const handleDelete = async (_id) => {
    const response = await fetch(`/traders/${_id}`, { method: "DELETE" });

    if (response.status === 204) {
      fetchTraders();
    } else {
      console.error(`Failed to delete trader with ID ${_id}: ${response.status}`);
    }
  };

  useEffect(() => {
    fetchTraders();
  }, []);

  return (
    <div>
      <h2>Traders</h2>
      <p>Manage your newly traded stocks here.</p>
      <TraderTable traders={traders} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default TraderPage;