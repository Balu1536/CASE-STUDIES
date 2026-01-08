🗂️ Project Structure
src/
├── store/
│   ├── index.ts
│   ├── store.ts
│   └── slices/
│       ├── userSlice.ts
│       ├── fileSlice.ts
│       ├── commentSlice.ts
│       └── notificationsSlice.ts
│
├── components/
│   └── NotificationsPanel.tsx
│
├── App.tsx
└── main.tsx

📦 Libraries & Dependencies Used
Core Libraries
Library	Purpose
React	UI library
TypeScript	Type safety and developer experience
Zustand	Lightweight global state management
Zustand Middleware	Devtools & persistence
Vite	Fast development server and bundler
📌 Required Dependencies
{
  "react": "^18.x",
  "react-dom": "^18.x",
  "zustand": "^4.x"
}

📌 Development Dependencies
{
  "typescript": "^5.x",
  "vite": "^5.x",
  "@types/react": "^18.x",
  "@types/react-dom": "^18.x"
}


These versions may vary slightly depending on your setup.

⬇️ How to Download & Set Up the Project
Step 1: Clone the Repository
git clone <repository-url>

cd CASE-STUDIES


Navigate into the specific case study folder if applicable.

Step 2: Install Dependencies
npm install


This installs:

React

Zustand

TypeScript

Vite

All required type definitions

Step 3: Start the Development Server
npm run dev


The app will be available at:

http://localhost:5173

🔔 Notifications Mini Project (Challenge)
State Shape
{
  id: string;
  message: string;
  read: boolean;
}

Actions Implemented

addNotification

markAsRead

clearNotifications

UI Behavior

Displays unread notifications

Allows marking notifications as read

Automatically updates UI based on state changes

⚙️ Store Composition

All slices are combined using Zustand’s create

StateCreator ensures full TypeScript safety

devtools enables debugging

persist enables state persistence

Middleware is applied after slice composition, following best practices.

⚠️ Common Pitfalls Addressed
Pitfall	Best Practice
Computed selectors in store	Derive data in components
Implicit any types	Use StateCreator
Tight slice coupling	Feature-based slices
Infinite re-renders	Stable selectors only
Large monolithic store	Modular slice architecture
🧪 Testing Strategy

Each slice can be tested independently

Mock set and get functions

Verify state transitions without UI involvement