import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import{Link,useNavigate} from 'react-router-dom'

function Teachers() {

  const navigate = useNavigate()
  const openDetails = (id) => {
    navigate(`/teachers/${id}`)
    
  }
  const [teachers, setTeachers] = useState([])
  const [searchItem, setSearchItem] = useState()
  const [searching,setSearching]=useState(false)
  const[result,setResult]=useState()
  const handleSearch = async () => {
    
    setSearching(true)
    try {
      const response = await axios.get(`http://localhost:3001/teachers/search/${searchItem}`);
      console.log(response.data)
      setTeachers(response.data)
    }
    catch (err) {
      console.log(err)
    }
  }

    const fetchTeachers = async () => { 
        try {
            const response = await axios.get('http://localhost:3001/')
            console.log(response.data)
            setTeachers(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
      fetchTeachers()
    
    },[])
    
  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Enter Name"
          className="input input-bordered input-accent w-full max-w-xs"
          onChange={(e) => {
            setSearchItem(e.target.value)
            
          }}
        />
        <button onClick={() => {
          handleSearch()
        }} className="btn btn-accent mx-5">Search</button>
      </div>

      <div>
        <div className="flex flex-col w-full border-opacity-50 my-5">
          
          <div className="divider"></div>
          <div className="grid grid-cols-1 gap-4 mr-5 md:grid-cols-4">
            {setSearching && teachers.map((d) => {
              return (
                <div className="card " key={d.id}>
                  <figure>
                    <img src="Images/Teacher.jpg" alt="teacher" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{d.name}</h2>
                    <p>{d.department}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">
                        {d.course[5]}
                      </div>
                      <div className="badge badge-outline">
                        {d.course?.[5]}
                      </div>
                    </div>
                    <div></div>
                    <button
                      className="btn  bg-gray-950  hover:bg-gray-300"
                      onClick={() => {
                        openDetails(d.id);
                      }}
                    >
                      Descirption
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers