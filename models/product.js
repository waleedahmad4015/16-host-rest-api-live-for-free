const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required'],
	},
	price: {
		type: Number,
		required: [true, 'Price is required'],
	},
	feature: {
		type: Boolean,
		default: false,
	},
	rating: {
		type: Number,
		default: 4.9,
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
	company: {
		type: String,
		enum: {
			values: ['Apple','Samsung','Dell','Lenovo','HP','Mi'],
            message: '{VALUE} is not a valid company',
		},
	}
});

module.exports = mongoose.model('Product', productSchema);
