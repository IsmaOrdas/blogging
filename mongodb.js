const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'blogging';

MongoClient.connect(connectionURL, { useUnifiedTopology: true, useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect')
  }

  console.log('connected')

  /* const db = client.db(databaseName);

  db.collection('users').insertOne({
    username: 'michel',
    password: '1234'
  }) */

})