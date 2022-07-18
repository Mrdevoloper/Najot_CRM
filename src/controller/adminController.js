const { read, write } = require('../utils/FS');

const adminControl = (_, res) => {
	const AllCourse = read('courses.json');
	const AllGroups = read('groups.json');
	const AllTeacher = read('users.json').filter((e) => e.role == 'teacher');
	const AllStudents = read('users.json').filter((e) => e.role == 'student');
	res.render('admin', { AllStudents, AllCourse, AllTeacher, AllGroups });
};

const adminControlPost = (req, res) => {
	//TEACHERS
	const { name, passwords, course } = req.body;
	const ALL = read('users.json');

	ALL.push({
		id: ALL.length + 1,
		name: name,
		password: passwords,
		course,
		role: 'teacher',
	});
	if (passwords) {
		write('users.json', ALL);
	}

	//COURSES
	const { nam, price } = req.body;
	const AllCourse = read('courses.json');
	AllCourse.push({ id: AllCourse.length + 1, name: nam, price: price });
	if (price) {
		write('courses.json', AllCourse);
	}

	//STUDENTS
	const { nams, password, Groups, cours } = req.body;
	const AllStudents = read('users.json');
	AllStudents.push({
		id: AllStudents.length + 1,
		name: nams,
		password,
		role: 'student',
		Groups,
		course: cours,
	});

	if (password) {
		write('users.json', AllStudents);
	}

	// GROUPS

	const { group, courses, teacher } = req.body;
	const AllGroups = read('groups.json');
	AllGroups.push({ id: AllGroups.length + 1, name: group, courses, teacher });

	if (teacher) {
		write('groups.json', AllGroups);
	}

	res.redirect('admin');
};

module.exports = {
	adminControl,
	adminControlPost,
};
