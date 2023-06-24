import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Create() {
  const [Name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [courses, setCourses] = useState('')
  

  const createTeacher = async () => {
    try {
      
      await axios.post("http://localhost:3001/create/teachers", { Name, department, courses });
      alert("Teacher Added")
      
    } catch (error) {
      console.log(error.message)
    }
    
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Teachers</h1>
            <p className="py-6"></p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Department</span>
                </label>
                <select
                  onChange={(e) => setDepartment(e.target.value)}
                  className="select select-accent w-full max-w-xs"
                >
                  <option>Software Engineering</option>
                  <option>Mechanical </option>
                  <option>Electrical</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Courses</span>
                </label>
                <select
                  onChange={(e) => setCourses(e.target.value)}
                  className="select select-accent w-full max-w-xs"
                >
                  <option>Machine Learning</option>
                  <option>Fundamental</option>
                  <option>Web devlopment</option>
                </select>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent" onClick={() => {
                  createTeacher()
                }}>Create</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create