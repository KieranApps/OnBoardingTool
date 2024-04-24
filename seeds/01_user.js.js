import bcrypt from 'bcrypt';

exports.seed = async function(knex) {
    const { count } = await knex('users').where({permission_id: 3}).count('* as count').first();

    if(count > 0){
        console.log("Admin already in table, no need to add new...");
        return;
    }
    const password = await hashPassword("pass");
    await knex('users').insert([{
        username: 'Admin#00000',
        email: 'kieran.apps99@gmail.com',
        password: password,
        permission_id: 3
    }]);
};

const hashPassword = async (raw) => {
    const saltRounds = 12;
    const hash = await bcrypt.hash(raw, saltRounds).then((hash) => {
        return hash;
    }).catch((err) =>{
        return false;
    });
    return hash;
};