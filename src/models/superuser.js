const db = require('./database.js');


module.exports = {
    
    async create(email, password){        
        const result = await db.query('INSERT INTO superuser(id, email, password) VALUES(0, ?, ?)', [email, password]);
        return result;
    },
    
    async getall(){
        const result = await db.query('SELECT * FROM superuser');
        return result;
    },
    
    async search(id){
        const result = await db.query('SELECT * FROM superuser WHERE id = ?', [id]);
        return result[0];
    },
    
    async update(id, email, password){
        const result = await db.query('UPDATE superuser SET email = ?, password = ? WHERE id = ?', [email, password, id]);
        return result;
    },
    
    async delete(id){
        const result = await db.query('DELETE FROM superuser WHERE id = ?', [id]);
        return result;
    },
    
    async exact(email, password){
        const result = await db.query('SELECT * FROM superuser WHERE email = ? AND password = ?', [email, password]);
        return result[0];
    },

}