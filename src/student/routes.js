const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getStudents);

router.get("/:id",controller.getStudentsById);
router.post('/',controller.addtStudents);


module.exports = router;