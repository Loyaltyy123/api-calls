import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import ExpensiveCalculationComponent from "./components/ExpensiveCalculationComponent.jsx";
import UseCallbackExample from './components/UseCallbackExample.jsx';
createRoot(document.getElementById('root')).render(
  <UseCallbackExample></UseCallbackExample>,
=======
import Master from './components/Master.jsx'
import GetComp from './components/LMPL0262/GetComp.jsx'
import PostComp from './components/LMPL0262/PostComp.jsx'
import PutComp from './components/LMPL0262/PutComp.jsx'
import DeleteComp from './components/LMPL0262/DeleteComp.jsx'

createRoot(document.getElementById('root')).render(
     <DeleteComp></DeleteComp>
>>>>>>> 51400ffc2d130b085e86052344d2cd28a0d3d961
)
