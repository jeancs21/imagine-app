import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoggedUserEmptyState, login } from '../../redux/states/loggedUser.state';
import { LoggedUser } from '../models/loggedUser.model';
import { mockAuthentication } from '../../utilities/mock-api';
import { manageLoggedUserState } from '../../services/persist-loggedUser-info.service';

const LogIn = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: LoggedUserEmptyState,
        mode: 'all',
    });


    const submit = async (data: LoggedUser) => {
        try {
            await mockAuthentication(data)
            dispatch(login(data))
            manageLoggedUserState(data);
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
        <div className='flex w-full justify-center'>
            <div className='flex flex-col w-96 gap-6 mt-36 p-8 rounded-lg border border-slate-300'>
                <div className='text-center font-medium text-2xl'>Inicie Sesión</div>
                <form className='flex flex-col gap-4 justify-center' onSubmit={handleSubmit(submit)}>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='email-input'>Correo electrónico</label>
                        <input
                            id='email-input'
                            className='rounded-md p-2 border border-black'
                            placeholder='Correo electrónico'
                            type='email'
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className='text-red-600'>Este campo es requerido o datos incorrectos</span>}
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='password-input'>Contraseña</label>
                        <input
                            id='password-input'
                            className='rounded-md p-2 border border-black'
                            placeholder='Correo electrónico'
                            type='password'
                            {...register("password", { required: true })}
                        />
                        {errors.password && <span className='text-red-600'>Este campo es requerido o datos incorrectos</span>}
                    </div>
                    <button
                        className='w-36 self-center bg-blue-500 rounded-md p-2 items-center text-white mt-6 hover:bg-blue-600 duration-300'
                        type='submit'
                        >
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    </>
  )
}

export default LogIn