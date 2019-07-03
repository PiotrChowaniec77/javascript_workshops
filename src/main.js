console.log("Koszyk");

var name = "Placki",
    price = 97.90,
    tax = 1.23,
    discount = 0.05;
var price_gross = price * tax * (1 - discount)

var product_name = document.getElementById('product_name');
var product_price = document.getElementById('product_price');

// if wersja 1
if (discount > 0){
    product_name.innerHTML = name + ' <b>PROMOTION</b> ';
}else{
    product_name.innerHTML = name;
}

//  if wersja 2
product_name.innerHTML = name + (discount > 0 ? '<b>PROMOTION</b>' : "");



document.getElementById('product_price').innerText = (price_gross.toFixed(2));