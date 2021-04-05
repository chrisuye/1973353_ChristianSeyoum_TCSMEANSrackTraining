module.exports = {logEmployee}
function logEmployee(){
    let fs = require("fs");
    let obj = require("readline-sync");
    let check = "y"
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    debugger
    while (check == "y") {
        let data
        let empJson
        let fname 
        let lname
        let gender
        let email
        debugger
        do {
            fname = obj.question("Enter first name: ")
        }while (fname.length == 0);

        do {
            lname = obj.question("Enter last name: ")
        }while (lname.length == 0); 

        do {
            gender = obj.question("Enter gender (M/F): ").toUpperCase()
        }while (gender.length == 0 || !(gender == "M" || gender == "F"));

        do {
            email = obj.question("Enter email: ")
        }while (email.length == 0 || !re.test(email.toLowerCase())); 
        
        debugger
        let currentDate = new Date();
        let time = currentDate.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
        let day = currentDate.getDate()
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let fullDate = month + "/" + day + "/" + year
        let emp = {"firstname":fname, "lastname":lname, "gender":gender, "email":email, "time":time, "date":fullDate}

        debugger
        try {
            data = fs.readFileSync("employee.json");
            let empString = data.toString();
            empJson = JSON.parse(empString);
        } catch (error) {
            empJson = new Array()
        }

        empJson.push(emp);

        debugger
        let jsonData = JSON.stringify(empJson, null, 3);
        fs.writeFileSync("employee.json", jsonData);
        console.log('file written');

        do {
            check = obj.question("Do you want to add more (y/n) ")
        } while (check != "y" && check != "n");
    }

}