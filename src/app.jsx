import React from 'react';

// Reusable Component

const bgColor = 'red';
const color = 'white';

// First letter of the component name should be capital
// From Each component return single Element
// inline style should be object and property name should be in camel case
// instead of class use className

// props are immutable

// Function Component
function App({ title, desc }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <h2>{desc}</h2>
      <input type="checkbox" />
    </div>
  );
}

export default App;
