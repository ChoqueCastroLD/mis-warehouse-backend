

const db = require('./database.js');

module.exports = {
    
    async create(name, superuser_id){
        const result = await db.query('INSERT INTO warehouse(id, name, superuser_id) VALUES(0, ?, ?)', [name, superuser_id]);
        return result;
    },
    
    async getallbysuperuser_id(superuser_id){
        const result = await db.query('SELECT id, name, superuser_id FROM warehouse WHERE superuser_id = ?', [superuser_id]);
        return result;
    },
    
    async search(id){
        const result = await db.query('SELECT id, name, superuser_id FROM warehouse WHERE id = ?', [id]);
        return result[0];
    },
    
    async update(id, name, superuser_id){
        const result = await db.query('UPDATE warehouse SET name = ?, superuser_id = ? WHERE id = ?', [name, superuser_id, id]);
        return result;
    },
    
    async delete(id){
        const result = await db.query('DELETE FROM warehouse WHERE id = ?', [id]);
        return result;
    }

}