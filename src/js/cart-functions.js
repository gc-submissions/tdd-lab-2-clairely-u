function calculateChange (total, payment) {
    return payment-total;
}

function isSufficientPayment (total, payment) {
    if (payment >= total) {
        return true;
    } else {
        return false;
    }
}


// Come  back here, having issues getting for loop to iterate over all items.
const itemsArray = [ ];

function calculateTotal (itemsArray) {
    for (let items of itemsArray) {
        value = 0;
        value += items.price;
        return value;
    };
};

function addItem (itemsArray, name, price) {
    const newItem = {
        name: name,
        price: price,
    };
    itemsArray.push(newItem);
}


function removeItem(itemsArray, index) {
    itemsArray.splice(index, 1);
}



module.exports = {calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem};