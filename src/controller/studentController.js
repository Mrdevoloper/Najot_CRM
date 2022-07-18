const { read } = require('../utils/FS');
const studentController = (req, res) => {
	const { userId } = req.body;
	const AllStudents = read('users.json').filter((e) => e.id == userId);
	// console.log(userId);
	const students = read('groups.json').filter(
		(e) => e.courses == AllStudents.map((e) => e.course),
	);

	res.render('student', { students });
};
module.exports = {
	studentController,
};
