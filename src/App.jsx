import './App.css'
import {useForm} from 'react-hook-form';
import Form from '../componentes/Form';
import LoginForm from '../componentes/LoginForm';
import { Outlet } from 'react-router-dom';
import NavBar from "../componentes/NavBar";

function App() {
  return (
    <div className='conteiner'>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
