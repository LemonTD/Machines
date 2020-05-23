
let database = null

if(typeof require !== 'undefined') XLSX = require('xlsx');


async function startDatabase(){ 
  const workbook = XLSX.readFile('/home/lemonod/NXTgrid/src/db/nxtgrid.xlsx');
  const sheet_name_list = await workbook.SheetNames;
  console.log(sheet_name_list)
  const database = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[2]]);
  return database;

}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

// async function startDatabaseId(){ 
//   const sheet_name_list = await workbook.SheetNames;
//   const database = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[2]]);
//   return database;

// }

// async function getDatabaseId() {
//   if (!database) await startDatabaseId();
//   return database;
// }
 
module.exports = {
  getDatabase,
  startDatabase,
  // getDatabaseId
};