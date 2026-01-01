
// Switch / create database
db = db.getSiblingDB("movieFlix");


db.watchHistory.insertMany([
  {
    movie: "Edge of Tomorrow",
    genre: "Sci-Fi",
    country: "USA",
    views: 15000,
    rating: 8.2,
    year: 2024
  },
  {
    movie: "Interstellar",
    genre: "Sci-Fi",
    country: "USA",
    views: 22000,
    rating: 8.6,
    year: 2024
  },
  {
    movie: "Inception",
    genre: "Sci-Fi",
    country: "UK",
    views: 18000,
    rating: 8.8,
    year: 2024
  },
  {
    movie: "Titanic",
    genre: "Romance",
    country: "USA",
    views: 12000,
    rating: 7.9,
    year: 2023
  },
  {
    movie: "The Notebook",
    genre: "Romance",
    country: "USA",
    views: 14000,
    rating: 7.8,
    year: 2024
  },
  {
    movie: "Avengers: Endgame",
    genre: "Action",
    country: "USA",
    views: 30000,
    rating: 8.4,
    year: 2024
  },
  {
    movie: "John Wick",
    genre: "Action",
    country: "USA",
    views: 17000,
    rating: 7.9,
    year: 2024
  },
  {
    movie: "RRR",
    genre: "Action",
    country: "India",
    views: 25000,
    rating: 8.1,
    year: 2024
  }
]);

// 2. Average Rating & Total Views per Genre (USA)

db.watchHistory.aggregate([
  { $match: { country: "USA" } },
  {
    $group: {
      _id: "$genre",
      totalViews: { $sum: "$views" },
      avgRating: { $avg: "$rating" }
    }
  },
  {
    $project: {
      _id: 0,
      genre: "$_id",
      totalViews: 1,
      avgRating: { $round: ["$avgRating", 2] }
    }
  }
]);

// 3. Top 5 Movies by Views in 2024

db.watchHistory.aggregate([
  { $match: { year: 2024 } },
  { $sort: { views: -1 } },
  { $limit: 5 },
  { $project: { _id: 0, movie: 1, views: 1 } }
]);

////  4. Count Movies per Genre

db.watchHistory.aggregate([
  {
    $group: {
      _id: "$genre",
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      genre: "$_id",
      count: 1
    }
  }
]);

//  5. Top 3 Genres by Total Views in 2024

db.watchHistory.aggregate([
  { $match: { year: 2024 } },
  {
    $group: {
      _id: "$genre",
      totalViews: { $sum: "$views" }
    }
  },
  { $sort: { totalViews: -1 } },
  { $limit: 3 },
  {
    $project: {
      _id: 0,
      genre: "$_id",
      totalViews: 1
    }
  }
]);

//  6. Challenge Solution:
  // Avg rating per genre in 2024
  // Only genres with totalViews > 10000

db.watchHistory.aggregate([
  { $match: { year: 2024 } },
  {
    $group: {
      _id: "$genre",
      totalViews: { $sum: "$views" },
      avgRating: { $avg: "$rating" }
    }
  },
  { $match: { totalViews: { $gt: 10000 } } },
  {
    $project: {
      _id: 0,
      genre: "$_id",
      totalViews: 1,
      avgRating: { $round: ["$avgRating", 1] }
    }
  }
]);

