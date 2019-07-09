const router = require('express').Router();
const { readFile } = require('./modules/tools');

const scenario = {
  create: async (newDemo) => {
    console.log(newDemo);
    return newDemo;
  },

  read: async (userId) => {
    const { users } = JSON.parse(
      (await readFile('./scenarios.json')).toString('utf-8')
    );
    if (users) {
      const user = users.find((usr) => {
        return usr.name === userId;
      });
      if (user) {
        return user.scenario;
      }
      throw Error(`User ${userId} not found!`);
    } else {
      throw Error('No users defined!');
    }
  },
};

router.get('/scenario/:userid', (req, res, next) => {
  scenario
    .read(req.params.userid)
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
