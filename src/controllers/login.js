const warehouse = require('../models/warehouse');

module.exports = {
    async login (req, res, next) {
        req.session.access_token = undefined;
        req.session.id = undefined;
        const {warehouse_name} = req.params;
        
        if(warehouse_name){
            let w = await warehouse.searchname(warehouse_name);
            if(!w)
                res.redirect('/login');
        }

        res.render('login', { title: 'Login', warehouse: warehouse_name });
    }
}