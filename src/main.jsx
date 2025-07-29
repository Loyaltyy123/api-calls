import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Master from './components/Master.jsx'
import GetComp from './components/LMPL0262/GetComp.jsx'
import PostComp from './components/LMPL0262/PostComp.jsx'
import PutComp from './components/LMPL0262/PutComp.jsx'
import DeleteComp from './components/LMPL0262/DeleteComp.jsx'

createRoot(document.getElementById('root')).render(
     <DeleteComp></DeleteComp>
)
