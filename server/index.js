const express = require('express')
const app = express()
const cors=require('cors')


app.use(cors())
app.use(express.json())

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
app.get('/', async(req, res) => { 
    try {
        await res.json(projects)
    }
    catch (err) {
        console.log(err)
    }
})
app.listen(3001, (req, res) => {
    console.log("connected at 3001")
})