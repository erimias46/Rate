import React from 'react'


function Teachers() {
    const projects = [
      {
        id: 1,
        Name: "Tesfaye Meshu ",
        department: "Software Engineering",
        imageUrl:
          "https://louisville.edu/enrollmentmanagement/images/person-icon/image",
        courses: ["Os", " ML"],
      },
      {
        id: 2,
        Name: "Tamiru ",
        department: "Software Engineering ",
        imageUrl:
          "https://louisville.edu/enrollmentmanagement/images/person-icon/image",
        courses: ["Embedded", "Comp Arch"],
      },
      {
        id: 3,
        Name: "Eyob",
        department: "Software ",
        imageUrl:
          "https://louisville.edu/enrollmentmanagement/images/person-icon/image",
        courses: ["Web Development", "C++"],
      },
      {
        id: 4,
        Name: "goals",
        department: " hewhjew",
        imageUrl:
          "https://louisville.edu/enrollmentmanagement/images/person-icon/image",
        courses: ["Web Development", "C++"],
      },
      {
        id: 5,
        Name: "goals",
        department: " hewhjew",
        imageUrl:
          "https://louisville.edu/enrollmentmanagement/images/person-icon/image",
        courses: ["Web Development", "C++"],
      },
      {
        id: 6,
        Name: "goals",
        department: " hewhjew",
        imageUrl:
          "https://louisville.edu/enrollmentmanagement/images/person-icon/image",
        courses: ["Web Development", "C++"],
      },
    ];
  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Enter Name"
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button className="btn btn-accent mx-5">Search</button>
      </div>

      <div>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid h-20 card bg-base-300  place-items-center text-6xl">
            <a href="#projects">Teachers</a>
          </div>
          <div className="divider"></div>
          <div className="grid grid-cols-1 gap-4 mr-5 md:grid-cols-4">
            {projects.map((d) => {
              return (
                <div className="card " key={d.id}>
                  <figure>
                    <img src={d.imageUrl} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{d.Name}</h2>
                    <p>{d.department}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">
                        {d.courses?.[0]}
                      </div>
                      <div className="badge badge-outline">
                        {d.courses?.[1]}
                      </div>
                    </div>
                    <div>
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
                    </div>
                    <button className="btn  bg-gray-950  hover:bg-gray-300">
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