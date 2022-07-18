const { read } = require('../utils/FS');
const { verify, sign } = require('jsonwebtoken');

const verifyAccess = (req, res, next) => {
	try {
		const { token } = req.cookies;

		if (!token) {
			return res.redirect('/');
		}
		const user = verify(token, 'Ewmat1234qalesan');

		if (!user) {
			return status(401).send('Sen menga begonasan');
		}

		req.body.userId = user.id;
		next();
	} catch (err) {
		res.status(500).send(err.message);
	}
};

// verifyRole

const verifyRole = (req, res, next) => {
	const { name, password } = req.body;
	if (!name & !password) {
		return res.status(400).json({
			message: 'Enter valid credentials !!',
		});
	}

	const founduser = read('users.json').find(
		(e) => e.name == name && e.password == password,
	);
	if (!founduser) {
		return res.status(401).json({
			message: 'Tur yoqol !!',
		});
	}
	req.body.token = sign(
		{ id: founduser.id, role: founduser.role },
		'Ewmat1234qalesan',
	);
	req.body.role = founduser.role;
	req.body.id = founduser.id;
	next();
};

module.exports = {
	verifyAccess,
	verifyRole,
};
