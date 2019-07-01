const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// serve static content
app.use(express.static('../resources'));

// use body-parser to parse the body of the request
app.use(bodyParser.json());

// initialize routes
app.use('/api', require('./routes.js'));

// error handling middleware
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { stack, message, code } = err;
  console.log(stack);
  res.status(422).send({ Error: { code, message } });
});

// listen for requests
app.listen(process.env.port || port, () => {
  console.log(`listening for requests on port ${port}`);
});
