const fs = require('fs');

exports.readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const delay = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};
exports.delay = delay;

exports.doWhile = async (condition, timeout = 1000, action = () => {}) => {
  // eslint-disable-next-line no-await-in-loop
  while (await condition()) {
    await action(); // eslint-disable-line no-await-in-loop
    await delay(timeout); // eslint-disable-line no-await-in-loop
  }
};

exports.bytesToString = (bytes) => {
  return bytes.reduce((strn, curByte) => {
    const newStrn = strn + String.fromCharCode(curByte);
    return newStrn;
  }, '');
};
