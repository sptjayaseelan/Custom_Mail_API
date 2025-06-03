const multer = require('multer');
const fs = require('fs');
let fileDestination = 'productionSummary';
let dirName = `./${fileDestination}`;

const date = new Date();

let currentDate =
  date.getFullYear() +
  '-' +
  (date.getMonth() + 1) +
  '-' +
  date.getDate() +
  ' ' +
  date.getMinutes() +
  ':' +
  date.getSeconds();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(dirName)) {
      fs.mkdirSync(dirName);
    }
    cb(null, dirName);
  },

  filename: (req, file, cb) => {
    const fileName = currentDate + '-' + Math.round(Math.random() * 1e9);
    cb(null, fileName + '_' + file.originalname);
  },
});

module.exports = multer({ storage: storage });
