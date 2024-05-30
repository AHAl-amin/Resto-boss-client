import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/Authprovider";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const SignUp = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUserProfile(data.name ,data.photoURL)
            .then(() =>{
                console.log('user profile info update')
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign up succesfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
            })
            .catch(error => console.log(error))
        })

    };


 

    return (
        <div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Restru Boss/sign up</title>
            </Helmet>
            <div className="hero-content flex flex-col md:flex-row lg:px-20 ">
                <div className="text-center lg:text-left flex-1">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full shadow-2xl bg-base-100 flex-1">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Your name" name='name' className="input input-bordered" />
                            {errors.name && <span className="text-red-500">Name  is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="photo URL" name="photoURL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-500">photo URL  is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" name='email' className="input input-bordered" />
                            {errors.email && <span className="text-red-500">Email  is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]/
                            })} placeholder="password" name='password' className="input input-bordered" />


                            {errors.password?.type === 'required' && <span className="text-red-500">password  is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-500">password must be 6 charecters </span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-500">password must be less 20 charecters </span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-500">password must be one lowercase ,one uppercase,one special character and one digit </span>}

                            <label className="label">
                                <a href="#" className="label-text-alt NavLink NavLink-hover">Forgot password?</a>
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                        <p><span>Already have an account? please </span> <NavLink to='/login'><span className='text-blue-400'>login</span></NavLink></p>
                   
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;