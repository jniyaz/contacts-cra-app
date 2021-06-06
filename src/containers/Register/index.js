import React, { useEffect } from 'react'
import { register } from '../../contexts/actions/register'

const RegisterContainer = () => {

    useEffect(()=>{
        register()
    }, []);

    return (
        <div>
            <h2>Register</h2>
        </div>
    )
}

export default RegisterContainer
