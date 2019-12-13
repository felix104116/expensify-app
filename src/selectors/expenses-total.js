export default (expenses) => {
    let total = 0;
    if(expenses)
        total = expenses.map((expense) => expense.amount).reduce((acc,value) => {
            return acc+value;
        },0);
    return total;
}