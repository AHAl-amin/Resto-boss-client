
import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../providers/Authprovider';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Login = () => {
   
    const [disable, setDisable] = useState(true)

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const toNavigate = location.state?.from?.pathname || "/";
    console.log(location.state)


    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: "user login successfully",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  navigate(toNavigate ,{replace: true});
            })
    }
    const handleValidateCapcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        }
        else {
            setDisable(true)
        }

        console.log(user_captcha_value);
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Restru Boss/login</title>
            </Helmet>
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
                                <a href="#" className="label-text-alt NavLink NavLink-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>

                            <input onBlur={handleValidateCapcha} type="text" name="capcha" placeholder="Type the text above" className="input input-bordered" required />

                         
                        </div>
                        <div className="form-control mt-6">
                            {/* apply disable for re captcha */}

                            <input disabled={false} className="btn btn-primary" type="submit" value='login' />
                        </div>
                        <p><span>New here? please </span> <NavLink to='/signup'><span className='text-blue-400'>Create an account</span></NavLink></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;