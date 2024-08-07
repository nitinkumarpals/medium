import { Link, useNavigate } from 'react-router-dom';
import { LabeledInput } from './LabeledInput';
import { SignupSchema } from '@nitinkumarpal/medium-common';
import { useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config';
export const Auth = ({ type }: { type: 'signin' | 'signup' }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupSchema>({
        name: '',
        username: '',
        password: ''
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signup' ? 'signup' : 'login'}`, postInputs );
            const jwt = await response.data;
            localStorage.setItem('token', 'Bearer ' + jwt);
            navigate('/blogs');
        } catch (error) {
            alert(`${error} ${type === 'signup' ? 'Signup' : 'Login'}`);
        }
    }
    return (
        <div className='h-screen flex justify-center flex-col'>
            <div className='flex justify-center'>
                <div>
                <div className='px-10'>
                    <div className='text-4xl font-extrabold'>
                        Create an account
                    </div>
                    <div className='text-slate-400 text-center mt-2'>
                        {type==='signup' ? 'Already have an account?' : 'Don\'t have an account?'}
                        <Link to={type==='signup' ? '/signin' : '/signup'} className='pl-2 underline'>
                        {type === 'signup' ? 'Sign in' : 'Sign up'}
                        </Link>
                    </div>
                </div>
                <div className='pt-2 mx-4 sm:mx-0'>
                    {type === 'signup' && <LabeledInput label='Name' placeholder='Enter your name' onChange={(e) => {
                        setPostInputs({ ...postInputs, name: e.target.value })
                    }} />}
                    <LabeledInput label='Email' type={'email'} placeholder='Enter your email' onChange={(e) => {
                        setPostInputs({ ...postInputs, username: e.target.value })
                    }} />
                    <LabeledInput label='Password' type={'password'} placeholder='Enter your password' onChange={(e) => {
                        setPostInputs({ ...postInputs, password: e.target.value })
                    }} />
                    <button onClick={sendRequest} type="button" className=" mt-4 w-full text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{type==='signup' ? 'Sign up' : 'Sign in'}</button>

                </div>
                </div>
            </div>
        </div>
    )
}

