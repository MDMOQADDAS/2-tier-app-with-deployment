import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput').value;

    try {
      const response = await fetch('http://172.17.0.2:3001', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: nameInput })
      });

      const data = await response.json();
      setResponse(data.message); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Hello 👋🏼 
        </h1>
        <h2 style={{color: "green"}}>{response}</h2>

        <form onSubmit={handleSubmit} data-testid="form">
          <div>
            <input type="text" id="nameInput" placeholder="Enter your name ..." required />
            <button type='submit'>Submit</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
