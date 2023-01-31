import React from 'react';
import { createRoot } from 'react-dom/client';
import '../style.scss';

const container = document.getElementById('root');

const root = createRoot(container);

// Reusable Component

const bgColor = 'red';
const color = 'white';

// First letter of the component name should be capital
// From Each component return single Element
// inline style should be object and property name should be in camel case
// instead of class use className

// props are immutable
function App({ title, desc }) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <h2>{desc}</h2>
      <input type="checkbox" />
    </div>
  );
}

root.render(
  <>
    <App title="Yagnesh Modh" desc="Full Stack Developer" />
    <App title="Virat Kohli" desc="Cricketor" />
    <App title="Rohit Sharma" desc="Cricketor" />
  </>,
);
