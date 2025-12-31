
// Use / create database
db = db.getSiblingDB("FastBite");


//0. Insert Initial Dummy Data (for delete test)

//1. Add a new vegan dish – Tofu Buddha Bowl


db.Dishes.insertOne({
  name: "Tofu Buddha Bowl",
  cuisine: "Asian",
  price: { value: 9.50, currency: "USD" },
  tags: ["vegan", "gluten-free"],
  available: true
});


db.Dishes.insertMany([
  {
    name: "Old Special Soup",
    cuisine: "Chinese",
    price: { value: 5.99, currency: "USD" },
    tags: ["spicy"],
    available: false
  },
  {
    name: "Veg Salad",
    cuisine: "Continental",
    price: { value: 8.50, currency: "USD" },
    tags: ["vegan"],
    available: true
  },
  {
    name: "Tofu",
    cuisine: "Chinese",
    price: { value: 8.50, currency: "USD" },
    tags: ["vegan"],
    available: true
  }
]);





   //2. Find all available vegan dishes under $12
      //(show only name and price)


db.Dishes.find(
  {
    tags: "vegan",
    available: true,
    "price.value": { $lt: 12 }
  },
  {
    _id: 0,
    name: 1,
    price: 1
  }
);


  // 3. Update price to $10.00 and add "popular" tag


db.Dishes.updateOne(
  { name: "Tofu Buddha Bowl" },
  {
    $set: { "price.value": 10.00 },
    $push: { tags: "popular" }
  }
);


   //4. Delete the dish "Old Special Soup"


db.Dishes.deleteOne({
  name: "Old Special Soup"
});


