import {useForm} from 'react-hook-form';
import { useState } from 'react';
import './Form.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
    name: yup.string().required("Campo nome obrigatório"),
    email: yup.string().email("Campo email inválido").required("Campo email obrigatório"),
    password: yup.string().min(6, "Minimo 6 digitos").required("Campo senha obrigatório"),
    confipassword: yup.string().min(6, "Minimo 6 digitos").required("Campo confirmar senha obrigatório").oneOf([yup.ref("password",)], "A senha deve ser igual"),
}).required();

const Form = () => {
    const [registro, setRegistro] = useState([]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
       resolver: yupResolver(schema)
    });

    const inforsubmit = (value) => {
      console.log(value.name);
      axios.post("http://localhost:3000/registro", {
        name: value.name,
        email: value.email,
        password: value.password,
        confipassword: value.confipassword,
      }).then((res) => setRegistro(res.data)).catch((err) => {
        console.log(err);
      });
    }

    const exibicaoMessage = () => {
      setTimeout(() =>{
        setRegistro(false);
      }, 7000)
    }

    exibicaoMessage();

    return(
        <div className='conteiner-form'>

            <div className='registro-information'>
              {registro.msg}
            </div>
            <form onSubmit={handleSubmit(inforsubmit)}>
                <div className='card-one'>
                    <h2>Registre-se</h2>
                    <label htmlFor='name'>Nome:</label>
                    <input type='text' name='name' {...register('name')}/>
                    <span>{errors.name?.message}</span>

                    <label  htmlFor='email'>Email:</label>
                    <input type='text' name='email' {...register('email')}/>
                    <span>{errors.email?.message}</span>

                    <label htmlFor='password'>Senha:</label>
                    <input type='text' name='password' {...register('password')}/>
                    <span>{errors.password?.message}</span>

                    <label htmlFor='confipassword'>Confirme sua senha:</label>
                    <input type='text' name='confipassword' {...register('confipassword')}/>
                    <span>{errors.confipassword?.message}</span>

                    <button className='action' type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;