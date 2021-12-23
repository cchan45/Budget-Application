// Notes found under 
// the functions are about what the functions will do when they are clicked

function create_budget(){
    // when clicked, assign a budget text and current remaining budget on screen
    let mybudget = document.getElementById("display_money")
    let money = document.getElementById("amount")
    if (mybudget.style.visibility === "hidden"){
        mybudget.style.visibility = "visible"
        mybudget.innerHTML += money.value
    }
    else{
        mybudget.style.visibility = "hidden"
    }
    display_current(money)
}

function display_current(money){
    // display the current price
    let remaining = document.getElementById("current")
    let num = document.getElementById("num")
    if (remaining.style.visibility === "hidden"){
        remaining.style.visibility = "visible"
        num.innerHTML += parseInt(money.value)
    }
    else{
        remaining.style.visibility = "hidden"
    }
}

function subtract_budget(){
    // subtracts the expenses from the total budget
    let remain_cost = document.getElementById("num")
    let item = document.getElementById("expense_item")
    let cost = document.getElementById("expense_amount")
    let display_costs = document.getElementById("expenses")
    display_costs.style.visibility = "visible"
    display_costs.innerHTML += cost.value + "\t" + item.value + "<br>"
    remain_cost.innerHTML -= parseInt(cost.value)
}
