let map = new Map([
    [ "speakerBought", 799 ],
    [ "chargeBought", 1000 ],
    [ "telescopeBought", 1500 ],
    [ "earbudsBought", 300 ],
    [ "toothbrushBought", 250 ],
    [ "displayBought", 1200 ]
])
let nameMap = new Map([
    [ "speakerBought", "Transparent speakers" ],
    [ "chargeBought", "Xiaomi Mi Air Charge" ],
    [ "telescopeBought", "Vaonis Vespera smart telescope" ],
    [ "earbudsBought", "Grado GT220 wireless earbuds" ],
    [ "toothbrushBought", "Oral B IO toothbrush" ],
    [ "displayBought", "Philips 558M1RY display" ]
])

window.onload = function() {
    let storedItems = JSON.parse(localStorage.getItem("items"))
    let count: number = 1
    let total: number = 0
    if (storedItems && storedItems.length > 0) {
        for (let i = 0; i < storedItems.length; i += 2) {
            let quantity = storedItems[i + 1]
            if (quantity != 0) {
                let num = count
                let name = storedItems[i]
                let price = map.get(storedItems[i])
                insertRecord(num, name, String(price), String(quantity))
                count++
                total += quantity * price
            }
        }
    }
    document.getElementById("total").innerHTML = `$${total}`
}

function insertRecord(num: number, name: string, price: string, quantity: string): void{
    let row = `<tr>
    <th scope=\"row\">${num}</th>
    <td>${nameMap.get(name)}</td>
    <td>$${price}</td>
    <td>${quantity}</td>
  </tr>`

  document.getElementById("table").innerHTML += row
}