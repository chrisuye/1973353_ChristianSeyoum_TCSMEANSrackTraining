let http = require('http');
let url = require("url");
let fs = require("fs");
let port = 8080
let taskJson
let postHTML =`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Planner</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <style>
        h2 {text-align: center;}
        p {text-align: center;}
        div {text-align: center;}
        #deletForm { 
            margin: 0 auto; 
            width:250px;
        }
        input {
            width:250px;
        }
    </style>
</head>
<body>
    <h2>Task Planner</h2>
    <p>Add Task</p>
    <form method="post">
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Employee Id</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="empid">
            <span class="input-group-text" id="inputGroup-sizing-default">Task Id</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="taskid">
            <span class="input-group-text" id="inputGroup-sizing-default">Task</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="task">
            <span class="input-group-text" id="inputGroup-sizing-default">Deadline</span>
            <input type="date" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="deadline">
        </div>
        <div>
            <input type="submit" class="btn btn-success" value="Add Task"/>
            <input type="reset" value="Reset" class="btn btn-light"/>
        </div>
    </form>
    <br>
    <form method="post">
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Delete Task</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" name="delete">
            <input type="submit" value="Delete Task" class="btn btn-danger"/>
        </div>
    </form>
    <br>
    <form action="/list" method="get" id="deletForm">
        <input type="submit" value="List all tasks" class="btn btn-primary"/>
    </form>
</body>
</html>
`
let listHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Planner</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
</head>
<body>
<form action="/" method="get">
        <input type="submit" value="Back" class="btn btn-dark"/>
    </form>
<table class="table">
  <tr>
    <th>Emp Id</th>
    <th>Task Id</th>
    <th>Task</th>
    <th>Deadline</th>
  </tr>
  </body>
</html>
`
let map = new Map()


  let server = http.createServer(function (req, res) {
    var body = "";
    res.setHeader("content-type","text/html");
    var pathInfo = url.parse(req.url,true).pathname; 
    if (req.url=="/" || pathInfo=="/") {
        req.on('data', function (chunk) {
            body += chunk;
          });
        req.on('end', function () {
            let task = body.split("&")
            try {
                data = fs.readFileSync("task.json");
                let taskString = data.toString();
                taskJson = JSON.parse(taskString);
                for(let i = 0; i < taskJson.length; i++) {
                    map.set(taskJson[i].taskid, i)
                }
            } catch (error) {
                taskJson = new Array()
            }
            if (task.length == 4 && 
                !map.has(task[1].split("=")[1]) &&
                task[0].split("=")[1] != "" &&
                task[1].split("=")[1] != "" &&
                task[2].split("=")[1] != "" &&
                task[3].split("=")[1] != "") {
                let jbody = {
                    "empid": task[0].split("=")[1],
                    "taskid": task[1].split("=")[1],
                    "task": replaceAll(task[2].split("=")[1]),
                    "deadline": task[3].split("=")[1]
                }
    
                taskJson.push(jbody);
    
                let jsonData = JSON.stringify(taskJson, null, 3);
                fs.writeFileSync("task.json", jsonData);
            } else {
                if (task[0].split("=")[0] == "delete") {
                    let deleteIndex = map.get(task[0].split("=")[1])
                    if (deleteIndex != undefined) {
                        taskJson.splice(deleteIndex,1)
                        let jsonData = JSON.stringify(taskJson, null, 3);
                        fs.writeFileSync("task.json", jsonData);
                    }
                }
            }
            res.end(postHTML);
          });
    }else if(pathInfo=="/list"){
        try {
            let listHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Planner</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    
</head>
<body>
    <form action="/" method="get">
        <input type="submit" value="Back" class="btn btn-dark"/>
    </form>
<table class="table">
  <tr>
    <th>Emp Id</th>
    <th>Task Id</th>
    <th>Task</th>
    <th>Deadline</th>
  </tr>
`
            let data = fs.readFileSync("task.json");
            let taskString = data.toString();
            taskJson = JSON.parse(taskString);
            
            for (let i = 0; i < taskJson.length; i++) {
                listHTML += `
                <tr>
                    <td>${taskJson[i].empid}</td>
                    <td>${taskJson[i].taskid}</td>
                    <td>${taskJson[i].task}</td>
                    <td>${taskJson[i].deadline}</td>
                </tr>
                `
            }
            listHTML += `
            </table> 
            </body>
            </html>`
            res.end(listHTML)
        } catch (error) {
            res.end(listHTML)
        }
        
    }
  })

  server.listen(port,()=>console.log(`running on port num ${port}`));

  function replaceAll(word) {
      let wordArray = word.split("+")
      let newWord = wordArray[0]

      for (let i = 1; i < wordArray.length; i++) {
          newWord += " "+wordArray[i]
      }

      return newWord
  }