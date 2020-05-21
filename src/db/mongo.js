// const {MongoMemoryServer} = require('mongodb-memory-server');
// const {MongoClient} = require('mongodb');



async function startDatabase(){
 if(typeof require !== 'undefined') XLSX = require('xlsx');
  const workbook = XLSX.readFile('/home/lemonod/NXTgrid/src/db/nxtgrid.xlsx');
  const sheet_name_list = workbook.SheetNames;
  return database = console.log(XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]))


}

// async function startDatabase() {
//   const mongo = new MongoMemoryServer();
//   const mongoDBURL = await mongo.getConnectionString();
//   const connection = await MongoClient.connect(mongoDBURL, { useUnifiedTopology: true });
  // database = connection.db();
// }

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
  startDatabase,
};

// const machines =  [
//     {
//       id: 1,
//       title: "machine1",
//       description: "spear parts"
//     }
// ];

// export default todos;