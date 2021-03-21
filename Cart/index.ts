let cart:number = 0
let speaker:number = 0
let charge:number = 0
let telescope:number = 0
let earbuds:number = 0
let toothbrush:number = 0
let display:number = 0

let items: any[] = []

window.onload = function () {
    let storedItems = JSON.parse(localStorage.getItem("items"))
    cart = JSON.parse(localStorage.getItem("cart")) == null ? 0 : JSON.parse(localStorage.getItem("cart"))
    if (storedItems && storedItems.length > 0) {
        items = storedItems
    } else {
        items = []
    }
    innerHTMLHelper("cartSize", String(cart))
    for (let i = 0; i < items.length; i += 2) {
        innerHTMLHelper(items[i], "Items Added = "+items[i+1])
        if (items[i] == "speakerBought") speaker = items[i+1]
        else if (items[i] == "chargeBought") charge = items[i+1]
        else if (items[i] == "telescopeBought") telescope = items[i+1]
        else if (items[i] == "earbudsBought") earbuds = items[i+1]
        else if (items[i] == "toothbrushBought") toothbrush = items[i+1]
        else if (items[i] == "displayBought") display = items[i+1]
    }
}


document.getElementById("speakerBuy").onclick = function () {
    cart++
    speaker++
    let index = items.indexOf("speakerBought")
    if (index != -1) {
        items[index + 1] = speaker
    } else {
        items.push("speakerBought")
        items.push(speaker)
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("speakerBought", "Items Added = "+speaker)
}

document.getElementById("speakerRemove").onclick = function () {
    if (speaker > 0) {
        cart--
        speaker--
        let index = items.indexOf("speakerBought")
        items[index + 1] = speaker
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("speakerBought", "Items Added = "+speaker)
}

document.getElementById("speakerRemoveAll").onclick = function () {
    cart -= speaker
    speaker = 0
    let index = items.indexOf("speakerBought")
    if (index != -1) {
        items[index + 1] = speaker
    } else {
        items.push("speakerBought")
        items.push(speaker)
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("speakerBought", "Items Added = "+speaker)
}

document.getElementById("chargeBuy").onclick = function () {
    cart++
    charge++
    let index = items.indexOf("chargeBought")
    if (index != -1) {
        items[index + 1] = charge
    } else {
        items.push("chargeBought")
        items.push(charge)
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("chargeBought", "Items Added = "+charge)
}

document.getElementById("chargeRemove").onclick = function () {
    if (charge > 0) {
        cart--
        charge--
        let index = items.indexOf("chargeBought")
        items[index + 1] = charge
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("chargeBought", "Items Added = "+charge)
}

document.getElementById("chargeRemoveAll").onclick = function () {
    cart -= charge
    charge = 0
    let index = items.indexOf("chargeBought")
    if (index != -1) {
        items[index + 1] = charge
    } else {
        items.push("chargeBought")
        items.push(charge)
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("chargeBought", "Items Added = "+charge)
}

document.getElementById("telescopeBuy").onclick = function () {
    cart++
    telescope++
    let index = items.indexOf("telescopeBought")
    if (index != -1) {
        items[index + 1] = telescope
    } else {
        items.push("telescopeBought")
        items.push(telescope)
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("telescopeBought", "Items Added = "+telescope)
}

document.getElementById("telescopeRemove").onclick = function () {
    if (telescope > 0) {
        cart--
        telescope--
        let index = items.indexOf("telescopeBought")
        items[index + 1] = telescope
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("telescopeBought", "Items Added = "+telescope)
}

document.getElementById("telescopeRemoveAll").onclick = function () {
    cart -= telescope
    telescope = 0
    let index = items.indexOf("telescopeBought")
    if (index != -1) {
        items[index + 1] = telescope
    } else {
        items.push("telescopeBought")
        items.push(telescope)
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("telescopeBought", "Items Added = "+telescope)
}

document.getElementById("earbudsBuy").onclick = function () {
    cart++
    earbuds++
    let index = items.indexOf("earbudsBought")
    if (index != -1) {
        items[index + 1] = earbuds
    } else {
        items.push("earbudsBought")
        items.push(earbuds)
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("earbudsBought", "Items Added = "+earbuds)
}

document.getElementById("earbudsRemove").onclick = function () {
    if (earbuds > 0) {
        cart--
        earbuds--
        let index = items.indexOf("earbudsBought")
        items[index + 1] = earbuds
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("earbudsBought", "Items Added = "+earbuds)
}

document.getElementById("earbudsRemoveAll").onclick = function () {
    cart -= earbuds
    earbuds = 0
    let index = items.indexOf("earbudsBought")
    if (index != -1) {
        items[index + 1] = earbuds
    } else {
        items.push("earbudsBought")
        items.push(earbuds)
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("earbudsBought", "Items Added = "+earbuds)
}

document.getElementById("toothbrushBuy").onclick = function () {
    cart++
    toothbrush++
    let index = items.indexOf("toothbrushBought")
    if (index != -1) {
        items[index + 1] = toothbrush
    } else {
        items.push("toothbrushBought")
        items.push(toothbrush)
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("toothbrushBought", "Items Added = "+toothbrush)
}

document.getElementById("toothbrushRemove").onclick = function () {
    if (toothbrush > 0) {
        cart--
        toothbrush--
        let index = items.indexOf("toothbrushBought")
        items[index + 1] = toothbrush
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("toothbrushBought", "Items Added = "+toothbrush)
}

document.getElementById("toothbrushRemoveAll").onclick = function () {
    cart -= toothbrush
    toothbrush = 0
    let index = items.indexOf("toothbrushBought")
    if (index != -1) {
        items[index + 1] = toothbrush
    } else {
        items.push("toothbrushBought")
        items.push(toothbrush)
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("toothbrushBought", "Items Added = "+toothbrush)
}

document.getElementById("displayBuy").onclick = function () {
    cart++
    display++
    let index = items.indexOf("displayBought")
    if (index != -1) {
        items[index + 1] = display
    } else {
        items.push("displayBought")
        items.push(display)
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("displayBought", "Items Added = "+display)
}

document.getElementById("displayRemove").onclick = function () {
    if (display > 0) {
        cart--
        display--
        let index = items.indexOf("displayBought")
        items[index + 1] = display
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("displayBought", "Items Added = "+display)
}

document.getElementById("displayRemoveAll").onclick = function () {
    cart -= display
    display = 0
    let index = items.indexOf("displayBought")
    if (index != -1) {
        items[index + 1] = display
    } else {
        items.push("displayBought")
        items.push(display)
    }
    localStorage.setItem("items", JSON.stringify(items))
    localStorage.setItem("cart", JSON.stringify(cart))
    innerHTMLHelper("cartSize", String(cart))
    innerHTMLHelper("displayBought", "Items Added = "+display)
}

function innerHTMLHelper(location:string, input:string):void {
    document.getElementById(location).innerHTML = input
}