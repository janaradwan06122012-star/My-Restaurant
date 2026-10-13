
let pizza = document.getElementById ("pi")
let sushi = document.getElementById ("su")
let fries = document.getElementById ("fr")
let fried = document.getElementById ("fc")
let burger = document.getElementById ("bu")
let tacoes = document.getElementById ("ta")

let c = document.getElementById("ccc")
let vv = document.getElementById("vvvv")
let order = localStorage.getItem("dankeName")
c.textContent = "Welcome Mr/Ms," + order

let orders = [];
let orderlist = document.getElementById("orderlist")

let total = 0;

function addorder(food, price){
    let extisitingItem = orders.find(function(item) {
   return item.food === food;
});
if (extisitingItem) {
    extisitingItem.quantity++;

} else {
   orders.push({
  food: food,
  price: price,
  quantity: 1
});  
}

displayOrders();
}


function displayOrders() {
    orderlist.innerHTML = "";
    total = 0;

    orders.forEach(function(item, index) {
        let itemTotal = item.price * item.quantity;
        total = total + itemTotal;


        let li = document.createElement("li");

        li.innerHTML = item.food + " | " + item.price + " $ " +
        " x " +
        item.quantity;

        let minusButton = document.createElement("button");

        minusButton.textContent = "-";
        minusButton.type = "button";


        minusButton.addEventListener("click", function(){
            item.quantity--;
            
            if(item.quantity === 0){
                orders.splice(index, 1);
            }
        displayOrders();
        });

         let plusButton = document.createElement("button");

        plusButton.textContent = "+";
        plusButton.type = "button";


        plusButton.addEventListener("click", function(){
            item.quantity++;
            
        
        displayOrders();
        });

        li.appendChild(minusButton);
        li.appendChild(plusButton);

        orderlist.appendChild(li);
    }

    )





 vv.textContent = "total price " + total + " $"

 localStorage.setItem("orders", JSON.stringify(orders));
 localStorage.setItem("total", total);
}

fried.addEventListener("click", function() {
 addorder("fried chicken", 30);
});

pizza.addEventListener("click", function() {
 addorder("pizza", 20);
});

sushi.addEventListener("click", function() {
 addorder("sushi", 56);
});

tacoes.addEventListener("click", function() {
 addorder("tacoes", 49);
});

burger.addEventListener("click", function() {
 addorder("burger", 15);
});

fries.addEventListener("click", function() {
 addorder("fries", 7);
});
let checkoutBtn = document.getElementById("kitty")
checkoutBtn.addEventListener("click" , function() {
    if (orders.length === 0) {
        vv.textContent="Please add some food first|";
        return;
    }
    window.location.href = "katkoot.html";
});