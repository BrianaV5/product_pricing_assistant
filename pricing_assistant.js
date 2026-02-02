 //create and Intialize Variables
let productName = "tote bag" //string
let costPerUnit = 11.50;
let basePrice = 18.99;
let discountRate = 0.10;
const salesTaxRate = 0.08;// const because tax rate 
let fixedMonthlyCosts = 1300;

// Calculate Pricing & Profit Metrics 
let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0; // boolean

//print to console
console.log(`Product name: ${productName}`);
console.log(`Discounted price: $${discountedPrice.toFixed(2)}`);
console.log(`Final price with tax: $${finalPriceWithTax.toFixed(2)}`);
console.log(`Profit per unit: $${profitPerUnit.toFixed(2)}`);
console.log(`Break-even units: ${breakEvenUnits}`);
console.log(`Per-unit profitability ${isProfitablePerUnit}`);