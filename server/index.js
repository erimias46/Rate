const express = require('express')
const app = express()
const cors = require('cors')
var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database:'rate'
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


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
    rating: [1, 2, 3, 1, 1, 2, 1, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5],
    comment: ["Abebebe", "ayele"],
  },
  {
    id: 2,
    Name: "Tamiru",
    department: "Software Engineering ",
    imageUrl:
      "https://louisville.edu/enrollmentmanagement/images/person-icon/image",
    courses: ["Embedded", "Comp Arch"],
    rating: [3, 4, 5, 1, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5],
    comment: ["google", "Apple"],
  },
  {
    id: 3,
    Name: "Eyob",
    department: "Software ",
    imageUrl:
      "https://louisville.edu/enrollmentmanagement/images/person-icon/image",
    courses: ["Web Development", "C++"],
    rating: [3, 4, 5, 1, 3, 1, 2, 1, 1, 2, 1, 4, 5, 3, 4, 5, 3, 4, 5],
    comment: ["google", "Apple"],
  },
  {
    id: 4,
    Name: "goals",
    department: " hewhjew",
    imageUrl:
      "https://louisville.edu/enrollmentmanagement/images/person-icon/image",
    courses: ["Web Development", "C++"],
    rating: [3, 4, 5, 1, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5, 3, 4, 5],
    comment: ["google", "Apple"],
  },
  {
    id: 5,
    Name: "goals",
    department: " hewhjew",
    imageUrl:
      "https://louisville.edu/enrollmentmanagement/images/person-icon/image",
    courses: ["Web Development", "C++"],
    rating: [1, 1, 2, 1, 3, 1, 5, 3, 4, 5, 4, 4, 5, 2, 4, 5, 3, 4, 5],
    comment: ["google", "Apple"],
  },
  {
    id: 6,
    Name: "goals",
    department: " hewhjew",
    imageUrl:
      "https://louisville.edu/enrollmentmanagement/images/person-icon/image",
    courses: ["Web Development", "C++"],
    rating: [3, 4, 5, 1, 3, 2, 5, 3, 4, 5, 2, 4, 5, 3, 1, 5, 3, 2, 5],
    comment: ["google", "Apple"],
  },
];
app.get('/', async(req, res) => { 
    try {
      //await res.json(projects)
      var sql = `Select *From teachersinfo`;
      con.query (sql, async function  (err, result) {
        if (err) throw err;
        await res.json(result);
      });
    }
    catch (err) {
        console.log(err)
    }
})
// app.get('/teachers/:name', async (req, res) => { 
//     try {
//       await res.json(projects.find((project) => project.Name === req.params.name))
//     } catch (error) {
//         console.log(err)
//     }
// })
app.get('/teachers/:id',  (req, res) => { 
    try {
       res.json(projects.find((project) => project.id === parseInt(req.params.id)))
    } catch (error) {
        console.log(err)
    }
})
app.post('/create/teachers', (req, res) => { 
  const name = req.body.Name;
  const department = req.body.department;
  const course = req.body.course;
  try {
    var sql =
      `INSERT INTO teachersinfo (name, department, course) VALUES ('${name}', '${department}','["morning", "noon", "night"]');`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  

  }
  catch(err){
    console.log(err)
  }
})

app.post("/teachers/:id", (req, res) => {
  try {
    const newinfo = req.body.comment;
    const foundProject = projects.find((project) => project.id === parseInt(req.params.id));
    if (foundProject) {
      foundProject.comment.push(newinfo); console.log(foundProject.comment);
      res.json(foundProject);
    } else { res.status(404).json({ message: "Project not found" }); }
  } catch (error) { console.log(error); }
});

app.listen(3001, (req, res) => {
    console.log("connected at 3001")
})