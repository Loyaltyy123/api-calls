import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import GetComp from './components/LMPL0268/GetComp.jsx'
import PostComp from './components/LMPL0268/PostComp.jsx'
import PutComp from './components/LMPL0268/PutComp.jsx'
import DeleteComp from './components/LMPL0268/DeleteComp.jsx'
createRoot(document.getElementById('root')).render(
  <DeleteComp>
   
  </DeleteComp>,
)
