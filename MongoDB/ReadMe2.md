Step 1: Start MongoDB using Docker

MongoDB server is run using Docker because it is not available via apt.

docker run -d --name mongo -p 27017:27017 mongo


Verify MongoDB is running:

docker ps

🖥️ Step 2: Install MongoDB Shell (mongosh)
sudo apt update
sudo apt install -y wget gnupg

wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" \
| sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

sudo apt update
sudo apt install -y mongodb-mongosh


Verify:

mongosh --version

▶️ Step 3: Run the Case Study Script

Navigate to the MongoDB folder:

cd MongoDB


Run the script:

mongosh "mongodb://localhost:27017" caseStudyM2.js


✅ No output means the script executed successfully.

🔍 Step 4: Verify Data (Interactive Mode)

Open MongoDB shell:

mongosh "mongodb://localhost:27017"


Switch to database:

use FastBite


Check collections:

show collections


Query dishes:

db.Dishes.find().pretty()

🧪 CRUD Operations Implemented
✔ Create

Added Tofu Buddha Bowl

Inserted initial dummy dishes

✔ Read

Retrieved available vegan dishes under $12

Used filters and projections

✔ Update

Updated price of Tofu Buddha Bowl

Added "popular" tag

✔ Delete

Removed Old Special Soup

🧠 Key Notes

MongoDB operations are atomic at document level

Output is not shown when running .js files unless explicitly printed

For viewing output, use interactive mongosh mode

Database and collection names are case-sensitive