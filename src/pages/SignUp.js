import React from 'react';
import { Link } from 'react-router-dom';
import google from '../assets/images/icons/google.png';
import git from '../assets/images/icons/github.png';
import facebook from '../assets/images/icons/facebook.svg';


const SignUp = () => {
    return (
        <div className="flex h-screen bgSignUp justify-center items-center">
            <div className="card w-96 text-white  bg-transparent shadow-2xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                    <form>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text  text-white ">Name</span>
                            </label>
                            <input
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text  text-white">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text  text-white">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                            />
                        </div>
                        <input
                            className="btn w-full max-w-xs text-white mt-5"
                            type="submit"
                            value="Sign Up"
                        />
                    </form>
                    <p>
                        <small >
                            Already have an account?
                            <Link className="text-green-500 ml-2" to="/login">
                                Go to your account.
                            </Link>
                        </small>
                    </p>
                    <div className="divider">OR</div>
                    <div className=" flex justify-evenly bg-slate-200 py-3 rounded-lg items-center">
                        <button
                        >
                            <img src={google} alt="" />
                        </button>
                        <button
                        >
                            <img src={git} alt="" />
                        </button>
                        <button
                        >
                            <img className='w-[30px]' src={facebook} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;