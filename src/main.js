console.log("Koszyk");

var produkt1 = {
    name: "Placki",
    price: 197.90,
    tax: 1.23,
    discount: 0.05,
    ingredients: {
        carbs: "10g",
        fats: "20g",
    }
};

var produkt2 = {
    name: "Placki",
    price: 97.90,
    tax: 1.23,
    discount: 0.05,
    ingredients: {
        carbs: "10g",
        fats: "20g",
    }
};

var produkt3 = {
    name: "Placki",
    price: 197.90,
    tax: 1.23,
    discount: 0.05,
    ingredients: {
        carbs: "10g",
        fats: "20g",
    }
};

var price_gross = produkt1.price * produkt1.tax * (1 - produkt1.discount)

var product_name = document.getElementById('product_name');
var product_price = document.getElementById('product_price');

// if wersja 1
// if (discount > 0){
//     product_name.innerHTML = name + ' <b>PROMOTION</b> ';
// }else{
//     product_name.innerHTML = name;
// }

//  if wersja 2
product_name.innerHTML = produkt1.name + (produkt1.discount > 0 ? '<b>PROMOTION</b>' : "");



document.getElementById('product_price').innerText = (price_gross.toFixed(2));