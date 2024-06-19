// ##  IMPORTANT ## //

const nums=[1,2,3]

const total=nums.reduce(function(accumulator,currentValue){
    console.log(`accumulator ${accumulator} and currentent value ${currentValue}`);
    return accumulator+currentValue
},0)  /// use 5 or any number instead of 0 and test

console.log(total);

// write same using arrow function and run 

const total2=nums.reduce( (acc,curVal) => acc+curVal, 0)

console.log(total2);


const shoppingCart=[
    {
        itemName:'js',
        price: 599
    },
    {
        itemName:'python',
        price: 399
    },
    {
        itemName:'app',
        price: 999
    },
    {
        itemName:'cloud',
        price: 5999    
    },
]

const bill=shoppingCart.reduce((acc, item)=> acc+item.price,0)
// check if price is in string 
console.log(bill);