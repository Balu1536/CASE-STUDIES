import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Home from './pages/Home';
const AdminPage = lazy(() => import('./pages/AdminPage'));
export function AppRouter() {
    return (_jsx(BrowserRouter, { children: _jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/admin", element: _jsx(AdminPage, {}) })] }) }) }));
}
