import React, { useState } from 'react';
import './App.css';

export const App: React.FC = () => {
  const [title] = useState('learn-reactjs');

  return (
    <main className="app-container">
      <section className="hero">
        <div className="logo-wrapper">
          <svg
            className="react-logo"
            viewBox="-11.5 -10.23174 23 20.46348"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </div>
        <h1 className="title">Hello, {title}</h1>
        <p className="subtitle">Congratulations! Your React 19 app is running. 🎉</p>
      </section>

      <section className="cards-grid">
        <article className="card">
          <h2>React 19 Documentation</h2>
          <p>Explore official guides, components, hooks, actions, and server components.</p>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            Read Docs &rarr;
          </a>
        </article>

        <article className="card">
          <h2>Vite & Fast Refresh</h2>
          <p>Supercharge your frontend tooling with instant server start and lightning HMR.</p>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            Learn Vite &rarr;
          </a>
        </article>

        <article className="card">
          <h2>Vitest Testing</h2>
          <p>Unit test components fast with Vite native test runner and React Testing Library.</p>
          <a href="https://vitest.dev" target="_blank" rel="noopener noreferrer">
            Explore Testing &rarr;
          </a>
        </article>
      </section>

      <footer className="footer">
        <p>Built with modern React, TypeScript, and Vite.</p>
      </footer>
    </main>
  );
};

export default App;
