const express = require('express');
const router = express.Router();
const Registration = require('../models/Register');

//@route  GET /register.
//@desc   register the patients to system.
router.get('/register', (req, res) => {
	res.render('register');
});

router.post('/register', async (req, res) => {
	try {
		const registerPatient = new Registration(req.body);

		await registerPatient.save(() => {
			res.send('successfully submitted');
		});
	} catch (err) {
		res.status(400).send('Sorry! Something went wrong.');
		console.log(err);
	}
});

module.exports = router;
