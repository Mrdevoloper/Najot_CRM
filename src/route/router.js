const express = require('express');
const router = express.Router();

// constroller
const loginController = require('../controller/loginController');
const adminController = require('../controller/adminController');
const teacherController = require('../controller/teacherController');
const studentController = require('../controller/studentController');
const authMiddleware = require('../middlewares/auth');

// route part
router.get('/', loginController.getLogin);

router.post('/login', authMiddleware.verifyRole, loginController.postLogin);

router
	.get('/admin', authMiddleware.verifyAccess, adminController.adminControl)
	.post(
		'/admin',
		authMiddleware.verifyAccess,
		adminController.adminControlPost,
		adminController.adminControl,
	);
router.get(
	'/teacher',
	authMiddleware.verifyAccess,
	teacherController.teacherController,
);
router.get(
	'/student',
	authMiddleware.verifyAccess,
	studentController.studentController,
);

module.exports = router;
