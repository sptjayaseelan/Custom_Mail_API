const XLSX = require('xlsx');
const path = require('path');

//file save location
let fileDestination = 'productionSummary';
let dirName = `./${fileDestination}`;

const createExcel = (data) => {
  const date = new Date();

  let currentDate =
    date.getFullYear() +
    '-' +
    (date.getMonth() + 1) +
    '-' +
    date.getDate() +
    '_' +
    date.getHours() +
    '_' +
    date.getMinutes();

  const fileName = `productionSummary_${currentDate}.xlsx`;

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(data);

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Production Summary');

  const filePath = path.join(dirName, fileName);

  XLSX.writeFile(workbook, filePath);

  return filePath;
};

module.exports = {
  createExcel,
};
