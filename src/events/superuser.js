const superuser = require('../models/superuser');

const hash = require('../util/hash');
const has = require('../util/has');

const auth = require('../services/auth');

module.exports = {

    async register(socket, data) {
        has(data, ['email', 'password']);

        const {email, password} = data;
        
        const hashed_password = hash(email, password);

        await superuser.create(email, hashed_password);
        
        return 'Usuario registrado con exito';
    },
    
    async login(socket, data) {
        has(data, ['email', 'password']);

        let {email, password} = data;
        
        const hashed_password = hash(email, password);

        const result = await superuser.exact(email, hashed_password);

        if(!result)
            throw 'Incorrect Email/Password Combination';

        return auth.getToken(result.id, result.email, result.password, 'superuser');
    }

}