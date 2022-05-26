const { Router } = require('express'); 
const router = Router(); 

const controller = require('../controllers/user.controller'); 


router.post('/create', controller.createUser); 
router.post('/login', controller.logIn); 

router.use(require('../middleware/verify')); 

router.get("/getUserData", controller.getUserData); 

module.exports = router; 