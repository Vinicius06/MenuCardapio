import React from 'react';

function Sobremesas({ items }) {
  return (
    <div className="Category">
      {items.map((item, index) => (
        <div key={index} className={`menu-item ${item.active ? 'active' : ''}`}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <span className="price">{item.price}</span>
        </div>
      ))}
    </div>
  );
}

export default Sobremesas;