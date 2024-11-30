import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignUp = e =>{
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        console.log(email,password)
        
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            const createdAt = result?.user?.metadata?.creationTime
            const newUsers = {name,email,createdAt}
            fetch('http://localhost:5000/users',{
                method: 'POST',
                headers:{
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newUsers)
            })
            .then(res => res.json)
            .then(data => console.log(data))
        })
        .catch(err => console.log(err))
    }
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name='name' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </form>
        </div>
        </div>
    );
};

export default SignUp;