import React from 'react'
import { Qoute } from '../components/Qoute'
import { Auth } from '../components/Auth'
const Signin = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <Auth type='signin' />
                </div>
                <div className='invisible lg:visible'>
                    <Qoute />
                </div>
            </div>
        </div>
    )
}

export default Signin

