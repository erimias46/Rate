import React, { useState } from 'react'
import axios from 'axios';

function Auth() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const login =async () => {
        try {
            const response = await axios.post('http://localhost:3001/auth',
            username,password)
        } catch (error) {
            console.log(error)
        }
    }
    
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login</h1>
            <p className="py-6"></p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-control mt-6">
                <button
                  className="btn btn-accent"
                  onClick={() => {
                    createTeacher();
                  }}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth