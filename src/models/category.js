

const db = require('./database.js');

const validateKeys = require('validate-keys');

module.exports = {
    
    async create(name, jsonschema){
        JSON.parse(jsonschema);
        const result = await db.query('INSERT INTO category(id, name, jsonschema) VALUES(0, ?, ?)', [name, jsonschema]);
        return result;
    },
    
    async getall(){
        const result = await db.query('SELECT id, name, jsonschema FROM category');
        return result;
    },
    
    async search(id){
        const result = await db.query('SELECT id, name, jsonschema FROM category WHERE id = ?', [id]);
        return result[0];
    },
    
    async update(id, name, jsonschema){
        JSON.parse(jsonschema);
        const result = await db.query('UPDATE category SET name = ?, jsonschema = ? WHERE id = ?', [name, jsonschema, id]);
        return result;
    },
    
    async delete(id){
        const result = await db.query('DELETE FROM category WHERE id = ?', [id]);
        return result;
    }

}