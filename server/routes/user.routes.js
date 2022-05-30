const { Router } = require('express'); 
const router = Router(); 

const controller = require('../controllers/user.controller'); 


router.post('/create', controller.createUser); 
router.post('/login', controller.logIn); 
router.get('/all', controller.getAllData); 

router.use(require('../middleware/verify')); 

router.get("/getUserData", controller.getUserData); 

router.put("/update_data", controller.updateData); 


module.exports = router; 