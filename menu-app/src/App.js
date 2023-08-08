import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuItems, setMenuItems] = useState([
    { name: 'Item 1', description: 'Descrição do item 1.', price: 'R$10,00' },
    // Adicione mais itens do cardápio aqui
  ]);

  const toggleActive = (index) => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[index].active = !updatedMenuItems[index].active;
    setMenuItems(updatedMenuItems);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cardápio do Restaurante</h1>
      </header>
      <main className="Menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-item ${item.active ? 'active' : ''}`}
            onClick={() => toggleActive(index)}
          >
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <span className="price">{item.price}</span>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
