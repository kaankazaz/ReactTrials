import React from 'react';

function App() {
  const greeting = {
    name: "Kaan",
    surname:"KAZAZ"
  };
  
  function getSeconMessageFromFunction()
  {
    return 'And this is the second message...';
  }
  
  return (
    <div>
      <h1>Hello {greeting.name} {greeting.surname}</h1>
      <h2>{getSeconMessageFromFunction()}</h2>
    </div>
  );
}

export default App;
