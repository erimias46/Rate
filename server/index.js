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

app.post('/auth', (req, res) => {

  try {
    var sql=''
  } catch (error) {
    
  }
  
})
// app.get('/teachers/:name', async (req, res) => { 
//     try {
//       await res.json(projects.find((project) => project.Name === req.params.name))
//     } catch (error) {
//         console.log(err)
//     }
// })
app.get('/teachers/:id', (req, res) => { 
  //parseInt(req.params.id);
  try {
    //await res.json(projects)
    var sql = `Select *From teachersinfo where id=${parseInt(req.params.id)}`;
    con.query(sql, async function (err, result) {
      if (err) throw err;
      await res.json(result);
    });
  } catch (err) {
    console.log(err);
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
    const id = parseInt(req.params.id);
    var sql =
      `INSERT INTO comments (id, comment) VALUES ('${id}','${newinfo}');`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  var sql2 = `Select *From comments where id=${parseInt(req.params.id)}`;
  con.query(sql2, async function (err, result) {
    if (err) throw err;
    await res.json(result);
  });

  }
  catch(err){
    console.log(err)
  }
    
});

app.get("/teachers/comment/:id", async(req, res) => {
  try {
    const id = parseInt(req.params.id);
    var sql = `Select *From comments where id=${parseInt(req.params.id)}`;
    con.query(sql, async function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  } catch (err) {
    console.log(err);
  }
});
app.get("/teachers/search/:name", async (req, res) => {
  console.log(req.params.name)
  try {

    
    var sql = `Select *From teachersinfo where name LIKE '%${req.params.name}%'`;
    con.query(sql, async function (err, result) {
      if (err) throw err;
      res.json(result);
    });
  } catch (err) {
    console.log(err);
  }
});



app.listen(3001, (req, res) => {
    console.log("connected at 3001")
})