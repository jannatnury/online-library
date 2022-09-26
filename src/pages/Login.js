import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex h-screen backgroundImg justify-center items-center">
        <div className="card w-96 bg-base-100 bg-transparent shadow-2xl">
          <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered  w-full max-w-xs"
                />
              </div>
              <input
                className="btn w-full max-w-xs text-white mt-5"
                type="submit"
                value="Login"
              />
            </form>
            <p>
              <small >
                New to Little Library?
                <Link className="text-green-500 ml-2" to="/Sign-up">
                  Create New Account
                </Link>
              </small>
            </p>
            <div className="divider">OR</div>
            <div className=" flex justify-evenly items-center">
              <button
              >
                <h1>G</h1>
              </button>
              <button
              >
                <h1>Git</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;