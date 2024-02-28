import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('nameInput').value;

    try {
      const response = await fetch('http://localhost:3001', {
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
        <p>
          Hello 👋🏼 <span>{response}</span>
        </p>

        <form onSubmit={handleSubmit}>
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
