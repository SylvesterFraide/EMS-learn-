// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataContextProvider from './Component/CRUD_LEARN/context/DataContext.jsx';


createRoot(document.getElementById('root')).render(
    <DataContextProvider>
        <App />
    </DataContextProvider>
)
