Project Structure
my-react-app/
│
├── src/
│   ├── components/
│   │   └── CommentBox.tsx
│   │
│   ├── tests/
│   │   └── CommentBox.test.tsx
│   │
│   ├── setupTests.ts
│   ├── global.d.ts
│   ├── App.tsx
│   └── main.tsx
│
├── jest.config.cjs
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md

🛠️ Technologies Used

React

TypeScript

Vite

Jest

React Testing Library

jsdom

📦 Dependencies (Dev)
jest
ts-jest
jest-environment-jsdom
@testing-library/react
@testing-library/jest-dom
@types/jest
@types/node

▶️ How to Run the Application
npm install
npm run dev

🧪 How to Run Tests
npm run test

Expected Output
PASS  src/tests/CommentBox.test.tsx
✓ renders input and post button
✓ calls onPost with input value and clears input

🧠 Key Learnings

Jest requires CommonJS configuration in ESM projects

jest-environment-jsdom must be installed explicitly (Jest 28+)

Custom matchers from @testing-library/jest-dom need both:

runtime setup (setupTests.ts)

type declaration (global.d.ts)

Vite config and Jest config are independent

🎯 Evaluation Focus

This project focuses on:

Correct Jest configuration

Type-safe React testing

Understanding common testing/debugging errors

Clean and maintainable test structure

✅ Conclusion

This mini-project demonstrates a real-world React testing workflow using Jest in a modern Vite + TypeScript setup.
It reflects best practices for frontend testing, debugging, and configuration.