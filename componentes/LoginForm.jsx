import {useForm} from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";
import "./LoginForm.css"

const schema = yup.object({
    email: yup.string().email("Campo email inválido").required("Campo email obrigatório"),
    password: yup.string().min(6, "Minimo 6 digitos").required("Campo senha obrigatório"),
}).required();

const LoginForm = () => {
    const [menssage, setMenssage] = useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const logininfor = (value) => {
        axios.post("http://localhost:3000/login", {
            email: value.email,
            password: value.password
        }).then((res) => setMenssage(res.data)).catch((err) => {
            console.log(err)
        });
    }

    const menssageInformacao = () => {
        setTimeout(() => {
            setMenssage(false);
        }, 7000);
    }

    menssageInformacao();
    return(
        <div className='conteiner-login'>
                <div className='message'>
                    {menssage.msg}
                </div>  
              <form onSubmit={handleSubmit(logininfor)}>
                <div className='card-one'>
                    <h2>Login</h2>
                    <label  htmlFor='email'>Email:</label>
                    <input type='text' name='email' {...register('email')}/>
                    <span>{errors.email?.message}</span>

                    <label htmlFor='password'>Senha:</label>
                    <input type='text' name='password' {...register('password')}/>
                    <span>{errors.password?.message}</span>

                    <button className='action' type='submit'>Login</button>
                </div>
            </form>
            
        </div>
    )
}

export default LoginForm;