window.onload = load()

function load() {
    var teamBudgetObj = JSON.parse(localStorage.getItem("TeamBudget"))

    if (teamBudgetObj && teamBudgetObj.length > 0) {
        for (i = 0; i < teamBudgetObj.length; i++) {
            insertNewRecord(teamBudgetObj[i])
        }
        createTotal(teamBudgetObj)
    } else {
        teamBudgetObj = []
    }
}

function insertNewRecord(data){
    var table = document.getElementById("budgetList")
    var body = table.getElementsByTagName("tbody")[0];
    var newRow = body.insertRow(body.length);

    var cell1 = newRow.insertCell(0);
    cell1.innerHTML=data.client;

    var cell2 = newRow.insertCell(1);
    cell2.innerHTML=data.program;

    var cell1 = newRow.insertCell(2);
    cell1.innerHTML="$"+data.budget;

}

function createTotal(data) {
    var total = 0
    var display = ""
    for (i = 0; i < data.length; i++) {
        total += parseFloat(data[i]["budget"])
    }
    display += "Total $" + total
    document.getElementById("total").innerHTML = display
}