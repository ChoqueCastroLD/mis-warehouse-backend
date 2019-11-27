

const db = require('./database.js');

const validateKeys = require('validate-keys');

const { validate } = require('jsonschema');

module.exports = {
    
    async create(name, email){
        const result = await db.query('INSERT INTO goods(id, name, email) VALUES(0, ?, ?)', [name, email]);
        return result;
    },
    
    async getall(){
        const result = await db.query('SELECT id, name, email FROM goods');
        return result;
    },
    
    async search(id){
        const result = await db.query('SELECT id, name, email FROM goods WHERE id = ?', [id]);
        return result[0];
    },
    
    async update(id, name, email){
        const result = await db.query('UPDATE goods SET name = ?, email = ? WHERE id = ?', [name, email, id]);
        return result;
    },
    
    async delete(id){
        const result = await db.query('DELETE FROM goods WHERE id = ?', [id]);
        return result;
    }

}