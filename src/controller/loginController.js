const getLogin = (req, res) => {
	res.render('index');
};

const postLogin = (req, res) => {
	const { role, token } = req.body;
	if (role == 'admin') {
		res.cookie('token', token);
		res.redirect('/admin');
	} else if (role == 'teacher') {
		res.cookie('token', token);
		res.redirect('/teacher');
	} else if (role == 'student') {
		res.cookie('token', token);
		res.redirect('/student');
	} else if (role == 'student') {
		res.cookie('token', token);
		res.redirect('/student');
	} else {
		res.send('huuhhhuuh ahayt');
	}
};

module.exports = {
	getLogin,
	postLogin,
};
