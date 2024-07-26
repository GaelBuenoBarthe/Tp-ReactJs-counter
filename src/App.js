import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css';
import Signature from './components/Signature';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app-background">
        <h1 className="app-title">App Compteur</h1>
        <div className="counter-container">
            <Counter count={count} setCount={setCount} />
        </div>
        <Signature />
    </div>
);
};


export default App;