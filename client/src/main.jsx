import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom"
import { router } from './routes/AppRoutes.jsx'
import { AuthProvider } from './components/context/AuthContext.jsx'

createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
);
