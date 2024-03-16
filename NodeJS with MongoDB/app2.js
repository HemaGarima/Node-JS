const { MongoClient } = require("mongodb");

// GIVING AN ERROR -

// require("dotenv").config();
// const uri = process.env.MONGODB_URI;

const uri = require("./atlas_uri");

const client = new MongoClient(uri);

const dbname = "bank";
const collection_name = "accounts";

const accountsCollection = client.db(dbname).collection(collection_name);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(
      `Connected to the ${dbname} database \nFull connection string : ${uri}`
    );
  } catch (err) {
    console.log(`Error connecting to the database: ${err}`);
  }
};

// FOR InserOne method

// const sampleAccount = {
//   account_holder: "Linus Torvalds",
//   account_id: "MDB829001337",
//   account_type: "checking",
//   balance: 50352434,
// };

// FOR InsertMany method

const sampleAccounts = [
  {
    account_id: "MDB011235813",
    account_holder: "Ada Lovelace",
    account_type: "checking",
    balance: 60218,
  },
  {
    account_id: "MDB829000001",
    account_holder: "Muhammad ibn Musa al-Khwarizmi",
    account_type: "savings",
    balance: 267914296,
  },
];

const main = async () => {
  try {
    await connectToDatabase();
    // insertOne method is used here to insert the sampleAccount document
    // let result = await accountsCollection.insertOne(sampleAccount);
    // console.log(`Inserted document: ${result.insertedId}`);

    // insertMany method
    let result = await accountsCollection.insertMany(sampleAccounts);
    console.log(`Inserted ${result.insertedCount} documents`);
    console.log(result);
  } catch (err) {
    console.error(`Error inserting documents: ${err}`);
  } finally {
    await client.close();
  }
};

main();
