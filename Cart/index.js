var cart = 0;
var speaker = 0;
var charge = 0;
var telescope = 0;
var earbuds = 0;
var toothbrush = 0;
var display = 0;
var items = [];
window.onload = function () {
    var storedItems = JSON.parse(localStorage.getItem("items"));
    cart = JSON.parse(localStorage.getItem("cart")) == null ? 0 : JSON.parse(localStorage.getItem("cart"));
    if (storedItems && storedItems.length > 0) {
        items = storedItems;
    }
    else {
        items = [];
    }
    innerHTMLHelper("cartSize", String(cart));
    for (var i = 0; i < items.length; i += 2) {
        innerHTMLHelper(items[i], "Items Added = " + items[i + 1]);
        if (items[i] == "speakerBought")
            speaker = items[i + 1];
        else if (items[i] == "chargeBought")
            charge = items[i + 1];
        else if (items[i] == "telescopeBought")
            telescope = items[i + 1];
        else if (items[i] == "earbudsBought")
            earbuds = items[i + 1];
        else if (items[i] == "toothbrushBought")
            toothbrush = items[i + 1];
        else if (items[i] == "displayBought")
            display = items[i + 1];
    }
};
document.getElementById("speakerBuy").onclick = function () {
    cart++;
    speaker++;
    var index = items.indexOf("speakerBought");
    if (index != -1) {
        items[index + 1] = speaker;
    }
    else {
        items.push("speakerBought");
        items.push(speaker);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("speakerBought", "Items Added = " + speaker);
};
document.getElementById("speakerRemove").onclick = function () {
    if (speaker > 0) {
        cart--;
        speaker--;
        var index = items.indexOf("speakerBought");
        items[index + 1] = speaker;
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("speakerBought", "Items Added = " + speaker);
};
document.getElementById("speakerRemoveAll").onclick = function () {
    cart -= speaker;
    speaker = 0;
    var index = items.indexOf("speakerBought");
    if (index != -1) {
        items[index + 1] = speaker;
    }
    else {
        items.push("speakerBought");
        items.push(speaker);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("speakerBought", "Items Added = " + speaker);
};
document.getElementById("chargeBuy").onclick = function () {
    cart++;
    charge++;
    var index = items.indexOf("chargeBought");
    if (index != -1) {
        items[index + 1] = charge;
    }
    else {
        items.push("chargeBought");
        items.push(charge);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("chargeBought", "Items Added = " + charge);
};
document.getElementById("chargeRemove").onclick = function () {
    if (charge > 0) {
        cart--;
        charge--;
        var index = items.indexOf("chargeBought");
        items[index + 1] = charge;
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("chargeBought", "Items Added = " + charge);
};
document.getElementById("chargeRemoveAll").onclick = function () {
    cart -= charge;
    charge = 0;
    var index = items.indexOf("chargeBought");
    if (index != -1) {
        items[index + 1] = charge;
    }
    else {
        items.push("chargeBought");
        items.push(charge);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("chargeBought", "Items Added = " + charge);
};
document.getElementById("telescopeBuy").onclick = function () {
    cart++;
    telescope++;
    var index = items.indexOf("telescopeBought");
    if (index != -1) {
        items[index + 1] = telescope;
    }
    else {
        items.push("telescopeBought");
        items.push(telescope);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("telescopeBought", "Items Added = " + telescope);
};
document.getElementById("telescopeRemove").onclick = function () {
    if (telescope > 0) {
        cart--;
        telescope--;
        var index = items.indexOf("telescopeBought");
        items[index + 1] = telescope;
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("telescopeBought", "Items Added = " + telescope);
};
document.getElementById("telescopeRemoveAll").onclick = function () {
    cart -= telescope;
    telescope = 0;
    var index = items.indexOf("telescopeBought");
    if (index != -1) {
        items[index + 1] = telescope;
    }
    else {
        items.push("telescopeBought");
        items.push(telescope);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("telescopeBought", "Items Added = " + telescope);
};
document.getElementById("earbudsBuy").onclick = function () {
    cart++;
    earbuds++;
    var index = items.indexOf("earbudsBought");
    if (index != -1) {
        items[index + 1] = earbuds;
    }
    else {
        items.push("earbudsBought");
        items.push(earbuds);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("earbudsBought", "Items Added = " + earbuds);
};
document.getElementById("earbudsRemove").onclick = function () {
    if (earbuds > 0) {
        cart--;
        earbuds--;
        var index = items.indexOf("earbudsBought");
        items[index + 1] = earbuds;
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("earbudsBought", "Items Added = " + earbuds);
};
document.getElementById("earbudsRemoveAll").onclick = function () {
    cart -= earbuds;
    earbuds = 0;
    var index = items.indexOf("earbudsBought");
    if (index != -1) {
        items[index + 1] = earbuds;
    }
    else {
        items.push("earbudsBought");
        items.push(earbuds);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("earbudsBought", "Items Added = " + earbuds);
};
document.getElementById("toothbrushBuy").onclick = function () {
    cart++;
    toothbrush++;
    var index = items.indexOf("toothbrushBought");
    if (index != -1) {
        items[index + 1] = toothbrush;
    }
    else {
        items.push("toothbrushBought");
        items.push(toothbrush);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("toothbrushBought", "Items Added = " + toothbrush);
};
document.getElementById("toothbrushRemove").onclick = function () {
    if (toothbrush > 0) {
        cart--;
        toothbrush--;
        var index = items.indexOf("toothbrushBought");
        items[index + 1] = toothbrush;
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("toothbrushBought", "Items Added = " + toothbrush);
};
document.getElementById("toothbrushRemoveAll").onclick = function () {
    cart -= toothbrush;
    toothbrush = 0;
    var index = items.indexOf("toothbrushBought");
    if (index != -1) {
        items[index + 1] = toothbrush;
    }
    else {
        items.push("toothbrushBought");
        items.push(toothbrush);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("toothbrushBought", "Items Added = " + toothbrush);
};
document.getElementById("displayBuy").onclick = function () {
    cart++;
    display++;
    var index = items.indexOf("displayBought");
    if (index != -1) {
        items[index + 1] = display;
    }
    else {
        items.push("displayBought");
        items.push(display);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("displayBought", "Items Added = " + display);
};
document.getElementById("displayRemove").onclick = function () {
    if (display > 0) {
        cart--;
        display--;
        var index = items.indexOf("displayBought");
        items[index + 1] = display;
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("displayBought", "Items Added = " + display);
};
document.getElementById("displayRemoveAll").onclick = function () {
    cart -= display;
    display = 0;
    var index = items.indexOf("displayBought");
    if (index != -1) {
        items[index + 1] = display;
    }
    else {
        items.push("displayBought");
        items.push(display);
    }
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("cart", JSON.stringify(cart));
    innerHTMLHelper("cartSize", String(cart));
    innerHTMLHelper("displayBought", "Items Added = " + display);
};
function innerHTMLHelper(location, input) {
    document.getElementById(location).innerHTML = input;
}
