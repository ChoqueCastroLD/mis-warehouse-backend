const warehouse = require('../models/warehouse');

module.exports = {
    async panel (req, res, next) {
        if(!req.session.access_token)
            return res.redirect('/login');
        console.log("LA session is ", req.session.access_token);
        res.render('superuser_panel', { title: 'panel' });
    }
}