// import router from './routes';


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const db = require ('./db/mongo');
const {startDatabase, getDatabase} = require('./db/mongo');
const {getMachines, getAllMachines} = require('./MachinesController/machine');
// const {deleteMachine, updateMachine} = require('./MachinesController/machine');

const app = express();

// adding Helmet to enhance API's security
app.use(helmet());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// enabling CORS for all requests
app.use(cors());
// adding morgan to log HTTP requests
app.use(morgan('combined'));
// app.use(router)


// app.post('/', async (req, res) => {
//     const newMachine = req.body;
//     await insertMachine(newMachine);
//     res.send({ message: 'New machine inserted.' });
//   });
  
  // endpoint to delete an machine
  // app.delete('/:id', async (req, res) => {
  //   await deleteMachine(req.params.id);
  //   res.send({ message: 'Machine removed.' });
  // });
  
  // // endpoint to update an machine
  // app.put('/:id', async (req, res) => {
  //   const updatedMachine = req.body;
  //   await updateMachine(req.params.id, updatedMachine);
  //   res.send({ message: 'Machine updated.' });
  // });

// defining an endpoint to return all Machines
app.get('/machines', async (req, res) => {
    const gotMachine = req.body;
    await getDatabase(req.params, gotMachine)
    res.status(200).send({
      success: 'true',
      message: 'machines retrieved successfully',
      machines: db
    })

  });
  app.get('/machines/:id', async (req, res) => {
    const gotMachine = req.body;
    await getDatabase(req.params.id, gotMachine)
    res.status(200).send({
      success: 'true',
      message: 'machine retrieved successfully',
      machines: db
    })

  });

startDatabase().then(async () => {
    // await insertMachine({
    //     title: 'Hello, now from the in-memory database!'
    
    // });
  

  const PORT = 3002;
  
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
  });
});