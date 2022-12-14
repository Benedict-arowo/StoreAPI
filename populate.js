require('./db/connectDB');
const data = require('./products.json');
const productsModel = require('./models/product');

// For prepopulating the api with data.
const start = async () => {
  try {
    if (process.argv[2] === 'clean') {
      await productsModel.deleteMany({}); // Deletes all the currert data in the database
    }
    await productsModel.create(data); // Populates the database.
    console.log('Sucessfully pre-poupulated the database!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
