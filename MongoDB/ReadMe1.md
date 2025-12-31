📘 MongoDB Aggregation Case Study – Setup Guide
🔧 Prerequisites

GitHub Codespaces or Linux environment

Docker (preinstalled in GitHub Codespaces)

🐳 Step 1: Run MongoDB using Docker

MongoDB is not available via apt, so we run it using Docker.

docker run -d \
  --name mongo \
  -p 27017:27017 \
  mongo:latest


Verify MongoDB container is running:

docker ps


Expected output should include:

mongo   mongo:latest   27017->27017

🖥️ Step 2: Install MongoDB Shell (mongosh)
sudo apt update
sudo apt install -y wget gnupg

wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" \
| sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

sudo apt update
sudo apt install -y mongodb-mongosh


Verify installation:

mongosh --version

🔌 Step 3: Connect to MongoDB
mongosh "mongodb://localhost:27017"


Exit the shell:

exit

▶️ Step 4: Run the Case Study Script

Navigate to the MongoDB folder:

cd MongoDB


Run the .js file:

mongosh "mongodb://localhost:27017" caseStudyM1.js


✔ Script will execute without errors
✔ Data will be inserted and aggregation pipelines will run

🔍 Step 5: Verify Data (Optional)
mongosh "mongodb://localhost:27017"

show dbs
use movieflix_case_study
db.watchHistory.find().pretty()

📝 Notes

.js files are executed using MongoDB Shell (mongosh)

Do not use node to run MongoDB scripts

No output after execution means the script ran successfully

✅ Submission Ready

✔ Docker-based MongoDB

✔ Aggregation pipelines implemented

✔ Executable .js files

✔ Clean project structure