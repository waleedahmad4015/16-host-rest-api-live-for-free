require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;
const products_routes = require('./routes/products');
const connectDB = require('./db/connect');


app.get('/', (req, res) => {
	res.send('Hi, I am live');
});

app.use('/api/products', products_routes);

const start = async () => {
	try {
        await connectDB(process.env.MONGODB_URL);
		app.listen(port, () => console.log(`Server is running on port ${port}`));
	} catch (err) {
		console.log(err);
	}
};


start();
