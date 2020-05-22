
let database = null

async function startDatabase(){
 if(typeof require !== 'undefined') XLSX = require('xlsx');
  const workbook = await XLSX.readFile('/home/lemonod/NXTgrid/src/db/nxtgrid.xlsx');
  const sheet_name_list = workbook.SheetNames;
  const database = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  return database;


}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
  startDatabase,
};