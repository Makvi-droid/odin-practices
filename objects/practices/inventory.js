const inventory = {
    apples: 10,
    oranges: 5,
    bananas: 15
};

function getStock(item){

    switch(item){
        case "apples":
            return inventory.apples;
            break;

        case "oranges":
            return inventory.oranges;
            break;

        case "bananas":
            return inventory.bananas;
            break;
        
        default:
            console.log("item not in object");
    }

}

console.log(getStock("banana"));