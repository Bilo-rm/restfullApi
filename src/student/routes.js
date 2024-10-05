const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getStudents);

router.post('/add',controller.postStudents);


module.exports = router;