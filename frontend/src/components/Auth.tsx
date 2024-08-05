import { Link } from 'react-router-dom'
import { LabeledInput } from './LabeledInput'

export const Auth = () => {
    return (
        <div className='h-screen flex justify-center flex-col'>
            <div className='flex justify-center'>
                <div>
                    <div className='text-4xl font-extrabold'>
                        Create an account
                    </div>
                    <div className='text-slate-400'>
                        Already have an account?  
                        <Link to={'/signin'} className='pl-2 underline'>Login</Link>
                    </div>
                    <div>
                        <LabeledInput label='Name' placeholder='Enter your name' onChange={() => {}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

