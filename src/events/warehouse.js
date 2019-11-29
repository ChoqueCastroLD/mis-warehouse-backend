const warehouse = require('../models/warehouse');

const has = require('../util/has');
const auth = require('../services/auth');

module.exports = {

    async getall(socket, data) {
        const { id } = auth.validateData(data);
        
        return await warehouse.getallbysuperuser_id(id);
    },

    async create(socket, data) {
        const { id, type } = auth.validateData(data);

        if(type !== 'superuser')
            throw 'Only superusers can add warehouses';
        
        has(data, ['name', 'superuser_id']);

        
        return await warehouse.create(name, superuser_id);
    },
    

}