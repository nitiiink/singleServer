
const siege = require('siege');
siege()
  .on(3000)
  .for(10000000000000000000).times
  .concurrent(100000000000000000)
  .get('/api/hello')
  .attack()