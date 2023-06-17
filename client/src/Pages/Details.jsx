import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from '../Components/Comment';

function Details() {
  let params = useParams()
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true)
  const [rating, setRating] = useState(0);
  const fetchTeachers = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/teachers/${params.id}`);
      console.log(response.data);
      setTeachers(response.data);
      setLoading(false); const ratings = response.data.rating || []; // handle cases where there are no ratings     
      const sum = ratings.reduce((acc, rating) => acc + rating, 0);
      setRating(sum / ratings.length);
      console.log(rating)
    } catch (err) { console.log(err); }
  };
  useEffect(() => { fetchTeachers(); }, [setLoading]);
     

  return (
    <div mx={-20}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={teachers.imageUrl}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Name: {teachers.Name}</h1>
            <p className="py-6">
              Depratment :{" "}
              <span className="text-2xl">{teachers.department}</span>
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <button className="btn btn-primary">Rate</button>

            <div>
              {loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  {" "}
                  <h1>{teachers.Name}</h1>{" "}
                  <p>Average rating: {rating.toFixed(1)}</p>{" "}
                  
                </>
              )}{" "}
            </div>
          </div>
        </div>
      </div>
      <Comment />
    </div>
  );
}

export default Details