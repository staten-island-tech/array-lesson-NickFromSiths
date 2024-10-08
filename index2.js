const products = [
  { name: "Laptop", price: 1200, category: "Electronics", rating: 4.5 },
  { name: "Phone", price: 800, category: "Electronics", rating: 4.7 },
  { name: "Headphones", price: 150, category: "Accessories", rating: 4.3 },
  { name: "Monitor", price: 300, category: "Electronics", rating: 4.6 },
  { name: "Keyboard", price: 100, category: "Accessories", rating: 4.1 },
  { name: "Chair", price: 250, category: "Furniture", rating: 4.0 },
  { name: "Desk", price: 450, category: "Furniture", rating: 4.8 },
];

console.log(" ");
console.log("Products");
console.log(" ");

products.forEach((el) => console.log(el.name, el.price));

console.log(" ");
console.log("Increased Prices");
console.log(" ");

products.forEach((el) => console.log(el.name, Math.round(el.price * 1.1)));

console.log(" ");

const categories = [];
products.forEach((el) => {
  if (!categories.includes(el.category)) {
    categories.push(el.category);
  }
});
console.log("Unique Categories:");
console.log(categories);

console.log(" ");

console.log("Electronics:");
const electronics = products
  .filter((el) => el.category === "Electronics")
  .forEach(
    console.log(electronics.name, electronics.price, electronics.rating)
  );
