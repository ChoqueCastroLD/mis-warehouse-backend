const jwt = require('jsonwebtoken');
const has = require('../util/has');

const { SECRET } = process.env;

module.exports = {

    getToken(id, email, password, type = 'superuser' || 'subuser'){
        const access_token = jwt.sign({type, id, email, password}, SECRET, { expiresIn: '12h' });
        
        return {type, access_token, expiresIn: '12:00:00'};
    },

    verifyToken(token){
        try {
            const { type, id, email, password } = jwt.verify(token, SECRET);
    
            return { type, id, email, password };
        } catch (error) {
            throw 'Invalid token, try a different one';
        }
    },

    validateData(data){
        try {
            has(data, ['access_token']);
            const {access_token} = data;
            const { id, type } = jwt.verify(access_token, SECRET);

            return { id, type };
        } catch (error) {
            console.log(error);
            throw 'Invalid token, try a different one';
        }
    }

}