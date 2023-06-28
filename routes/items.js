var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('respond with a resource items');
  });
  
  router.put('/', (req, res) => {
    res.send('Got a PUT request at /items')
  })
  
  router.delete('/', (req, res) => {
    res.send('Got a DELETE request at /items')
  })
  
  module.exports = router;