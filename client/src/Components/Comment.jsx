
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Comment({ id}) {
  const [comment, setComment] = useState()
  const [comments, setComments] = useState();
  
    

  
  const fetchComment = async() => {
    try {
      const response = await axios.get(`http://localhost:3001/teachers/comment/${id}`);
      setComments(response.data)
      console.log(response.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  

    const postComments = async () => {
        
        try {
              axios.post(`http://localhost:3001/teachers/${id}'`, {
                comment
              }).then((response) => {
        console.log(response.data);
         });;
        }
        catch (err) {
            console.log(err)
        }
    }

  useEffect(() => {
    fetchComment();
  }, []);
    
    
  
  return (
    <div>
      <div className="w-full bg-gray-900 rounded-lg border p-2 ">
        <h3 className="font-bold">Comments about the teacher</h3>

          <div className="flex flex-col">
            
                  {comments?.map((m) => {
                      return (
                        
                          
                          <div className="border rounded-md p-3 ml-3 my-3" key={m.userID}>
                            <div className="flex gap-3 items-center">
                              <img
                                src="https://avatars.githubusercontent.com/u/22263436?v=4"
                                className="object-cover w-8 h-8 rounded-full 
                            border-2 border-emerald-400  shadow-emerald-400
                            "
                              />

                              <h3 className="font-bold">Anonymous</h3>
                            </div>

                                  <p className="text-gray-100 mt-2">{m.comment}</p>
                          </div>
                        
                      );
                    })}
           
          </div>

          <div className="w-full px-3 my-2">
            <textarea
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
              
              placeholder="Type Your Comment"
              onChange={(e) => {
                setComment(e.target.value);
              }}
              required
            ></textarea>
          </div>

          <div className="w-full flex justify-end px-3">
            <button
                          onClick={(e) => {
                postComments();
              }}
              className="px-2.5 py-1.5 rounded-md text-white text-sm bg-indigo-500"
              
            >Post Comment</button>
                  </div>
                  
        
      </div>
    </div>
  );
}

export default Comment