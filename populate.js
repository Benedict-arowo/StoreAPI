require('./db/connectDB');
const data = require('./products.json');
const productsModel = require('./models/product');

// For prepopulating the api with data.
const start = async () => {
  try {
    await productsModel.deleteMany({}); // Deletes all the currert data in the database
    await productsModel.create(data); // Populates the database.
    console.log('Sucessfully poupulated the database!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
// Setup args for deleting database before populating
