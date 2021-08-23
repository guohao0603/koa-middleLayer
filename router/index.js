const router = require('koa-router')();
const userModel = require('../controllers/index');

router.post('/api/user/login',userModel.login);
router.get('/api/user/userInfo',userModel.userInfo);

module.exports = router;
