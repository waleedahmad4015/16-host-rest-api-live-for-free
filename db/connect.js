const mongoose = require('mongoose');


const connectDB = (uri) => {
    console.log('connect');
	return mongoose.connect(uri);
};

module.exports = connectDB;
