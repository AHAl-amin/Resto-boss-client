import { useForm } from "react-hook-form";


const SignUp = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)

    } ;


    // const handleSignUp = event =>{
    //     event.preventDefault();
    //     const from = event.target;
    //     const name =from.name.value;
    //     const email =from.email.value;
    //     const password =from.password.value;
    //     console.log(email,password,name)
        // signIn(email ,password ,name)
        // .then(result =>{
        //     const user = result.user;
        //     console.log(user);
        // })
    // }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex flex-col md:flex-row lg:px-20 ">
                <div className="text-center lg:text-left flex-1">
                    <h1 className="text-5xl font-bold">Sign up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full shadow-2xl bg-base-100 flex-1">
                    <form  onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name" ,{ required: true })}placeholder="Your name" name='name' className="input input-bordered"  />
                            {errors.name && <span className="text-red-500">Name  is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email"  ,{ required: true })} placeholder="email" name='email' className="input input-bordered"  />
                            {errors.email && <span className="text-red-500">Email  is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password"  ,{ required: true , minLength:6 ,maxLength: 20  })} placeholder="password" name='password' className="input input-bordered"  />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {errors.password && <span className="text-red-500">password is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;