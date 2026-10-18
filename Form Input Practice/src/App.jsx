import React from 'react'
import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log('Form submitted');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;