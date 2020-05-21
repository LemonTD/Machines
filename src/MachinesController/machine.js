const {getDatabase} = require('../db/mongo');
const {ObjectID} = require('mongodb');


const collectionName = 'machines';

// async function insertMachine(machine) {
//   const database = await getDatabase();
//   const {insertedId} = await database.collection(collectionName).insertOne(machine);
//   return insertedId;
// }

async function getMachines() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

async function getAllMachines() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

async function deleteMachine(id) {
  const database = await getDatabase();
  await database.collection(collectionName).deleteOne({
    _id: new ObjectID(id),
  });
}

async function updateMachine(id, machine) {
  const database = await getDatabase();
  delete machine._id;
  await database.collection(collectionName).update(
    { _id: new ObjectID(id), },
    {
      $set: {
        ...machine,
      },
    },
  );
}


module.exports = {
  getMachines,
  getAllMachines,
  deleteMachine,
  updateMachine,
};