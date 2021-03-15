var teamBudgetObj = []
var programName = new Map()

function addBudget() {
    var obj = {}
    var client = document.getElementById("clientName").value;
    var program = document.getElementById("programName").value;
    var budget = document.getElementById("budget").value;

    if (client =="" || program == ""|| budget == "") {
        alert("One or more inputs are blank!");
    } else {
        if (programName.has(program)) {
            alert("Program name already exists!");
        } else {
            if (parseFloat(budget) < 0.0) {
                alert("Budget can not be negative!")
            }else {
                programName.set(program, parseInt(budget))
                obj.client = client
                obj.program = program
                obj.budget = budget
                save(obj)
                clearInputs()
            }
        }
    }
    
}

function save(data) {
    teamBudgetObj = JSON.parse(localStorage.getItem("TeamBudget"))

    if (teamBudgetObj && teamBudgetObj.length > 0) {
        teamBudgetObj.push(data)
        localStorage.setItem("TeamBudget", JSON.stringify(teamBudgetObj)) 
    } else {
        teamBudgetObj = []
        teamBudgetObj.push(data)
        localStorage.setItem("TeamBudget", JSON.stringify(teamBudgetObj))
    }
}

function clearInputs() {
    document.getElementById("clientName").value = ""
    document.getElementById("programName").value = ""
    document.getElementById("budget").value = ""
}