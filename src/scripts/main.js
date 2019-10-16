const restaurant = {
    name: "Bob's Burgers",
    orders:[],
    placeOrder: function (meal) {
        this.orders.push(meal);
        
    },
    getOrders: function() {
        return(this.orders);
    }
}
     
const chickenComboMeal = {
    sandwhich: "chicken",
    fries: "true",
    drink: "large"

}

const cheeseBurgerComboMeal = {
    sandwhich: "burger",
    fries: "false",
    drink: "small"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
console.log(restaurant.orders);
restaurant.placeOrder(cheeseBurgerComboMeal)
console.log(restaurant.orders);
// Invoke the function to return the list of all orders

// Output all orders to the console using console.table()