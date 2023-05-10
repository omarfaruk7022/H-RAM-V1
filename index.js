const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.78edo5s.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });