const products = [
    { id: 1, name: "Widget", price: 50, quantity: 120 },
    { id: 2, name: "Gadget", price: 30, quantity: 80 },
    { id: 3, name: "Doohickey", price: 100, quantity: 200 },
    { id: 4, name: "Thingamajig", price: 75, quantity: 90 }
];


const discountedArr = products.map(product => {
    if (product.quantity > 100) {
        const newPrice = product.price - product.price * 0.1; 
        return { ...product, price: newPrice }; 
    }
    return { ...product }; 
});

const productsWithDiscount = discountedArr.filter((product, index) => {
    return product.price < products[index].price;
});

productsWithDiscount.forEach(product => {
    console.log(`Product: ${product.name}, New Price: ${product.price.toFixed(2)}`);
});
