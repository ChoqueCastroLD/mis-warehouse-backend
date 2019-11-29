const router = require('express').Router();

const login = require('../controllers/login');
const superuser = require('../controllers/superuser');

// Routes
router.get('/login/:warehouse_name?', login.login);

router.get('/superuser/panel', superuser.panel);


module.exports = router;