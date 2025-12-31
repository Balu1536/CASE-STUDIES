

// Use / create database
db = db.getSiblingDB("FinTrust");

//0. Clean setup (optional but safe for testing)


db.users.drop();
db.transactions.drop();


//   1. Insert Dummy Users


const aliceId = new ObjectId();
const bobId = new ObjectId();

db.users.insertMany([
  {
    _id: aliceId,
    name: "Alice",
    balance: 500
  },
  {
    _id: bobId,
    name: "Bob",
    balance: 300
  }
]);

//   2. Insert Original Transaction (Payment)


const originalTxnId = new ObjectId();

db.transactions.insertOne({
  _id: originalTxnId,
  from: aliceId,
  to: bobId,
  amount: 100,
  date: new Date(),
  status: "completed"
});

//   3. REFUND TRANSACTION (Mini-Project)


const session = db.getMongo().startSession();

try {
  session.startTransaction();

  // 1. Add refund amount back to Alice
  db.users.updateOne(
    { _id: aliceId },
    { $inc: { balance: 100 } },
    { session }
  );

  // 2. Subtract refund amount from Bob
  const bob = db.users.findOne({ _id: bobId }, { session });

  if (bob.balance < 100) {
    throw new Error("Bob does not have enough balance for refund");
  }

  db.users.updateOne(
    { _id: bobId },
    { $inc: { balance: -100 } },
    { session }
  );

  // 3. Update original transaction status
  db.transactions.updateOne(
    { _id: originalTxnId },
    { $set: { status: "refunded" } },
    { session }
  );

  // 4. Log refund transaction
  db.transactions.insertOne(
    {
      from: bobId,
      to: aliceId,
      amount: 100,
      date: new Date(),
      status: "refund"
    },
    { session }
  );

  // 5. Commit transaction
  session.commitTransaction();

} catch (e) {
  session.abortTransaction();
  print("Transaction aborted:", e.message);
} finally {
  session.endSession();
}

