const warehouse = require('../models/warehouse');

const has = require('../util/has');

module.exports = {

    async getall(socket, data) {
        const superuser_id = socket.getSession('superuser_id');
        return await warehouse.getallbysuperuser_id(superuser_id);
    },
    
    async update(socket, data) {
        const type = socket.getSession('type');
        
        const superuser_id = socket.getSession('superuser_id');
    
        console.log("id is ", superuser_id);
    
        if(type !== 'superuser')
            throw 'Only superusers can modify warehouses';
        
        has(data, ['name']);

        const { name } = data;
        
        return await warehouse.create(name, superuser_id);
    },

    async create(socket, data) {
        const type = socket.getSession('type');
        
        const superuser_id = socket.getSession('superuser_id');
    
        console.log("id is ", superuser_id);
        
    
        if(type !== 'superuser')
            throw 'Only superusers can add warehouses';
        
        has(data, ['name']);

        const { name } = data;
        
        return await warehouse.create(name, superuser_id);
    },
    

}