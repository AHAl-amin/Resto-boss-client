
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../providers/Authprovider';

import { Link } from 'react-router-dom';
const Login = () => {
    const captChaRef = useRef(null)
    const [disable ,setDisable]=useState(true)

    const {signIn} =useContext(AuthContext);


    useEffect(() =>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = event =>{
        event.preventDefault();
        const from = event.target;
        const email =from.email.value;
        const password =from.password.value;
        console.log(email,password)
        signIn(email ,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
    }
    const handleValidateCapcha = e =>{
        const user_captcha_value = captChaRef.current.value;
        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }

        console.log(user_captcha_value);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col md:flex-row ">
                <div className="text-center lg:text-left flex-1">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 flex-1">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>

                            <input type="text" name="capcha" ref={captChaRef} placeholder="Type the text above" className="input input-bordered" required />
                          
                        <button onClick={handleValidateCapcha} className="btn btn-outline  btn-xs mt-4">Validate</button>
                        </div>
                        <div className="form-control mt-6">
                           
                            <input disabled={disable} className="btn btn-primary" type="submit" value='login' />
                        </div>
                        <p><span>New here? please </span> <Link to='/signup'><span className='text-blue-400'>Create an account</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;