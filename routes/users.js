var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource user');
});

// see user detail
router.get('/:id', function(req, res, next) {
  if (req.params.id === '0') next('route') // if the user ID is 0, skip to the next router, in this project is error route
  else next(); // otherwise pass control to the next middleware function in this stack
}, (req, res, next) => {
  res.send(`user detail: ${req.params.id}`);
});

router.put('/', (req, res) => {
  res.send('Got a PUT request at /user')
})

router.delete('/', (req, res) => {
  res.send('Got a DELETE request at /user')
})

module.exports = router;
