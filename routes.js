const router = require('express').Router();

const demo = {
  create: async (newDemo) => {
    console.log(newDemo);
    return newDemo;
  },

  read: async () => {
    return 'DEMO';
  },
};

router.post('/demo', (req, res, next) => {
  demo
    .create(req.body.demo)
    .then((createResult) => {
      res.send(createResult);
    })
    .catch(next);
});

router.get('/demo', (req, res, next) => {
  demo
    .read()
    .then((readResponse) => {
      res.send(readResponse);
    })
    .catch(next);
});

module.exports = router;
