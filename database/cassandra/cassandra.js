const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
 contactPoints: ['localhost:9042'],
 localDataCenter: 'datacenter1',
 keyspace: 'productDescriptions'
});

client.connect().then(console.log('connected to cassandra!'));