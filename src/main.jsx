import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GetComp from './components/LMPL0263/GetComp.jsx'
import PostComp from './components/LMPL0263/PostComp.jsx'
import PutComp from './components/LMPL0263/PutComp.jsx'
import DeleteComp from './components/LMPL0263/DeleteComp.jsx'

createRoot(document.getElementById('root')).render(
  <DeleteComp>
  </DeleteComp>,
)
git 