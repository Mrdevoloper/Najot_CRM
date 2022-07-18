const { read } = require('../utils/FS');
const teacherController = (req, res) => {
	const { userId } = req.body;
	const foundTeacher = read('users.json').find((e) => e.id == userId);
	console.log(foundTeacher);

	const groups = read('groups.json').filter(
		(e) => e.courses == foundTeacher.course,
	);
	const AllStudents = read('users.json')
		.filter((e) => e.role == 'student')
		.filter((e) => e.course == foundTeacher.course);
	res.render('teacher', { groups, AllStudents });
};
module.exports = {
	teacherController,
};
