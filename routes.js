const router = require('express').Router();
const { readFile } = require('./modules/tools');

const scenario = {
  create: async (newDemo) => {
    console.log(newDemo);
    return newDemo;
  },

  read: async () => {
    return (await readFile('./result.json')).toString('utf-8');
  },
};

router.get('/scenario', (req, res, next) => {
  scenario
    .read()
    .then((readResponse) => {
      res.send(readResponse);
    })
    .catch(next);
});

router.post('/scenario', (req, res, next) => {
  scenario
    .create(req.body.demo)
    .then((createResult) => {
      res.send(createResult);
    })
    .catch(next);
});

module.exports = router;
