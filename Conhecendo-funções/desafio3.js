let priceProduct = 475.00;
let paymentForm = 4;

function aplyDiscount(price, discount) {
    return (price - (price * (discount / 100)));
}

function aplyTaxes(price, taxes) {
    return (price + (price * (taxes / 100)));
}

if (paymentForm === 1) {
    console.log(aplyDiscount(priceProduct, 10));
} else if (paymentForm === 2) {
    console.log(aplyDiscount(priceProduct, 15));
} else if (paymentForm === 3) {
    console.log(priceProduct);
} else {
    console.log(aplyTaxes(priceProduct, 10));
}