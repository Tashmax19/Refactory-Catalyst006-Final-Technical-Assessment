const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const registrationSchema = new Schema({
	surname: {
		type: String,
		//required: true,
	},
	givenname: {
		type: Array,
	},
	dob: {
		type: String,
		trim: true,
	},

	gender: {
		type: String,
  },
  
residence: {
		type: String,
  },
  nationality:{
    type: String,
  },
  occupation:{
    type: String,
  }
,
category:{
  type: String,
}

});
module.exports = mongoose.model('Register', registrationSchema);
