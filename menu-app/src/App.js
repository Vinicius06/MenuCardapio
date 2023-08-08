import React, { useState } from 'react';
import './App.css';
import Comidas from './Comidas';
import Bebidas from './Bebidas';
import Sobremesas from './Sobremesas';

function App() {
  
  const [menuItems, setMenuItems] = useState([
    { category: 'Refeições', name: 'Item 1', description: 'Descrição do item 1.', price: 'R$10,00' },
    { category: 'Sucos', name: 'Item 2', description: 'Descrição do item 2.', price: 'R$5,00' },
    { category: 'Sobremesas', name: 'Item 3', description: 'Descrição do item 3.', price: 'R$8,00' },
    
  ]);

  const comidas = menuItems.filter(item => item.category === 'Refeições');
  const bebidas = menuItems.filter(item => item.category === 'Sucos');
  const sobremesas = menuItems.filter(item => item.category === 'Sobremesas');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cardápio do Restaurante</h1>
      </header>
      <main className="Menu">
        <h2>Refeições</h2>
        <Comidas items={comidas} />
        
        <h2>Sucos</h2>
        <Bebidas items={bebidas} />

        <h2>Sobremesas</h2>
        <Sobremesas items={sobremesas} />
      </main>
    </div>
  );
}

export default App;
