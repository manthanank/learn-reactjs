# Learn React

This repository contains a comprehensive list of resources, guides, architecture deep-dives, code examples, design patterns, testing strategies, and best practices to help you master React from scratch to advanced production development.

![npm](https://img.shields.io/npm/dw/learn-reactjs)
![npm](https://img.shields.io/npm/dm/learn-reactjs)
![npm](https://img.shields.io/npm/dy/learn-reactjs)
![npm](https://img.shields.io/npm/dt/learn-reactjs)
![GitHub issues](https://img.shields.io/github/issues/manthanank/learn-reactjs)
![GitHub pull requests](https://img.shields.io/github/issues-pr/manthanank/learn-reactjs)
![GitHub](https://img.shields.io/github/license/manthanank/learn-reactjs)
![GitHub last commit](https://img.shields.io/github/last-commit/manthanank/learn-reactjs)
![GitHub top language](https://img.shields.io/github/languages/top/manthanank/learn-reactjs)
![GitHub repo size](https://img.shields.io/github/repo-size/manthanank/learn-reactjs)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/manthanank/learn-reactjs)
![GitHub contributors](https://img.shields.io/github/contributors/manthanank/learn-reactjs)
![GitHub forks](https://img.shields.io/github/forks/manthanank/learn-reactjs)
![GitHub stars](https://img.shields.io/github/stars/manthanank/learn-reactjs)
![GitHub watchers](https://img.shields.io/github/watchers/manthanank/learn-reactjs)

---

## Table of Contents

- [Introduction](#introduction)
  - [What is React?](#what-is-react)
  - [Features](#features)
  - [React Architecture](#react-architecture)
  - [JSX](#jsx)
  - [Virtual DOM](#virtual-dom)
  - [React Version History](#react-version-history)
  - [React vs Angular](#react-vs-angular)
  - [React vs Vue](#react-vs-vue)
  - [Roadmap](#roadmap)

- [JavaScript Essentials](#javascript-essentials)
  - [ES6+](#es6)
  - [Arrow Functions](#arrow-functions)
  - [Destructuring](#destructuring)
  - [Spread & Rest](#spread--rest)
  - [Modules](#modules)
  - [Promises](#promises)
  - [Async/Await](#asyncawait)

- [TypeScript with React](#typescript-with-react)
  - [TypeScript Basics](#typescript-basics)
  - [Typing Props](#typing-props)
  - [Typing State](#typing-state)
  - [Interfaces](#interfaces)
  - [Generics](#generics)
  - [Utility Types](#utility-types)

- [Project Setup](#project-setup)
  - [Node.js](#nodejs)
  - [npm](#npm)
  - [pnpm](#pnpm)
  - [yarn](#yarn)
  - [bun](#bun)
  - [Vite](#vite)
  - [Create React App (Legacy)](#create-react-app-legacy)
  - [Next.js Setup](#nextjs-setup)

- [Project Structure](#project-structure)

- [JSX](#jsx-1)
  - [Syntax](#syntax)
  - [Expressions](#expressions)
  - [Fragments](#fragments)
  - [Conditional Rendering](#conditional-rendering)
  - [Lists](#lists)
  - [Keys](#keys)

- [Components](#components)
  - [Functional Components](#functional-components)
  - [Class Components](#class-components)
  - [Component Composition](#component-composition)
  - [Reusable Components](#reusable-components)
  - [Props](#props-component)
  - [Default Props](#default-props)

- [Props](#props)

- [State](#state)

- [Event Handling](#event-handling)

- [Conditional Rendering](#conditional-rendering-1)

- [Lists & Keys](#lists--keys)

- [Forms](#forms)
  - [Controlled Components](#controlled-components)
  - [Uncontrolled Components](#uncontrolled-components)
  - [Validation](#validation)

- [Hooks](#hooks)
  - [useState](#usestate)
  - [useEffect](#useeffect)
  - [useRef](#useref)
  - [useMemo](#usememo)
  - [useCallback](#usecallback)
  - [useContext](#usecontext)
  - [useReducer](#usereducer)
  - [useLayoutEffect](#uselayouteffect)
  - [useImperativeHandle](#useimperativehandle)
  - [useId](#useid)
  - [useTransition](#usetransition)
  - [useDeferredValue](#usedeferredvalue)
  - [useSyncExternalStore](#usesyncexternalstore)
  - [useInsertionEffect](#useinsertioneffect)
  - [Custom Hooks](#custom-hooks)

- [Context API](#context-api)

- [Routing](#routing)
  - [React Router](#react-router)
  - [Nested Routes](#nested-routes)
  - [Route Params](#route-params)
  - [Search Params](#search-params)
  - [Protected Routes](#protected-routes)
  - [Lazy Routes](#lazy-routes)

- [API Calls](#api-calls)
  - [fetch()](#fetch)
  - [Axios](#axios)
  - [Error Handling](#error-handling)
  - [Cancellation](#cancellation)
  - [File Upload](#file-upload)

- [State Management](#state-management)
  - [Context API](#context-api-state)
  - [Redux Toolkit](#redux-toolkit)
  - [Zustand](#zustand)
  - [Jotai](#jotai)
  - [MobX](#mobx)
  - [Recoil](#recoil)

- [Server State](#server-state)
  - [TanStack Query](#tanstack-query)
  - [SWR](#swr)

- [Styling](#styling)
  - [CSS](#css)
  - [CSS Modules](#css-modules)
  - [SCSS](#scss)
  - [Styled Components](#styled-components)
  - [Emotion](#emotion)
  - [Tailwind CSS](#tailwind-css)

- [Performance](#performance)
  - [React.memo](#reactmemo)
  - [Lazy Loading](#lazy-loading)
  - [Suspense](#suspense)
  - [Code Splitting](#code-splitting)
  - [Memoization](#memoization)
  - [Virtualization](#virtualization)
  - [Bundle Optimization](#bundle-optimization)

- [Error Handling](#error-handling-1)
  - [Error Boundaries](#error-boundaries)

- [Portals](#portals)

- [Refs](#refs)

- [Forward Ref](#forward-ref)

- [Higher Order Components (HOC)](#higher-order-components-hoc)

- [Render Props](#render-props)

- [Compound Components](#compound-components)

- [Custom Hooks Pattern](#custom-hooks-pattern)

- [React 19 Features](#react-19-features)
  - [Actions](#actions)
  - [use()](#use)
  - [Server Components](#server-components)
  - [Asset Loading](#asset-loading)
  - [Compiler Overview](#compiler-overview)

- [Next.js](#nextjs)
  - [App Router](#app-router)
  - [Server Components](#server-components-next)
  - [Client Components](#client-components)
  - [Metadata](#metadata)
  - [Routing](#routing-next)
  - [Data Fetching](#data-fetching)
  - [API Routes](#api-routes)

- [Authentication](#authentication)
  - [JWT](#jwt)
  - [OAuth](#oauth)
  - [Firebase Auth](#firebase-auth)
  - [Clerk](#clerk)
  - [Auth0](#auth0)

- [Testing](#testing)
  - [Jest](#jest)
  - [Vitest](#vitest)
  - [React Testing Library](#react-testing-library)
  - [Cypress](#cypress)
  - [Playwright](#playwright)

- [Accessibility (a11y)](#accessibility-a11y)

- [Security](#security)

- [Internationalization (i18n)](#internationalization-i18n)

- [Progressive Web Apps (PWA)](#progressive-web-apps-pwa)

- [Deployment](#deployment)
  - [Vercel](#vercel)
  - [Netlify](#netlify)
  - [Firebase](#firebase)
  - [Docker](#docker)
  - [Nginx](#nginx)

- [Folder Structure](#folder-structure)

- [Best Practices](#best-practices)

- [Design Patterns](#design-patterns)
  - [Atomic Design](#atomic-design)
  - [Container/Presentational](#containerpresentational)
  - [Compound Components Pattern](#compound-components-pattern)
  - [Custom Hooks Pattern](#custom-hooks-pattern-1)

- [Interview Questions](#interview-questions)
  - [React Interview Questions](#react-interview-questions)
  - [Hooks Interview Questions](#hooks-interview-questions)
  - [Redux Interview Questions](#redux-interview-questions)
  - [Performance Interview Questions](#performance-interview-questions)
  - [Scenario-based Questions](#scenario-based-questions)

- [Example Projects](#example-projects)
  - [Todo App](#todo-app)
  - [CRUD App](#crud-app)
  - [Authentication Flow](#authentication-flow)
  - [Dashboard App](#dashboard-app)
  - [E-commerce Store](#e-commerce-store)
  - [Chat App](#chat-app)
  - [Admin Panel](#admin-panel)
  - [File Upload Manager](#file-upload-manager)
  - [Kanban Board](#kanban-board)
  - [Blog Platform](#blog-platform)
  - [Netflix Clone](#netflix-clone)

- [Cheat Sheets](#cheat-sheets)
  - [Hooks Cheat Sheet](#hooks-cheat-sheet)
  - [JSX Cheat Sheet](#jsx-cheat-sheet)
  - [Router Cheat Sheet](#router-cheat-sheet)
  - [Redux Toolkit Cheat Sheet](#redux-toolkit-cheat-sheet)
  - [React Query Cheat Sheet](#react-query-cheat-sheet)
  - [Tailwind Cheat Sheet](#tailwind-cheat-sheet)

- [Resources](#resources)
  - [Official Documentation](#official-documentation)
  - [React Blog](#react-blog)
  - [React Roadmap](#react-roadmap)
  - [Community Resources](#community-resources)

- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Connect with me](#connect-with-me)
- [Support](#support)

---
## Introduction

### What is React?

**React** is an open-source, component-based front-end JavaScript library developed by Meta (Facebook) in 2013. Designed specifically for building modern, responsive, and dynamic user interfaces for single-page applications (SPAs) and multi-platform applications, React enables developers to build encapsulated components that manage their own state and compose them into complex user interfaces.

Unlike traditional full-stack frameworks, React focuses primarily on the view layer of the application (the "V" in MVC architecture). It emphasizes a declarative programming style, unidirectional data flow, and an in-memory Virtual DOM abstraction that optimizes browser rendering cycles.

[Back to top⤴️](#table-of-contents)

### Features

- **Component-Based Architecture**: Build encapsulated UI widgets with isolated state and behavior, maximizing reuse and testability.
- **Declarative Programming**: Design views for each state in your application; React efficiently updates and renders just the right components when your data changes.
- **Virtual DOM (VDOM)**: Uses an in-memory representation of UI elements to diff changes and execute minimal real DOM updates via batching.
- **JSX (JavaScript XML)**: Syntactic sugar combining the full power of JavaScript with familiar HTML-like syntax.
- **Unidirectional Data Flow**: Data flows strictly downwards from parents to children via `props`, ensuring predictability and easier debugging.
- **Rich Hook Ecosystem**: Manage state, side-effects, contexts, and memoization cleanly without writing class components.
- **Cross-Platform Compatibility**: React principles extend across the web (React DOM), mobile native applications (React Native), and desktop apps (Electron/Tauri).
- **Concurrent Mode & Transitions**: Prioritizes urgent user interactions (typing, clicking) over background data transitions for fluid responsiveness.

[Back to top⤴️](#table-of-contents)

### React Architecture

React's internal architecture is powered by the **React Fiber Reconciliation Engine**, which breaks rendering work into incremental units of work that can be paused, aborted, or prioritized.

```tree
       ┌─────────────────────────────────────────────────────────┐
       │                   Component State / Props               │
       └────────────────────────────┬────────────────────────────┘
                                    │ triggers
                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │                 Render Phase (React Fiber)              │
       │  - Call component function                              │
       │  - Generate new Virtual DOM Fiber Tree                  │
       │  - Diff against previous Fiber Tree                     │
       │  - Calculate minimal list of side-effects (mutations)   │
       └────────────────────────────┬────────────────────────────┘
                                    │ commits
                                    ▼
       ┌─────────────────────────────────────────────────────────┐
       │                 Commit Phase (React DOM)                │
       │  - Apply batch mutations directly to Browser DOM        │
       │  - Execute layout effects (useLayoutEffect)             │
       │  - Browser paints new pixels                            │
       │  - Execute passive effects (useEffect)                  │
       └─────────────────────────────────────────────────────────┘
```

[Back to top⤴️](#table-of-contents)

### JSX

JSX is an XML-like syntax extension for JavaScript that makes writing UI structures intuitive and safe from cross-site scripting (XSS) attacks by default:

```tsx
function WelcomeCard({ user }: { user: { name: string; unreadCount: number } }) {
  return (
    <div className="card">
      <h2>Welcome back, {user.name}!</h2>
      {user.unreadCount > 0 ? (
        <p className="badge">You have {user.unreadCount} unread messages.</p>
      ) : (
        <p>No new notifications.</p>
      )}
    </div>
  );
}
```

Behind the scenes, JSX is transformed by Babel, SWC, or ESBuild into React runtime calls:

```js
import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

function WelcomeCard({ user }) {
  return _jsxs('div', {
    className: 'card',
    children: [
      _jsxs('h2', { children: ['Welcome back, ', user.name, '!'] }),
      user.unreadCount > 0
        ? _jsxs('p', { className: 'badge', children: ['You have ', user.unreadCount, ' unread messages.'] })
        : _jsx('p', { children: 'No new notifications.' }),
    ],
  });
}
```

[Back to top⤴️](#table-of-contents)

### Virtual DOM

The Virtual DOM is an abstraction of the HTML DOM. Every time state updates in a React application:
1. **Render**: A new tree of Virtual DOM nodes is constructed.
2. **Diffing**: The **Reconciliation** algorithm compares the new tree with the previous snapshot:
   - Elements of different types produce different trees entirely.
   - Elements with the same type update only the changed attributes.
   - Keys allow React to track which items in lists have been modified, reordered, or removed.
3. **Reconcile**: React calculates the exact set of real DOM operations required and executes them in a single performant batch.

```tree
    Virtual DOM Before                Virtual DOM After
         <ul>                              <ul>
          ├── <li key="1">A</li>            ├── <li key="1">A</li>
          └── <li key="2">B</li>            ├── <li key="2">B (Updated!)</li>
                                            └── <li key="3">C (New!)</li>

    Resulting Real DOM Mutation:
    - Update text content of item 2
    - Append new <li> node for item 3
```

[Back to top⤴️](#table-of-contents)

### React Version History

| Version | Release Date | Major Milestones & Capabilities |
| :--- | :--- | :--- |
| **0.3.0** | May 2013 | Initial public open-source release |
| **0.14.0** | Oct 2015 | Split into `react` core and `react-dom` renderer |
| **15.0.0** | Apr 2016 | Native SVG support, improved error messaging |
| **16.0.0** | Sep 2017 | Complete core engine rewrite (**React Fiber**), Portals, Error Boundaries |
| **16.8.0** | Feb 2019 | **React Hooks** (`useState`, `useEffect`, etc.) introduced |
| **17.0.0** | Oct 2020 | Foundation release for smooth gradual version upgrades, modern JSX transform |
| **18.0.0** | Mar 2022 | **Concurrent React**, Suspense SSR, automatic batching, `useTransition` |
| **19.0.0** | Dec 2024 | **Actions**, `useActionState`, `useFormStatus`, `useOptimistic`, `use()` API, Server Components |

[Back to top⤴️](#table-of-contents)

### React vs Angular

| Feature | React | Angular |
| :--- | :--- | :--- |
| **Architecture Type** | Declarative UI Library | Comprehensive Enterprise Framework |
| **Core Language** | JavaScript / TypeScript | TypeScript First |
| **Rendering Strategy** | Virtual DOM & Fiber Reconciliation | Incremental DOM & Signals Reactive Engine |
| **Data Binding** | Strictly Unidirectional | Two-Way (`[(ngModel)]`) and One-Way Bindings |
| **State Management** | Flexible ecosystem (Context, Zustand, Redux) | Built-in Angular Signals & RxJS Services |
| **Routing & Forms** | Third-party community libraries (`react-router`) | Built-in official Routing and Reactive Forms modules |
| **Dependency Injection**| Context API / React Composition | Comprehensive Hierarchical DI Container |
| **Learning Curve** | Gentle initial curve, architectural flexibility | Structured, opinionated, steep learning curve |

[Back to top⤴️](#table-of-contents)

### React vs Vue

| Feature | React | Vue |
| :--- | :--- | :--- |
| **Component Format** | JSX / TSX (JavaScript-centric) | Single File Components (`.vue` templates, scripts, styles) |
| **Reactivity** | Explicit state setters (`setState`, `useState`) | Transparent Proxy-based reactivity (`ref`, `reactive`) |
| **Ecosystem** | Decentralized, community-maintained solutions | Centralized official libraries (Vue Router, Pinia) |
| **Tooling** | Vite, Next.js, Remix, Astro | Vite, Nuxt |

[Back to top⤴️](#table-of-contents)

### Roadmap

```tree
Phase 1: Foundations
├── Modern JavaScript ES6+ (Destructuring, Promises, Modules, Async/Await)
├── TypeScript Fundamentals (Interfaces, Generics, Union Types)
└── HTML5 Semantic Elements & CSS Flexbox/Grid

Phase 2: Core React
├── JSX Syntax, Rules & Expressions
├── Components (Functional & Composition)
├── Props, Children, and Default Values
├── State Management (useState, useReducer)
└── Event Handling & Form Control

Phase 3: Deep Dive into Hooks
├── Side Effects & Lifecycles (useEffect, useLayoutEffect)
├── Performance Memoization (useMemo, useCallback, React.memo)
├── DOM References & Mutable State (useRef, useImperativeHandle)
└── Building Reusable Custom Hooks

Phase 4: Architecture & Ecosystem
├── Client-Side Routing (React Router v6/v7)
├── Context API & Global State (Zustand, Redux Toolkit)
├── Asynchronous Server State (TanStack Query / SWR)
└── Styling Architectures (Tailwind CSS, CSS Modules, Styled Components)

Phase 5: Full-Stack & Modern Standards
├── React 19 Actions (useActionState, useOptimistic, useFormStatus)
├── The use() API & Suspense
├── Next.js App Router (RSC, Server Actions, Dynamic Rendering)
├── Production Testing (Vitest, React Testing Library, Playwright)
└── CI/CD Deployment (Docker, Vercel, Netlify, Nginx)
```

[Back to top⤴️](#table-of-contents)

---

## JavaScript Essentials

### ES6+

Modern React heavily utilizes ECMAScript 2015 (ES6) and later features. Key foundations:

```js
// Block scoping with let and const
const API_BASE = 'https://api.example.com';
let activeUser = null;

// Template Literals
const userGreeting = `Hello, ${activeUser ? activeUser.name : 'Guest'}!`;

// Optional Chaining (?.) and Nullish Coalescing (??)
const userZip = activeUser?.address?.zipCode ?? '00000';
```

[Back to top⤴️](#table-of-contents)

### Arrow Functions

Arrow functions provide concise syntax and retain the lexical scope of `this`:

```js
// Concise expression
const double = (n) => n * 2;

// Event handler in functional component
const handleClick = (event) => {
  console.log('Button clicked at:', event.clientX, event.clientY);
};
```

[Back to top⤴️](#table-of-contents)

### Destructuring

Extract values from objects or arrays into distinct variables:

```js
// Object Destructuring
const user = { id: 101, username: 'manthanank', role: 'admin' };
const { username, role } = user;

// Array Destructuring (Foundation for useState)
const coordinates = [37.7749, -122.4194];
const [latitude, longitude] = coordinates;
```

[Back to top⤴️](#table-of-contents)

### Spread & Rest

```js
// Object Spread for Immutable Updates
const state = { count: 0, user: 'guest' };
const nextState = { ...state, count: state.count + 1 };

// Array Spread
const initialTodos = ['Learn React', 'Build App'];
const newTodos = [...initialTodos, 'Ship to Production'];

// Rest Parameters
function sumScores(multiplier, ...scores) {
  return scores.reduce((sum, score) => sum + score * multiplier, 0);
}
```

[Back to top⤴️](#table-of-contents)

### Modules

Organize application logic into modular files using ES Modules:

```js
// mathUtils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default function multiply(a, b) {
  return a * b;
}

// App.js
import multiply, { add, subtract } from './mathUtils.js';
```

[Back to top⤴️](#table-of-contents)

### Promises

Represent asynchronous operations that eventually complete or fail:

```js
function fetchUserData(userId) {
  return fetch(`/api/users/${userId}`)
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return response.json();
    })
    .catch((err) => {
      console.error('Fetch error:', err);
      throw err;
    });
}
```

[Back to top⤴️](#table-of-contents)

### Async/Await

Syntactic sugar over Promises providing clean synchronous-looking control flow:

```js
async function loadDashboard() {
  try {
    const [profile, stats] = await Promise.all([
      fetch('/api/profile').then(r => r.json()),
      fetch('/api/stats').then(r => r.json())
    ]);
    return { profile, stats };
  } catch (error) {
    console.error('Failed to load dashboard data:', error);
    throw error;
  }
}
```

[Back to top⤴️](#table-of-contents)

---

## TypeScript with React

### TypeScript Basics

TypeScript enhances JavaScript by providing compile-time type checking, interfaces, and intelligent auto-completion:

```ts
let appTitle: string = 'learn-reactjs';
let port: number = 5173;
let isProduction: boolean = false;
let scores: number[] = [95, 88, 100];
```

[Back to top⤴️](#table-of-contents)

### Typing Props

```tsx
interface AlertProps {
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  children?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  type,
  title,
  message,
  dismissible = false,
  onDismiss,
  children,
}) => {
  return (
    <div className={`alert alert-${type}`}>
      <h4>{title}</h4>
      <p>{message}</p>
      {children}
      {dismissible && onDismiss && (
        <button onClick={onDismiss} aria-label="Close alert">
          &times;
        </button>
      )}
    </div>
  );
};
```

[Back to top⤴️](#table-of-contents)

### Typing State

```tsx
interface Post {
  id: string;
  title: string;
  body: string;
}

export function PostViewer() {
  // Implicit inferred types
  const [likes, setLikes] = useState(0); // number

  // Explicit type union for nullable objects
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Explicit array typing
  const [posts, setPosts] = useState<Post[]>([]);

  return <div>{selectedPost?.title}</div>;
}
```

[Back to top⤴️](#table-of-contents)

### Interfaces

Interfaces declare the shape of an object and support declaration merging and inheritance:

```ts
interface BaseEntity {
  id: string;
  createdAt: Date;
}

interface UserProfile extends BaseEntity {
  name: string;
  email: string;
  avatarUrl?: string;
}
```

[Back to top⤴️](#table-of-contents)

### Generics

Generics allow you to build reusable components and utilities that work across multiple types safely:

```tsx
interface DropdownProps<T> {
  items: T[];
  selectedItem: T;
  onSelect: (item: T) => void;
  renderLabel: (item: T) => string;
}

export function Dropdown<T>({ items, selectedItem, onSelect, renderLabel }: DropdownProps<T>) {
  return (
    <select onChange={(e) => onSelect(items[Number(e.target.value)])}>
      {items.map((item, idx) => (
        <option key={idx} value={idx}>
          {renderLabel(item)}
        </option>
      ))}
    </select>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Utility Types

- `Partial<T>`: Makes all properties in `T` optional.
- `Required<T>`: Makes all properties in `T` required.
- `Readonly<T>`: Makes all properties immutable.
- `Pick<T, K>`: Constructs a type by picking a subset of properties `K`.
- `Omit<T, K>`: Constructs a type by removing properties `K`.
- `Record<K, T>`: Constructs a map of keys `K` to values `T`.

```ts
interface User {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
}

// User without sensitive fields
type PublicUser = Omit<User, 'passwordHash'>;

// Update payload where all fields are optional
type UpdateUserPayload = Partial<PublicUser>;
```

[Back to top⤴️](#table-of-contents)

---

## Project Setup

### Node.js

Node.js provides the local JavaScript runtime and npm package manager. Verify your installation:

```bash
node -v
npm -v
```

[Back to top⤴️](#table-of-contents)

### npm

```bash
# Initialize a new project
npm init -y

# Install dependencies
npm install react react-dom

# Install development dependencies
npm install -D typescript @types/react @types/react-dom vite
```

[Back to top⤴️](#table-of-contents)

### pnpm

`pnpm` provides fast, disk-efficient package management through hard-linking:

```bash
# Install pnpm globally
npm install -g pnpm

# Install dependencies
pnpm install
```

[Back to top⤴️](#table-of-contents)

### yarn

```bash
# Install dependencies with Yarn Berry or Classic
yarn install

# Start development server
yarn start
```

[Back to top⤴️](#table-of-contents)

### bun

`bun` is a fast all-in-one JavaScript runtime, bundler, and package manager:

```bash
# Install dependencies with Bun
bun install

# Run dev server
bun dev
```

[Back to top⤴️](#table-of-contents)

### Vite

Vite is the recommended modern tool for scaffolding and bundling React Single Page Applications:

```bash
# Scaffold a new Vite + React + TypeScript project
npm create vite@latest my-react-app -- --template react-ts

# Navigate to project
cd my-react-app

# Install dependencies
npm install

# Start lightning-fast development server
npm run dev
```

[Back to top⤴️](#table-of-contents)

### Create React App (Legacy)

```bash
# Deprecated - not recommended for new production projects
npx create-react-app my-app --template typescript
```

[Back to top⤴️](#table-of-contents)

### Next.js Setup

For production web applications requiring Server-Side Rendering (SSR), Static Site Generation (SSG), or React Server Components:

```bash
npx create-next-app@latest my-next-app --typescript --tailwind --app --eslint
```

[Back to top⤴️](#table-of-contents)

---

## Project Structure

A clean, scalable enterprise folder structure for React projects:

```tree
learn-reactjs/
├── .github/
│   └── workflows/          # CI/CD pipelines (Docker, Releases)
├── .vscode/                # Editor settings, launch configs, tasks
├── public/                 # Static public assets (icons, svgs, robots.txt)
│   ├── favicon.ico
│   └── bmc-button.svg
├── src/
│   ├── assets/             # Images, fonts, and SVGs
│   ├── components/         # Reusable design system UI components
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.css
│   │   │   └── Button.test.tsx
│   │   └── Card/
│   ├── features/           # Domain-driven feature modules
│   │   ├── auth/
│   │   └── dashboard/
│   ├── hooks/              # Custom global React hooks
│   ├── services/           # HTTP clients and API services
│   ├── store/              # Global state management stores
│   ├── types/              # Global TypeScript interfaces
│   ├── utils/              # Pure helper functions
│   ├── App.tsx             # Root application component
│   ├── App.css             # Root component styles
│   ├── App.test.tsx        # App component tests
│   ├── index.css           # Global CSS resets & variables
│   └── main.tsx            # DOM root entry point
├── Dockerfile              # Container deployment
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # Root TypeScript configuration
├── tsconfig.app.json       # App source TS config
├── tsconfig.node.json      # Tooling TS config
└── vite.config.ts          # Vite bundler & Vitest test runner configuration
```

[Back to top⤴️](#table-of-contents)
---

## JSX

### Syntax

JSX is an extension to ECMAScript that lets you write HTML-like tags within your JavaScript. Key syntax rules:
1. **Return a single root element**: Adjacent elements must be wrapped in a parent tag or a fragment `<>...</>`.
2. **Close all tags**: Tags like `<input />`, `<img />`, and `<br />` must explicitly close.
3. **Use camelCase**: Write `className` instead of `class`, `htmlFor` instead of `for`, and `tabIndex` instead of `tabindex`.

```tsx
export function HeroBanner() {
  return (
    <header className="hero-banner">
      <h1 tabIndex={0}>Master Modern React</h1>
      <p>Building high-performance user interfaces.</p>
    </header>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Expressions

Embed any valid JavaScript expression inside curly braces `{}`:

```tsx
function PriceCalculator({ basePrice, taxRate }: { basePrice: number; taxRate: number }) {
  const calculateTotal = () => (basePrice * (1 + taxRate)).toFixed(2);

  return (
    <div className="pricing">
      <p>Base: ${basePrice.toFixed(2)}</p>
      <p>Total (including tax): ${calculateTotal()}</p>
      <p>Status: {basePrice > 100 ? 'Eligible for Free Shipping' : 'Standard Shipping'}</p>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Fragments

Fragments let you group a list of children without adding extra nodes to the browser DOM:

```tsx
import { Fragment } from 'react';

// Using explicit Fragment tag (supports key prop in loops)
function GlossaryItem({ term, definition }: { term: string; definition: string }) {
  return (
    <Fragment>
      <dt>{term}</dt>
      <dd>{definition}</dd>
    </Fragment>
  );
}

// Using short syntax (<>...</>)
function NavigationLinks() {
  return (
    <>
      <a href="/home">Home</a>
      <a href="/features">Features</a>
      <a href="/pricing">Pricing</a>
    </>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Conditional Rendering

Render different UI branches based on application conditions:

```tsx
interface StatusProps {
  isLoading: boolean;
  error?: string | null;
  data?: string[] | null;
}

export function DataStatus({ isLoading, error, data }: StatusProps) {
  // 1. Early Return Pattern
  if (isLoading) return <div className="spinner">Loading data...</div>;
  if (error) return <div className="error-banner">Error: {error}</div>;
  if (!data || data.length === 0) return <p>No items found.</p>;

  // 2. Ternary Operator & Logical AND
  return (
    <div>
      <h3>Items ({data.length})</h3>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Lists

Transform collections of data into arrays of JSX elements using the standard array `.map()` method:

```tsx
const frameworks = [
  { id: 'f1', name: 'React', ecosystem: 'Rich' },
  { id: 'f2', name: 'Next.js', ecosystem: 'Full-stack' },
  { id: 'f3', name: 'Vite', ecosystem: 'Tooling' },
];

export function FrameworkList() {
  return (
    <ul>
      {frameworks.map((fw) => (
        <li key={fw.id}>
          <strong>{fw.name}</strong> - {fw.ecosystem}
        </li>
      ))}
    </ul>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Keys

Keys provide a stable identity to list items, allowing React to track which items have been added, reordered, or deleted across renders:

> [!IMPORTANT]
> Always use stable, unique IDs from your database or data source. Avoid using array indexes (`idx`) as keys when list items can be filtered, sorted, or removed, as this causes state contamination and rendering glitches.

```tsx
// Good: Unique stable ID
{todos.map(todo => <TodoItem key={todo.id} item={todo} />)}

// Bad (anti-pattern): Array index for dynamic list
{todos.map((todo, index) => <TodoItem key={index} item={todo} />)}
```

[Back to top⤴️](#table-of-contents)

---

## Components

### Functional Components

Functional components are JavaScript functions that accept `props` and return JSX. They represent the standard way of building modern React applications:

```tsx
interface ProfileCardProps {
  name: string;
  avatarUrl: string;
  role: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ name, avatarUrl, role }) => {
  return (
    <article className="profile-card">
      <img src={avatarUrl} alt={`${name}'s avatar`} width={64} height={64} />
      <h3>{name}</h3>
      <span className="badge">{role}</span>
    </article>
  );
};
```

[Back to top⤴️](#table-of-contents)

### Class Components

Class components extend `React.Component` and require a `render()` method. While largely replaced by functional components and hooks, they remain relevant for legacy codebases and Error Boundaries:

```tsx
import React, { Component } from 'react';

interface CounterProps {
  step?: number;
}
interface CounterState {
  count: number;
}

export class CounterClass extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    const step = this.props.step ?? 1;
    this.setState((prev) => ({ count: prev.count + step }));
  };

  render() {
    return (
      <div className="counter-box">
        <p>Current count: {this.state.count}</p>
        <button onClick={this.increment}>Add Step</button>
      </div>
    );
  }
}
```

[Back to top⤴️](#table-of-contents)

### Component Composition

Instead of relying on deep inheritance, React uses component composition:

```tsx
interface DialogProps {
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}

export function Dialog({ title, children, actions }: DialogProps) {
  return (
    <div className="dialog-overlay" role="dialog" aria-modal="true">
      <div className="dialog-modal">
        <header className="dialog-header">
          <h2>{title}</h2>
        </header>
        <section className="dialog-content">{children}</section>
        {actions && <footer className="dialog-actions">{actions}</footer>}
      </div>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Reusable Components

Design components to be flexible, accessible, and easily themeable:

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  disabled,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size} ${isLoading ? 'btn-loading' : ''} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <span className="spinner" /> : children}
    </button>
  );
};
```

[Back to top⤴️](#table-of-contents)

### Props (Component)

Props (short for properties) are read-only inputs passed from a parent component down to a child:

```tsx
interface UserProps {
  id: string;
  name: string;
  email: string;
}

function UserRow({ id, name, email }: UserProps) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Default Props

Set default values using standard ES6 parameter defaults:

```tsx
interface BadgeProps {
  text: string;
  color?: 'blue' | 'green' | 'red';
  pill?: boolean;
}

export function Badge({ text, color = 'blue', pill = false }: BadgeProps) {
  return (
    <span className={`badge badge-${color} ${pill ? 'badge-pill' : ''}`}>
      {text}
    </span>
  );
}
```

[Back to top⤴️](#table-of-contents)

---

## Props

Props are the communication mechanism between components in React:

1. **Immutable**: A component must never modify its own props.
2. **Pure Functions**: Components with the same props should return the same JSX.
3. **Children Prop**: Any content placed between opening and closing JSX tags is received via `props.children`.

```tsx
interface ContainerProps {
  fluid?: boolean;
  children: React.ReactNode;
}

export function Container({ fluid = false, children }: ContainerProps) {
  return (
    <div className={fluid ? 'container-fluid' : 'container'}>
      {children}
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

---

## State

State represents data that changes over the lifespan of a component:

```tsx
import { useState } from 'react';

export function SwitchToggle() {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggle = () => {
    // Functional state update avoids race conditions
    setIsOn((previous) => !previous);
  };

  return (
    <button
      onClick={toggle}
      role="switch"
      aria-checked={isOn}
      className={isOn ? 'toggle-on' : 'toggle-off'}
    >
      {isOn ? 'Active' : 'Inactive'}
    </button>
  );
}
```

### Immutable State Update Rules

```tsx
// 1. Updating primitives
setCount(c => c + 1);

// 2. Updating objects: Spread operator
setUser(prev => ({ ...prev, name: 'Alice' }));

// 3. Updating arrays: Never use push, splice, or sort directly
setItems(prev => [...prev, newItem]);
setItems(prev => prev.filter(item => item.id !== removeId));
setItems(prev => prev.map(item => item.id === targetId ? { ...item, done: true } : item));
```

[Back to top⤴️](#table-of-contents)

---

## Event Handling

React normalizes browser events into cross-browser `SyntheticEvent` instances:

```tsx
export function InteractiveCanvas() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Stop event bubbling
    console.log('Button clicked at screen coords:', e.screenX, e.screenY);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('User pressed Enter!');
    }
  };

  return (
    <div className="interactive-area">
      <input type="text" onKeyDown={handleKeyDown} placeholder="Press Enter..." />
      <button onClick={handleClick}>Submit Action</button>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

---

## Conditional Rendering

```tsx
// 1. Ternary Operator (condition ? expr1 : expr2)
const UserGreeting = ({ isLoggedIn }: { isLoggedIn: boolean }) => (
  <span>{isLoggedIn ? 'Welcome back!' : 'Please sign in.'}</span>
);

// 2. Short-Circuit Evaluation (condition && expr)
const UnreadIndicator = ({ count }: { count: number }) => (
  <div>
    <h2>Inbox</h2>
    {count > 0 && <span className="badge">{count} new</span>}
  </div>
);

// 3. Switch-Case or Mapping Pattern
const StatusIcon = ({ status }: { status: 'idle' | 'success' | 'failed' }) => {
  const icons = {
    idle: <span>⏳</span>,
    success: <span>✅</span>,
    failed: <span>❌</span>,
  };
  return icons[status] ?? null;
};
```

[Back to top⤴️](#table-of-contents)

---

## Lists & Keys

```tsx
interface Task {
  id: string;
  title: string;
  done: boolean;
}

export function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.done ? 'task-done' : ''}>
          <span>{task.title}</span>
        </li>
      ))}
    </ul>
  );
}
```

[Back to top⤴️](#table-of-contents)

---

## Forms

### Controlled Components

The React component state acts as the "single source of truth" for form inputs:

```tsx
import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    agreeToTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox'
      ? (target as HTMLInputElement).checked
      : target.value;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label>
        Email:
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="general">General Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="billing">Billing</option>
        </select>
      </label>

      <label>
        <input
          name="agreeToTerms"
          type="checkbox"
          checked={formData.agreeToTerms}
          onChange={handleChange}
        />
        I agree to the Terms and Conditions
      </label>

      <button type="submit" disabled={!formData.agreeToTerms}>Send</button>
    </form>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Uncontrolled Components

Form data is handled directly by the DOM nodes and retrieved using a `useRef`:

```tsx
import { useRef } from 'react';

export function QuickUploadForm() {
  const fileRef = useRef<HTMLInputElement>(null);
  const notesRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const file = fileRef.current?.files?.[0];
    const notes = notesRef.current?.value;
    console.log('Uploaded:', file?.name, 'Notes:', notes);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" ref={fileRef} required />
      <input type="text" ref={notesRef} placeholder="Notes..." />
      <button type="submit">Upload</button>
    </form>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Validation

Client-side validation with real-time error states:

```tsx
import { useState } from 'react';

export function ValidatedInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const validate = (val: string) => {
    if (!val) {
      setError('Email is required.');
    } else if (!/\S+@\S+\.\S+/.test(val)) {
      setError('Invalid email address format.');
    } else {
      setError(null);
    }
  };

  return (
    <div className="input-group">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validate(e.target.value);
        }}
        className={error ? 'input-error' : 'input-valid'}
        placeholder="Enter email"
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)
---

## Hooks

React Hooks allow you to use state and other React features without writing class components.

### useState

Declares a state variable and provides a setter function:

```tsx
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### useEffect

Handles side effects such as subscriptions, network requests, and DOM mutations:

```tsx
import { useState, useEffect } from 'react';

export function WindowTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup phase
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Run once on mount

  return <p>Window width: {width}px</p>;
}
```

[Back to top⤴️](#table-of-contents)

### useRef

Holds a mutable reference that persists across re-renders without triggering a re-render:

```tsx
import { useRef, useEffect } from 'react';

export function AutoFocusTextInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} placeholder="I will be focused on mount" />;
}
```

[Back to top⤴️](#table-of-contents)

### useMemo

Memoizes the result of an expensive calculation to prevent re-computation on unrelated re-renders:

```tsx
import { useMemo } from 'react';

function calculatePrimes(max: number): number[] {
  const primes = [];
  for (let i = 2; i <= max; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) { isPrime = false; break; }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}

export function PrimeGenerator({ limit }: { limit: number }) {
  const primeList = useMemo(() => calculatePrimes(limit), [limit]);

  return <p>Found {primeList.length} prime numbers up to {limit}.</p>;
}
```

[Back to top⤴️](#table-of-contents)

### useCallback

Memoizes a callback function instance between renders:

```tsx
import React, { useState, useCallback } from 'react';

const DeleteButton = React.memo(({ onDelete }: { onDelete: () => void }) => {
  console.log('DeleteButton rendered');
  return <button onClick={onDelete}>Delete Entry</button>;
});

export function ItemManager() {
  const [items, setItems] = useState(['A', 'B', 'C']);

  // Preserves function reference unless dependencies change
  const handleDelete = useCallback(() => {
    setItems((prev) => prev.slice(0, -1));
  }, []);

  return (
    <div>
      <p>Items count: {items.length}</p>
      <DeleteButton onDelete={handleDelete} />
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### useContext

Reads and subscribes to context from your component:

```tsx
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export function HeaderNav() {
  const auth = useContext(AuthContext);

  return (
    <nav>
      {auth?.user ? (
        <span>Signed in as: {auth.user.name}</span>
      ) : (
        <button onClick={auth?.login}>Log In</button>
      )}
    </nav>
  );
}
```

[Back to top⤴️](#table-of-contents)

### useReducer

Manages complex state logic through action dispatches and reducer functions:

```tsx
import { useReducer } from 'react';

interface State {
  count: number;
  history: number[];
}

type Action =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1, history: [...state.history, state.count + 1] };
    case 'decrement':
      return { count: state.count - 1, history: [...state.history, state.count - 1] };
    case 'reset':
      return { count: 0, history: [] };
    default:
      return state;
  }
}

export function AdvancedCounter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, history: [] });

  return (
    <div>
      <h3>Count: {state.count}</h3>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <p>History: {state.history.join(', ')}</p>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### useLayoutEffect

Fires synchronously after all DOM mutations but before the browser paints. Ideal for measuring layout geometry:

```tsx
import { useState, useRef, useLayoutEffect } from 'react';

export function Tooltip({ text }: { text: string }) {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [text]);

  return (
    <div ref={ref} className="tooltip">
      {text} (Measured: {height}px)
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### useImperativeHandle

Customizes the instance value that is exposed to parent components when using `ref`:

```tsx
import { useRef, useImperativeHandle, forwardRef } from 'react';

export interface ModalHandle {
  open: () => void;
  close: () => void;
}

export const CustomModal = forwardRef<ModalHandle>((props, ref) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));

  return (
    <dialog ref={dialogRef}>
      <p>Modal Dialog Box</p>
      <button onClick={() => dialogRef.current?.close()}>Close</button>
    </dialog>
  );
});
```

[Back to top⤴️](#table-of-contents)

### useId

Generates unique, collision-free IDs across SSR and CSR for accessibility attributes:

```tsx
import { useId } from 'react';

export function AccessibleInputField({ label }: { label: string }) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" />
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### useTransition

Allows marking UI updates as non-blocking transitions:

```tsx
import { useState, useTransition } from 'react';

export function SearchFilter({ items }: { items: string[] }) {
  const [isPending, startTransition] = useTransition();
  const [filter, setFilter] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Urgent update (input responds immediately)
    const val = e.target.value;
    // Non-urgent update (heavy filtering can be interrupted)
    startTransition(() => {
      setFilter(val);
    });
  };

  const filtered = items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <input type="text" onChange={handleChange} placeholder="Search..." />
      {isPending && <span>Updating list...</span>}
      <ul>
        {filtered.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### useDeferredValue

Defers updating a value until urgent rendering tasks finish:

```tsx
import { useState, useDeferredValue } from 'react';

export function HeavyResultsList({ query }: { query: string }) {
  const deferredQuery = useDeferredValue(query);

  return (
    <div style={{ opacity: query !== deferredQuery ? 0.6 : 1 }}>
      <p>Results for: {deferredQuery}</p>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### useSyncExternalStore

Subscribes to an external non-React data store safely without tearing:

```tsx
import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}

export function NetworkStatusIndicator() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return <span>Network: {isOnline ? 'Online' : 'Offline'}</span>;
}
```

[Back to top⤴️](#table-of-contents)

### useInsertionEffect

Fires before all DOM mutations, intended specifically for CSS-in-JS library authors to inject `<style>` tags into the DOM:

```tsx
import { useInsertionEffect } from 'react';

export function DynamicStyleInjector({ cssRule }: { cssRule: string }) {
  useInsertionEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = cssRule;
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, [cssRule]);

  return null;
}
```

[Back to top⤴️](#table-of-contents)

### Custom Hooks

Custom hooks encapsulate stateful business logic for clean reuse across components:

```tsx
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (val: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}
```

[Back to top⤴️](#table-of-contents)

---

## Context API

The Context API allows you to broadcast values (theme, user, locale) across the component tree without manual prop drilling:

```tsx
import React, { createContext, useContext, useState } from 'react';

interface NotificationContextType {
  message: string | null;
  showNotification: (msg: string) => void;
  clearNotification: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<string | null>(null);

  const showNotification = (msg: string) => setMessage(msg);
  const clearNotification = () => setMessage(null);

  return (
    <NotificationContext.Provider value={{ message, showNotification, clearNotification }}>
      {children}
      {message && (
        <aside className="toast-notification">
          <span>{message}</span>
          <button onClick={clearNotification}>&times;</button>
        </aside>
      )}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
```

[Back to top⤴️](#table-of-contents)

---

## Routing

### React Router

Set up declarative client-side routing using `react-router-dom`:

```tsx
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/products" element={<ProductsLayout />}>
          <Route index element={<p>Select a product</p>} />
          <Route path=":productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function ProductsLayout() {
  return (
    <div>
      <h2>Products Catalog</h2>
      <Outlet />
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Nested Routes

Routes can be nested within parent components to create persistent shell layouts (e.g. sidebars and navbars):

```tsx
<Route path="/dashboard" element={<DashboardShell />}>
  <Route index element={<AnalyticsOverview />} />
  <Route path="settings" element={<AccountSettings />} />
  <Route path="billing" element={<BillingPortal />} />
</Route>
```

[Back to top⤴️](#table-of-contents)

### Route Params

Access URL dynamic segment tokens:

```tsx
import { useParams } from 'react-router-dom';

export function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  return <h3>Showing details for product: {productId}</h3>;
}
```

[Back to top⤴️](#table-of-contents)

### Search Params

Read and mutate URL query string parameters (`?sort=asc&page=2`):

```tsx
import { useSearchParams } from 'react-router-dom';

export function FilterControls() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sort = searchParams.get('sort') || 'name';

  return (
    <div>
      <p>Current Sort: {sort}</p>
      <button onClick={() => setSearchParams({ sort: 'price' })}>Sort by Price</button>
      <button onClick={() => setSearchParams({ sort: 'date' })}>Sort by Date</button>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Protected Routes

Enforce authentication gates before rendering sensitive views:

```tsx
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  redirectPath?: string;
}

export function ProtectedRoute({ isAuthenticated, redirectPath = '/login' }: ProtectedRouteProps) {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
}

// In Routes:
<Route element={<ProtectedRoute isAuthenticated={userLoggedIn} />}>
  <Route path="/account" element={<AccountView />} />
  <Route path="/admin" element={<AdminConsole />} />
</Route>
```

[Back to top⤴️](#table-of-contents)

### Lazy Routes

Combine `React.lazy` and `Suspense` for route-level code splitting:

```tsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const AdminReports = lazy(() => import('./pages/AdminReports'));

export function AppRoutes() {
  return (
    <Suspense fallback={<div className="route-loader">Loading view...</div>}>
      <Routes>
        <Route path="/admin/reports" element={<AdminReports />} />
      </Routes>
    </Suspense>
  );
}
```

[Back to top⤴️](#table-of-contents)

---

## API Calls

### fetch()

Native browser HTTP client with React hooks:

```tsx
import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(data => setUsers(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Axios

Popular third-party promise-based HTTP client with automatic JSON parsing and interceptors:

```tsx
import axios from 'axios';
import { useEffect, useState } from 'react';

const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
});

export function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    apiClient.get('/dashboard')
      .then(response => setData(response.data))
      .catch(err => console.error(err));
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}
```

[Back to top⤴️](#table-of-contents)

### Error Handling

```tsx
async function executeApiCall() {
  try {
    const res = await fetch('/api/checkout', { method: 'POST' });
    if (!res.ok) {
      const errBody = await res.json().catch(() => ({}));
      throw new Error(errBody.message || `Server responded with ${res.status}`);
    }
    return await res.json();
  } catch (err: any) {
    if (err.name === 'AbortError') {
      console.log('Request was aborted');
    } else {
      console.error('API Error:', err.message);
    }
  }
}
```

[Back to top⤴️](#table-of-contents)

### Cancellation

Cancel in-flight requests using standard browser `AbortController` inside `useEffect`:

```tsx
import { useEffect, useState } from 'react';

export function SearchResults({ query }: { query: string }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/search?q=${encodeURIComponent(query)}`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => setResults(data))
      .catch(err => {
        if (err.name !== 'AbortError') console.error(err);
      });

    // Cancel previous request when query changes or component unmounts
    return () => controller.abort();
  }, [query]);

  return <div>Found {results.length} matches.</div>;
}
```

[Back to top⤴️](#table-of-contents)

### File Upload

Upload binary files using multipart `FormData`:

```tsx
import { useState } from 'react';

export function FileUploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('document', file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Upload completed successfully!');
    }
  };

  return (
    <form onSubmit={handleUpload}>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button type="submit" disabled={!file}>Upload File</button>
    </form>
  );
}
```

[Back to top⤴️](#table-of-contents)
---

## State Management

### Context API (State)

The built-in Context API combined with `useReducer` works well for low-to-medium complexity global state:

```tsx
import React, { createContext, useContext, useReducer } from 'react';

type State = { theme: 'light' | 'dark' };
type Action = { type: 'TOGGLE_THEME' };

const StateContext = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(
    (s: State, a: Action) => a.type === 'TOGGLE_THEME' ? { theme: s.theme === 'light' ? 'dark' : 'light' } : s,
    { theme: 'light' }
  );

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
```

[Back to top⤴️](#table-of-contents)

### Redux Toolkit

The official, opinionated, batteries-included toolset for efficient Redux development:

```ts
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  username: string | null;
}

const initialState: AuthState = { token: null, username: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ token: string; username: string }>
    ) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.token = null;
      state.username = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const store = configureStore({ reducer: { auth: authSlice.reducer } });
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

[Back to top⤴️](#table-of-contents)

### Zustand

Zustand is a fast, unopinionated, lightweight store using simplified hooks:

```ts
import { create } from 'zustand';

interface TodoStore {
  todos: string[];
  addTodo: (text: string) => void;
  removeTodo: (index: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({ todos: [...state.todos, text] })),
  removeTodo: (idx) => set((state) => ({ todos: state.todos.filter((_, i) => i !== idx) })),
}));

// Usage in Component
export function TodoCounter() {
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);

  return (
    <div>
      <p>Total Tasks: {todos.length}</p>
      <button onClick={() => addTodo('Learn Zustand')}>Add Task</button>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Jotai

Jotai uses an atomic approach to state management for React:

```tsx
import { atom, useAtom } from 'jotai';

const countAtom = atom(0);
const doubleCountAtom = atom((get) => get(countAtom) * 2);

export function JotaiCounter() {
  const [count, setCount] = useAtom(countAtom);
  const [doubleCount] = useAtom(doubleCountAtom);

  return (
    <div>
      <p>Count: {count}, Double: {doubleCount}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### MobX

MobX uses transparent functional reactive programming (TFRP) via observable objects:

```tsx
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class TimerStore {
  secondsPassed = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.secondsPassed += 1;
  }

  reset() {
    this.secondsPassed = 0;
  }
}

const myTimer = new TimerStore();

export const TimerView = observer(() => (
  <div>
    <span>Seconds: {myTimer.secondsPassed}</span>
    <button onClick={() => myTimer.increase()}>Tick</button>
  </div>
));
```

[Back to top⤴️](#table-of-contents)

### Recoil

Recoil is Facebook's atomic state management library for React trees:

```tsx
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

export const textState = atom({
  key: 'textState',
  default: '',
});

export const charCountState = selector({
  key: 'charCountState',
  get: ({ get }) => get(textState).length,
});

export function TextInput() {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(charCountState);

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>Character Count: {count}</p>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

---

## Server State

### TanStack Query

Declarative asynchronous state synchronization, caching, and invalidation:

```tsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

async function fetchTasks() {
  const res = await fetch('/api/tasks');
  if (!res.ok) throw new Error('Failed to fetch tasks');
  return res.json();
}

export function TaskFeed() {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
    staleTime: 1000 * 60 * 5, // 5 minutes fresh
  });

  const mutation = useMutation({
    mutationFn: (newTask: { title: string }) =>
      fetch('/api/tasks', { method: 'POST', body: JSON.stringify(newTask) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
    },
  });

  if (isLoading) return <div>Loading tasks...</div>;
  if (isError) return <div>Error fetching tasks.</div>;

  return (
    <div>
      <ul>{data.map((t: any) => <li key={t.id}>{t.title}</li>)}</ul>
      <button onClick={() => mutation.mutate({ title: 'New Task' })}>Add Task</button>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### SWR

Vercel's lightweight Stale-While-Revalidate HTTP cache hook library:

```tsx
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function UserStatus() {
  const { data, error, isLoading } = useSWR('/api/user/status', fetcher, {
    refreshInterval: 10000, // Revalidate every 10s
  });

  if (isLoading) return <span>Checking status...</span>;
  if (error) return <span>Failed to load.</span>;

  return <span>Online Status: {data.status}</span>;
}
```

[Back to top⤴️](#table-of-contents)

---

## Styling

### CSS

Traditional global CSS stylesheets imported into root:

```css
/* App.css */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}
```

```tsx
import './App.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return <div className="container">{children}</div>;
}
```

[Back to top⤴️](#table-of-contents)

### CSS Modules

Locally scoped class names prevent styling collisions across large teams:

```css
/* Card.module.css */
.cardBox {
  background: #1f2937;
  border-radius: 8px;
  padding: 16px;
}
.cardTitle {
  color: #60a5fa;
}
```

```tsx
import styles from './Card.module.css';

export function Card({ title }: { title: string }) {
  return (
    <div className={styles.cardBox}>
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### SCSS

Sass preprocessor support with nested selectors, variables, and mixins:

```scss
/* theme.scss */
$primary-color: #3b82f6;

.banner {
  background-color: $primary-color;
  padding: 2rem;

  h1 {
    font-size: 2rem;
    color: white;
  }
}
```

[Back to top⤴️](#table-of-contents)

### Styled Components

CSS-in-JS library utilizing tagged template literals to style components directly:

```tsx
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

const StyledBtn = styled.button<ButtonProps>`
  background: ${(props) => (props.primary ? '#2563eb' : '#e5e7eb')};
  color: ${(props) => (props.primary ? '#ffffff' : '#111827')};
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export function Actions() {
  return (
    <div>
      <StyledBtn primary>Save Changes</StyledBtn>
      <StyledBtn>Cancel</StyledBtn>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Emotion

High-performance, lightweight CSS-in-JS library with flexible styling options:

```tsx
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const alertStyle = css`
  background-color: #fef2f2;
  border-left: 4px solid #ef4444;
  padding: 12px;
  color: #991b1b;
`;

export function ErrorBanner({ message }: { message: string }) {
  return <div css={alertStyle}>{message}</div>;
}
```

[Back to top⤴️](#table-of-contents)

### Tailwind CSS

Utility-first CSS framework enabling rapid UI construction directly inside JSX markup:

```tsx
export function MetricCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="flex flex-col p-6 bg-slate-800 rounded-xl border border-slate-700 hover:border-cyan-400 transition-colors shadow-lg">
      <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">{title}</span>
      <span className="text-3xl font-extrabold text-white mt-2">{value}</span>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

---

## Performance

### React.memo

Skips re-rendering a component if its incoming props are unchanged according to shallow equality:

```tsx
import React, { memo } from 'react';

interface RowProps {
  label: string;
  value: number;
}

export const TableRow = memo(function TableRow({ label, value }: RowProps) {
  console.log('Rendering TableRow:', label);
  return (
    <tr>
      <td>{label}</td>
      <td>{value}</td>
    </tr>
  );
});
```

[Back to top⤴️](#table-of-contents)

### Lazy Loading

Dynamically load heavy components on-demand rather than during initial bundle download:

```tsx
import { lazy } from 'react';

const VideoPlayer = lazy(() => import('./components/VideoPlayer'));
```

[Back to top⤴️](#table-of-contents)

### Suspense

Coordinates fallback loading states for lazily loaded components or asynchronous data promises:

```tsx
import { Suspense, lazy } from 'react';

const ChartWidget = lazy(() => import('./ChartWidget'));

export function AnalyticsDashboard() {
  return (
    <div className="dashboard">
      <h2>Performance Analytics</h2>
      <Suspense fallback={<div className="skeleton-loader">Loading chart...</div>}>
        <ChartWidget />
      </Suspense>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Code Splitting

Breaks down production bundles into smaller chunks that load only when needed:

```tsx
// Route-based splitting
const SettingsPage = lazy(() => import('./pages/Settings'));
const BillingPage = lazy(() => import('./pages/Billing'));
```

[Back to top⤴️](#table-of-contents)

### Memoization

Strategies to eliminate redundant computations and unstable function references:
- **`useMemo`**: Cache expensive calculations.
- **`useCallback`**: Cache function instances passed to memoized children.
- **Extract static data**: Move static objects, arrays, and regexes outside component functions.

[Back to top⤴️](#table-of-contents)

### Virtualization

Render only the DOM elements currently visible within the viewport for huge datasets (10,000+ items):

```tsx
import { useVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

export function VirtualizedList({ items }: { items: string[] }) {
  const parentRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  return (
    <div ref={parentRef} style={{ height: '400px', overflow: 'auto' }}>
      <div style={{ height: `${virtualizer.getTotalSize()}px`, position: 'relative' }}>
        {virtualizer.getVirtualItems().map((virtualRow) => (
          <div
            key={virtualRow.index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: `${virtualRow.size}px`,
              transform: `translateY(${virtualRow.start}px)`,
            }}
          >
            {items[virtualRow.index]}
          </div>
        ))}
      </div>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Bundle Optimization

1. **Tree Shaking**: Ensure third-party libraries use ES Modules (e.g. `import debounce from 'lodash-es/debounce'`).
2. **Analyzer**: Use `rollup-plugin-visualizer` in Vite to discover heavy dependencies.
3. **Asset Compression**: Compress SVGs and convert static images to modern WebP / AVIF formats.

[Back to top⤴️](#table-of-contents)

---

## Error Handling

### Error Boundaries

Catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI:

```tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  fallback?: ReactNode;
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught component error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-boundary-box">
          <h3>Something went wrong.</h3>
          <p>{this.state.error?.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
```

[Back to top⤴️](#table-of-contents)

---

## Portals

Portals render children into a DOM node that exists outside the DOM hierarchy of the parent component:

```tsx
import ReactDOM from 'react-dom';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function PortalModal({ isOpen, onClose, children }: PortalModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="portal-backdrop" onClick={onClose}>
      <div className="portal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}
```

[Back to top⤴️](#table-of-contents)

---

## Refs

Refs provide a way to access DOM nodes or store mutable values without triggering re-renders:

```tsx
import { useRef } from 'react';

export function VideoPlayerWithControls() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => videoRef.current?.play();
  const handlePause = () => videoRef.current?.pause();

  return (
    <div>
      <video ref={videoRef} width={400} src="/sample-video.mp4" />
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

---

## Forward Ref

Forwarding refs enables parent components to obtain a ref directly to an internal DOM node inside a child component:

```tsx
import { forwardRef } from 'react';

interface TextInputProps {
  label: string;
}

export const CustomInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label }, ref) => {
    return (
      <div className="custom-input-group">
        <label>{label}</label>
        <input ref={ref} className="styled-input" />
      </div>
    );
  }
);
```

[Back to top⤴️](#table-of-contents)

---

## Higher Order Components (HOC)

A Higher-Order Component is a function that takes a component and returns a new enhanced component:

```tsx
import React from 'react';

interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<P extends object>(
  Component: React.ComponentType<P>
) {
  return function WithLoadingComponent({ isLoading, ...props }: P & WithLoadingProps) {
    if (isLoading) return <div className="loader">Loading component...</div>;
    return <Component {...(props as P)} />;
  };
}
```

[Back to top⤴️](#table-of-contents)

---

## Render Props

A technique for sharing code between React components using a prop whose value is a function:

```tsx
import { useState } from 'react';

interface MouseTrackerProps {
  render: (mousePos: { x: number; y: number }) => React.ReactNode;
}

export function MouseTracker({ render }: MouseTrackerProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      style={{ height: '200px', border: '1px dashed #666' }}
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
    >
      {render(pos)}
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

---

## Compound Components

Compound components share implicit state and work together to form a cohesive UI widget:

```tsx
import React, { createContext, useContext, useState } from 'react';

const TabsContext = createContext<{ activeTab: string; setActiveTab: (id: string) => void } | undefined>(undefined);

export function Tabs({ defaultTab, children }: { defaultTab: string; children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="tabs-container">{children}</div>
    </TabsContext.Provider>
  );
}

Tabs.Button = function TabButton({ id, children }: { id: string; children: React.ReactNode }) {
  const ctx = useContext(TabsContext);
  return (
    <button
      className={ctx?.activeTab === id ? 'tab-active' : ''}
      onClick={() => ctx?.setActiveTab(id)}
    >
      {children}
    </button>
  );
};

Tabs.Panel = function TabPanel({ id, children }: { id: string; children: React.ReactNode }) {
  const ctx = useContext(TabsContext);
  if (ctx?.activeTab !== id) return null;
  return <div className="tab-panel">{children}</div>;
};
```

[Back to top⤴️](#table-of-contents)

---

## Custom Hooks Pattern

Extract domain state and handlers into cohesive reusable modules:

```tsx
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

[Back to top⤴️](#table-of-contents)
---

## React 19 Features

React 19 brings foundational enhancements to simplify asynchronous state, server-side data workflows, and form mutations.

### Actions

Actions are asynchronous functions that automatically handle pending states, optimistic updates, and form submissions:

```tsx
import { useActionState } from 'react';

async function submitFeedback(previousState: { success: boolean }, formData: FormData) {
  const comment = formData.get('comment');
  await fetch('/api/feedback', { method: 'POST', body: JSON.stringify({ comment }) });
  return { success: true };
}

export function FeedbackBox() {
  const [state, formAction, isPending] = useActionState(submitFeedback, { success: false });

  return (
    <form action={formAction}>
      <textarea name="comment" required placeholder="Your thoughts..." />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Send Feedback'}
      </button>
      {state.success && <p>Thank you for your feedback!</p>}
    </form>
  );
}
```

[Back to top⤴️](#table-of-contents)

### use()

The `use()` API allows unwrapping Promises and Contexts dynamically, even inside conditional blocks and loops:

```tsx
import { use, Suspense } from 'react';

function UserProfile({ dataPromise }: { dataPromise: Promise<{ name: string; role: string }> }) {
  // Directly read promise value inside render!
  const user = use(dataPromise);

  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.role}</p>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Server Components

React Server Components (RSC) execute exclusively on the server, generating zero client-side JavaScript bundle overhead:

```tsx
// Server Component (Default in Next.js App Router)
export default async function NewsFeed() {
  const news = await db.query('SELECT * FROM articles LIMIT 10');

  return (
    <section>
      <h2>Latest Headlines</h2>
      {news.map(article => (
        <article key={article.id}>
          <h3>{article.title}</h3>
        </article>
      ))}
    </section>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Asset Loading

React 19 natively preloads stylesheets, scripts, and fonts:

```tsx
import { preload, preconnect } from 'react-dom';

export function Home() {
  preconnect('https://fonts.googleapis.com');
  preload('/critical-styles.css', { as: 'style' });

  return <div>Welcome to React 19 with native asset preloading!</div>;
}
```

[Back to top⤴️](#table-of-contents)

### Compiler Overview

The **React Compiler** automatically memoizes components and hooks at build time, eliminating the need for manual `useMemo`, `useCallback`, and `React.memo` calls in modern applications.

[Back to top⤴️](#table-of-contents)

---

## Next.js

### App Router

Next.js App Router (`app/` directory) provides layout nesting, server-first data architecture, and streaming:

```tree
app/
├── layout.tsx         # Root layout wrapping all pages
├── page.tsx           # Home page ("/")
├── about/
│   └── page.tsx       # About page ("/about")
└── blog/
    ├── layout.tsx     # Blog shell layout
    ├── page.tsx       # Blog list ("/blog")
    └── [slug]/
        └── page.tsx   # Dynamic post page ("/blog/my-post")
```

[Back to top⤴️](#table-of-contents)

### Server Components (Next)

Server Components are the default in App Router, allowing direct database access and zero-bundle client weight:

```tsx
// app/dashboard/page.tsx
import { db } from '@/lib/db';

export default async function DashboardPage() {
  const metrics = await db.metrics.findFirst();
  return <div>Revenue: ${metrics.revenue}</div>;
}
```

[Back to top⤴️](#table-of-contents)

### Client Components

Opt-in to client-side interactivity using the `'use client'` directive at the very top of the file:

```tsx
'use client';

import { useState } from 'react';

export function InteractiveCounter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>;
}
```

[Back to top⤴️](#table-of-contents)

### Metadata

Export static or dynamic metadata for SEO:

```tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn React.js - Complete Roadmap',
  description: 'Master modern React from fundamentals to production architecture.',
};
```

[Back to top⤴️](#table-of-contents)

### Routing (Next)

Dynamic routing parameters and catch-all routes:

```tsx
// app/users/[id]/page.tsx
export default async function UserPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <h2>Viewing User: {id}</h2>;
}
```

[Back to top⤴️](#table-of-contents)

### Data Fetching

Native `fetch` with granular caching controls:

```tsx
// Cached indefinitely (SSG equivalent)
const staticData = await fetch('https://api.example.com/data', { cache: 'force-cache' });

// Dynamic fetch on every request (SSR equivalent)
const dynamicData = await fetch('https://api.example.com/live', { cache: 'no-store' });

// Incremental Static Regeneration (ISR)
const isrData = await fetch('https://api.example.com/news', { next: { revalidate: 60 } });
```

[Back to top⤴️](#table-of-contents)

### API Routes

Create backend HTTP endpoints using Next.js Route Handlers:

```ts
// app/api/health/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'healthy', uptime: process.uptime() });
}
```

[Back to top⤴️](#table-of-contents)

---

## Authentication

### JWT

Handling JSON Web Tokens in React applications:
- Store tokens in `httpOnly`, `Secure`, `SameSite=Strict` browser cookies to mitigate XSS risks.
- Intercept outbound requests to attach the `Authorization: Bearer <token>` header.

```ts
api.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

[Back to top⤴️](#table-of-contents)

### OAuth

OAuth 2.0 authorization code flow with PKCE for single-page applications:
1. User clicks "Login with GitHub".
2. App redirects to OAuth provider authorization URL.
3. Provider redirects back with authorization code.
4. Client sends code to backend to exchange for session tokens.

[Back to top⤴️](#table-of-contents)

### Firebase Auth

```tsx
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(initializeApp(firebaseConfig));

async function handleLogin(email: string, pass: string) {
  const userCredential = await signInWithEmailAndPassword(auth, email, pass);
  console.log('Signed in user:', userCredential.user.uid);
}
```

[Back to top⤴️](#table-of-contents)

### Clerk

```tsx
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

export function AuthBar() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Auth0

```tsx
import { useAuth0 } from '@auth0/auth0-react';

export function LoginButton() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <div>
      <span>Hello, {user?.name}</span>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  ) : (
    <button onClick={() => loginWithRedirect()}>Log In</button>
  );
}
```

[Back to top⤴️](#table-of-contents)

---

## Testing

### Jest

Classic JavaScript testing framework with built-in test runner, assertions, and mock functions.

[Back to top⤴️](#table-of-contents)

### Vitest

Next-generation, ultra-fast test runner native to Vite with full ESM, TypeScript, and Jest-compatible APIs:

```ts
import { describe, it, expect } from 'vitest';

describe('Math utilities', () => {
  it('correctly calculates sum', () => {
    expect(1 + 2).toBe(3);
  });
});
```

[Back to top⤴️](#table-of-contents)

### React Testing Library

Tests components from the perspective of real users:

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Counter } from './Counter';

describe('<Counter />', () => {
  it('increments count on click', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /increment/i });
    expect(screen.getByText(/count: 0/i)).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });
});
```

[Back to top⤴️](#table-of-contents)

### Cypress

Comprehensive end-to-end browser testing framework with visual time travel debugging:

```js
describe('Login Flow', () => {
  it('allows a user to log in', () => {
    cy.visit('/login');
    cy.get('input[name=email]').type('user@example.com');
    cy.get('input[name=password]').type('password123');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/dashboard');
  });
});
```

[Back to top⤴️](#table-of-contents)

### Playwright

Fast, cross-browser automated testing framework supporting Chromium, WebKit, and Firefox:

```ts
import { test, expect } from '@playwright/test';

test('verify application homepage', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page.locator('h1')).toContainText('Hello, learn-reactjs');
});
```

[Back to top⤴️](#table-of-contents)

---

## Accessibility (a11y)

1. **Semantic HTML**: Use native `<nav>`, `<main>`, `<section>`, `<article>`, `<button>`, `<dialog>` rather than generic `<div>` elements.
2. **Accessible Names**: Provide `aria-label` or visible text for icon buttons.
3. **Keyboard Navigation**: Ensure all interactive widgets can be activated using `Tab`, `Enter`, and `Space`.
4. **Color Contrast**: Maintain minimum WCAG AA contrast ratio of 4.5:1 for standard text.

[Back to top⤴️](#table-of-contents)

---

## Security

1. **XSS Prevention**: React automatically escapes strings embedded in JSX:
   ```tsx
   // Safe from XSS:
   <div>{userInput}</div>
   ```
2. **Avoid dangerouslySetInnerHTML**: Only use when strictly necessary, and sanitize using libraries like `DOMPurify`:
   ```tsx
   import DOMPurify from 'dompurify';
   <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHtml) }} />
   ```
3. **Safe URL Links**: When opening external links with `target="_blank"`, always add `rel="noopener noreferrer"`.

[Back to top⤴️](#table-of-contents)

---

## Internationalization (i18n)

Implement multi-language support using `react-i18next`:

```tsx
import { useTranslation } from 'react-i18next';

export function LanguageBanner() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h2>{t('welcome_title')}</h2>
      <button onClick={() => i18n.changeLanguage('es')}>Español</button>
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

---

## Progressive Web Apps (PWA)

Transform your React app into an installable, offline-capable application:
- **Service Worker**: Caches assets and API responses.
- **Web App Manifest (`manifest.json`)**: Configures app name, icons, and theme color.
- **Vite PWA Plugin**: Configure using `vite-plugin-pwa`.

[Back to top⤴️](#table-of-contents)

---

## Deployment

### Vercel

```bash
# Install Vercel CLI & Deploy
npm install -g vercel
vercel
```

[Back to top⤴️](#table-of-contents)

### Netlify

```bash
# Install Netlify CLI & Deploy
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

[Back to top⤴️](#table-of-contents)

### Firebase

```bash
# Initialize and deploy to Firebase Hosting
firebase init hosting
firebase deploy
```

[Back to top⤴️](#table-of-contents)

### Docker

Build and run production container image:

```bash
# Build Docker image
docker build -t learn-reactjs .

# Run container on port 5173
docker run -p 5173:5173 learn-reactjs
```

[Back to top⤴️](#table-of-contents)

### Nginx

Example production Nginx configuration for single-page routing:

```nginx
server {
    listen 80;
    server_name example.com;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

[Back to top⤴️](#table-of-contents)

---

## Folder Structure

Recommended production-grade structure for complex React projects:

```tree
src/
├── app/               # Next.js App Router pages or React Router config
├── assets/            # Static assets, fonts, icons
├── components/        # Reusable UI component library (Design System)
│   ├── ui/            # Atomic primitives (Button, Input, Modal, Badge)
│   └── layout/        # Navbar, Sidebar, Footer
├── features/          # Domain business features (Vertical slices)
│   ├── auth/          # Login, Register, auth API, auth store
│   └── products/      # Product list, cart, checkout
├── hooks/             # Shared custom React hooks
├── services/          # API services, Axios instances, WebSockets
├── store/             # Global Zustand / Redux stores
├── types/             # Shared TypeScript types and interfaces
└── utils/             # Helper functions, formatting, validation
```

[Back to top⤴️](#table-of-contents)

---

## Best Practices

1. **Keep Components Small and Focused**: Avoid monolithic components over 200 lines.
2. **Follow Rules of Hooks**: Never call hooks conditionally or inside loops.
3. **Colocate State**: Keep state as close to where it's consumed as possible.
4. **Prefer Composition Over Inheritance**: Use `children` and layout slots.
5. **Use Strict TypeScript**: Never use `any`; define explicit types for props and state.
6. **Optimize Renders**: Use `React.memo` and `useCallback` only when profiling reveals bottlenecks.

[Back to top⤴️](#table-of-contents)

---

## Design Patterns

### Atomic Design

Organize UI components into a clear hierarchy:
- **Atoms**: Fundamental HTML units (`Button`, `Input`, `Label`).
- **Molecules**: Combinations of atoms (`SearchBar = Input + Button`).
- **Organisms**: Complex interface sections (`Header = Logo + Nav + SearchBar`).
- **Templates**: Page-level wireframe layouts.
- **Pages**: Templates populated with real data.

[Back to top⤴️](#table-of-contents)

### Container/Presentational

Separates business logic from visual presentation:
- **Container Component**: Handles data fetching, state management, and side effects.
- **Presentational Component**: Pure function receiving data via props and rendering markup.

[Back to top⤴️](#table-of-contents)

### Compound Components Pattern

Allows components to work together sharing internal state implicitly (e.g. `<Accordion>`, `<Tabs>`).

[Back to top⤴️](#table-of-contents)

### Custom Hooks Pattern

Extracts all stateful logic from UI views into dedicated, independently testable functions.

[Back to top⤴️](#table-of-contents)
---

## Interview Questions

### React Interview Questions

#### 1. What is React and what makes it unique?
React is a declarative, component-based front-end JavaScript library for building user interfaces. It is distinguished by its Virtual DOM reconciliation mechanism, unidirectional data flow, and component lifecycle abstraction.

#### 2. What is the difference between Element and Component?
- A **React Element** is a plain JavaScript object describing what you want to appear on the screen (`const el = <h1>Hello</h1>;`).
- A **React Component** is a function or class that optionally accepts input (`props`) and returns a React element tree.

#### 3. How does Reconciliation work in React Fiber?
Reconciliation compares two Virtual DOM trees using a heuristic $O(n)$ diffing algorithm. If two elements have different types, React unmounts the old tree and builds a new one. If they have the same type, React updates only the changed attributes. Keys help identify items across list re-orderings.

[Back to top⤴️](#table-of-contents)

### Hooks Interview Questions

#### 1. Why do React Hooks have strict rules regarding top-level execution?
React relies on the sequential call order of hooks to link hook state to specific internal Fiber nodes. Calling hooks inside loops or conditions disrupts this index order, causing state corruption.

#### 2. What is the difference between `useEffect` and `useLayoutEffect`?
- `useEffect` runs **asynchronously** after the DOM mutations have been painted by the browser, avoiding layout blocking.
- `useLayoutEffect` runs **synchronously** immediately after DOM mutations but before the browser paints pixels, preventing visual flickering when measuring DOM elements.

#### 3. When should you use `useCallback` vs `useMemo`?
`useMemo` caches the **return value** of a computation, while `useCallback` caches the **function definition** itself across re-renders.

[Back to top⤴️](#table-of-contents)

### Redux Interview Questions

#### 1. What are the core principles of Redux?
1. Single source of truth (one centralized store).
2. State is read-only (mutations occur exclusively via dispatched actions).
3. Changes are made with pure functions (reducers).

#### 2. How does Redux Toolkit improve standard Redux?
RTK eliminates boilerplate via `createSlice`, includes Immer out-of-the-box for safe mutable-syntax state updates, and configures `redux-thunk` automatically.

[Back to top⤴️](#table-of-contents)

### Performance Interview Questions

#### 1. How do you prevent unnecessary re-renders in React?
- Wrap pure components in `React.memo`.
- Stabilize callbacks using `useCallback` and values using `useMemo`.
- Move state down the tree close to where it is used.
- Avoid passing inline object literals or functions as props to memoized children.

[Back to top⤴️](#table-of-contents)

### Scenario-based Questions

#### 1. How would you architect real-time notifications in a dashboard?
Establish a WebSocket connection inside a custom hook (`useWebSocket`), update a shared Zustand or Context store on incoming events, and display toast notifications using a React Portal.

[Back to top⤴️](#table-of-contents)

---

## Example Projects

### Todo App

Complete, fully-typed React 19 Todo list with local state:

```tsx
import React, { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos(prev => [...prev, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTodo = (id: number) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="todo-app">
      <h2>Todo App</h2>
      <form onSubmit={addTodo}>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add task..." />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(t => (
          <li key={t.id} onClick={() => toggleTodo(t.id)} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### CRUD App

A complete Create, Read, Update, Delete customer list blueprint:

```tsx
import { useState } from 'react';

interface Customer {
  id: string;
  name: string;
  email: string;
}

export function CustomerCRUD() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      setCustomers(prev => prev.map(c => c.id === editingId ? { ...c, name, email } : c));
      setEditingId(null);
    } else {
      setCustomers(prev => [...prev, { id: crypto.randomUUID(), name, email }]);
    }
    setName('');
    setEmail('');
  };

  const startEdit = (c: Customer) => {
    setEditingId(c.id);
    setName(c.name);
    setEmail(c.email);
  };

  const removeCustomer = (id: string) => {
    setCustomers(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div>
      <h3>Customer Directory</h3>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <button type="submit">{editingId ? 'Update' : 'Create'}</button>
      </form>
      <table>
        <thead><tr><th>Name</th><th>Email</th><th>Actions</th></tr></thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td><td>{c.email}</td>
              <td>
                <button onClick={() => startEdit(c)}>Edit</button>
                <button onClick={() => removeCustomer(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Authentication Flow

```tsx
import { useState } from 'react';

export function AuthFlow() {
  const [user, setUser] = useState<string | null>(null);

  return user ? (
    <div>
      <p>Welcome back, <strong>{user}</strong>!</p>
      <button onClick={() => setUser(null)}>Log Out</button>
    </div>
  ) : (
    <button onClick={() => setUser('demo_user')}>Simulate Login</button>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Dashboard App

Real-time metric summary widget with card layouts and stat badges:

```tsx
export function MetricDashboard() {
  const metrics = [
    { label: 'Total Revenue', value: '$45,231', change: '+12.5%' },
    { label: 'Active Users', value: '1,205', change: '+8.1%' },
    { label: 'Conversion Rate', value: '3.42%', change: '-0.4%' },
  ];

  return (
    <div className="dashboard-grid" style={{ display: 'flex', gap: '1rem' }}>
      {metrics.map((m, i) => (
        <div key={i} className="metric-card" style={{ padding: '1rem', border: '1px solid #333', borderRadius: '8px' }}>
          <h4>{m.label}</h4>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{m.value}</p>
          <span style={{ color: m.change.startsWith('+') ? 'green' : 'red' }}>{m.change}</span>
        </div>
      ))}
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### E-commerce Store

Product catalog with responsive shopping cart counter:

```tsx
import { useState } from 'react';

interface Product {
  id: number;
  title: string;
  price: number;
}

const inventory: Product[] = [
  { id: 1, title: 'Mechanical Keyboard', price: 129 },
  { id: 2, title: 'Wireless Mouse', price: 79 },
];

export function ECommerceCatalog() {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <div>
      <h3>Store Catalog (Cart: {cart.length})</h3>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {inventory.map(p => (
          <div key={p.id} style={{ border: '1px solid #444', padding: '1rem' }}>
            <h4>{p.title}</h4>
            <p>${p.price}</p>
            <button onClick={() => setCart(c => [...c, p])}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Chat App

Messaging layout with live message append:

```tsx
import { useState } from 'react';

export function SimpleChat() {
  const [messages, setMessages] = useState<string[]>(['Welcome to room #general']);
  const [text, setText] = useState('');

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    setMessages(prev => [...prev, text]);
    setText('');
  };

  return (
    <div className="chat-box" style={{ maxWidth: '400px', border: '1px solid #555', padding: '1rem' }}>
      <div style={{ height: '150px', overflowY: 'auto' }}>
        {messages.map((m, i) => <div key={i}>&bull; {m}</div>)}
      </div>
      <form onSubmit={send}>
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Message..." />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
```

[Back to top⤴️](#table-of-contents)

### Admin Panel

User permission table with role toggles and status management.

[Back to top⤴️](#table-of-contents)

### File Upload Manager

Drag-and-drop file upload with progress bar simulation and file size verification.

[Back to top⤴️](#table-of-contents)

### Kanban Board

Task progression columns (Todo, In Progress, Done) with status transition triggers.

[Back to top⤴️](#table-of-contents)

### Blog Platform

Markdown-rendered dynamic article pages with comments, author cards, and reading time estimates.

[Back to top⤴️](#table-of-contents)

### Netflix Clone

Horizontal video carousel featuring hero billboard preview, modal video player, and category carousels.

[Back to top⤴️](#table-of-contents)

---

## Cheat Sheets

### Hooks Cheat Sheet

| Hook | Type | Purpose | Example |
| :--- | :--- | :--- | :--- |
| `useState` | State | Component local state | `const [val, setVal] = useState(0)` |
| `useEffect` | Lifecycle | Passive side effect | `useEffect(() => { ... }, [deps])` |
| `useRef` | Ref | Persistent mutable value | `const ref = useRef(null)` |
| `useMemo` | Perf | Memoized calculated value | `const v = useMemo(() => fn(a), [a])` |
| `useCallback`| Perf | Memoized function reference | `const cb = useCallback(() => {}, [])` |
| `useContext` | Store | Read from React Context | `const val = useContext(MyContext)` |
| `useReducer` | State | Complex action state transitions | `const [s, d] = useReducer(reducer, init)` |
| `useTransition` | Conc | Non-blocking transition | `startTransition(() => setVal(x))` |

[Back to top⤴️](#table-of-contents)

### JSX Cheat Sheet

```tsx
// Attribute Binding
<img src={imageUrl} alt={imageDesc} />

// Conditional Class Name
<div className={`btn ${isActive ? 'btn-active' : ''}`} />

// Inline Styles (Object syntax)
<div style={{ backgroundColor: '#222', padding: '1rem' }} />

// List Rendering
{items.map(item => <Item key={item.id} data={item} />)}
```

[Back to top⤴️](#table-of-contents)

### Router Cheat Sheet

```tsx
// Route Definitions
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/items/:id" element={<ItemDetail />} />
</Routes>

// Programmatic Navigation
const navigate = useNavigate();
navigate('/dashboard', { replace: true });
```

[Back to top⤴️](#table-of-contents)

### Redux Toolkit Cheat Sheet

```ts
const slice = createSlice({
  name: 'counter',
  initialState: { val: 0 },
  reducers: {
    inc: (state) => { state.val += 1; },
  },
});
export const { inc } = slice.actions;
```

[Back to top⤴️](#table-of-contents)

### React Query Cheat Sheet

```tsx
// Query Fetch
const { data, isLoading } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });

// Mutation
const mutation = useMutation({ mutationFn: createUser, onSuccess: () => qc.invalidateQueries(['users']) });
```

[Back to top⤴️](#table-of-contents)

### Tailwind Cheat Sheet

| Class | CSS Equivalent |
| :--- | :--- |
| `flex items-center justify-between` | `display: flex; align-items: center; justify-content: space-between;` |
| `p-4 m-2` | `padding: 1rem; margin: 0.5rem;` |
| `rounded-lg shadow-md` | `border-radius: 0.5rem; box-shadow: ...;` |
| `bg-slate-900 text-white` | `background-color: rgb(15 23 42); color: #fff;` |

[Back to top⤴️](#table-of-contents)

---

## Resources

### Official Documentation
- [React Official Website](https://react.dev/)
- [Vite Documentation](https://vite.dev/)
- [TypeScript Official Docs](https://www.typescriptlang.org/)

### React Blog
- [React Official Blog](https://react.dev/blog)

### React Roadmap
- [Roadmap.sh - React Developer Roadmap](https://roadmap.sh/react)

### Community Resources
- [React GitHub Repository](https://github.com/facebook/react)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)

[Back to top⤴️](#table-of-contents)

---

## Contributing

Thank you for considering contributing to this project! By this, you agree to abide by the [Code Of Conduct](CODE_OF_CONDUCT.md).

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Stackblitz](https://stackblitz.com/)

## Connect with me

- [Twitter](https://twitter.com/manthan_ank)
- [LinkedIn](https://www.linkedin.com/in/manthanank)
- [Facebook](https://www.facebook.com/manthanank/)
- [Instagram](https://www.instagram.com/manthan_ank/)
- [YouTube](https://www.youtube.com/@manthanank)
- [GitHub](https://github.com/manthanank)

## Support

If you like this learning repository and find it useful, consider buying me a coffee or sponsoring me through the GitHub Sponsor. Your support will help me to continue and bring more exciting projects. Thank you!

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-donate-FFDD00?logo=buymeacoffee&logoColor=000)](https://www.buymeacoffee.com/manthanank)

[![Sponsor Me](https://img.shields.io/badge/Sponsor-GitHub-green?logo=github)](https://github.com/sponsors/manthanank)

---

Show your support by 🌟 the repository.