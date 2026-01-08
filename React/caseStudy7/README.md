CollabNotes – Advanced Zustand Case Study

This project uses Zustand + Middleware + React Query for advanced state management.
Below are all required packages, why they are needed, and how to install them.

1️⃣ Core Dependencies (Mandatory)
✅ React

Used for building UI components.

npm install react react-dom


Usually already installed if you created the app using Vite or CRA.

✅ Zustand

Lightweight global state management library.

npm install zustand


Used for:

Global state

Modular stores

Middleware integration

2️⃣ Middleware & State Utilities
✅ Immer

Used for immutable state updates with mutable syntax.

npm install immer


Used with:

import { immer } from 'zustand/middleware/immer';

3️⃣ Async Data Fetching (Server State)
✅ React Query (TanStack Query)

Used for:

Fetching data from APIs

Caching server data

Background refetching

Syncing with Zustand

npm install @tanstack/react-query


✔ Types are included by default
✔ Compatible with React Query v5

4️⃣ Development & Tooling
✅ TypeScript

Provides static typing and prevents runtime errors.

npm install -D typescript

✅ React Type Definitions

Required for TypeScript + React projects.

npm install -D @types/react @types/react-dom

5️⃣ Build Tool (If Not Already Installed)
✅ Vite (Recommended)

Used for fast development and builds.

npm install -D vite


If you created the project using npm create vite@latest, this is already installed.

📌 Complete Installation Command (One Shot)

If starting from scratch, you can run:

npm install zustand immer @tanstack/react-query
npm install -D typescript @types/react @types/react-dom

📁 Verify Installation

Run:

npm list zustand immer @tanstack/react-query


You should see all packages listed without errors.