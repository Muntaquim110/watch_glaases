
import React, { useState } from 'react';
import "./com.css";




function Address({ onClose }) {
  const [address, setAddress] = useState("");

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Address saved: ${address}`);
    onClose();  
  };

  return (
    <div className='h2'>
      <h2>Add Address</h2>
      <form onSubmit={handleSubmit}>
        <input
          
          type="text"
          placeholder=" Address with pin code"
          value={address}
          onChange={handleAddressChange}
          required
        />
        
        <button type="submit">Save Address</button>
      </form>
      <button>Proceed To Payment </button>
      <button>Confirm Your Order</button>
      
      <button onClick={onClose}>Cancel</button>
      
    </div>
  );
}

export default Address;
