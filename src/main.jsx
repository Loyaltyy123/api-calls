import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ExpensiveCalculationComponent from "./components/ExpensiveCalculationComponent.jsx";
import UseCallbackExample from './components/UseCallbackExample.jsx';
createRoot(document.getElementById('root')).render(
  <UseCallbackExample></UseCallbackExample>,
)
