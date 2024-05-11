const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite' 
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = { Sequelize };

sequelize.sync({ alter: true }).then(() => {
  console.log('Database synced');
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});

app.get('/', (req,res)=>{
  res.send('Server');
});

app.post('/', (res,req)=>{

});

