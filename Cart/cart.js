var map = new Map([
    ["speakerBought", 799],
    ["chargeBought", 1000],
    ["telescopeBought", 1500],
    ["earbudsBought", 300],
    ["toothbrushBought", 250],
    ["displayBought", 1200]
]);
var nameMap = new Map([
    ["speakerBought", "Transparent speakers"],
    ["chargeBought", "Xiaomi Mi Air Charge"],
    ["telescopeBought", "Vaonis Vespera smart telescope"],
    ["earbudsBought", "Grado GT220 wireless earbuds"],
    ["toothbrushBought", "Oral B IO toothbrush"],
    ["displayBought", "Philips 558M1RY display"]
]);
window.onload = function () {
    var storedItems = JSON.parse(localStorage.getItem("items"));
    var count = 1;
    var total = 0;
    if (storedItems && storedItems.length > 0) {
        for (var i = 0; i < storedItems.length; i += 2) {
            var quantity = storedItems[i + 1];
            if (quantity != 0) {
                var num = count;
                var name_1 = storedItems[i];
                var price = map.get(storedItems[i]);
                insertRecord(num, name_1, String(price), String(quantity));
                count++;
                total += quantity * price;
            }
        }
    }
    document.getElementById("total").innerHTML = "$" + total;
};
function insertRecord(num, name, price, quantity) {
    var row = "<tr>\n    <th scope=\"row\">" + num + "</th>\n    <td>" + nameMap.get(name) + "</td>\n    <td>$" + price + "</td>\n    <td>" + quantity + "</td>\n  </tr>";
    document.getElementById("table").innerHTML += row;
}
