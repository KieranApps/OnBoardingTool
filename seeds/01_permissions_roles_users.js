import bcrypt from 'bcrypt';

export async function seed(knex) {
    try {
        await knex.transaction(async (trx) => {
            await addPermissions(trx);

            await addRoles(trx);

            await addUser(trx);
        });
    } catch (error) {
        console.log('Something went wrong with seed 01: ', error.message);
    }    
};

async function addPermissions(trx) {
    const { count } = await trx('permissions').count('* as count').first();
    
    // Defensive checks
    if(count > 0){
        console.log("Permissions already in table, no need to add new...");
        return;
    }

    await trx('permissions').insert([
        {
            permission: 'user',
        },
        {
            permission: 'admin',
        }
    ]);
}

async function addRoles(trx) {
    const { count } = await trx('roles').count('* as count').first();
    
    // Defensive checks
    if(count > 0){
        console.log("Roles already in table, no need to add new...");
        return;
    }

    await trx('roles').insert([
        {
            role: 'Employee',
            permission_id: 1

        },
        {
            role: 'Manager',
            permission_id: 1
        },
        {
            role: 'HR',
            permission_id: 2
        }
    ]);
}

async function addUser(trx) {
    const { count } = await trx('users').where({role_id: 3}).count('* as count').first();

    if(count > 0){
        console.log("Admin already in table, no need to add new...");
        return;
    }
    const password = await hashPassword("Def4ult!");
    await trx('users').insert([{
        firstname: 'Kieran',
        lastname: 'Apps',
        email: 'kieran.apps99@gmail.com',
        password: password,
        role_id: 3
    }]);
}

const hashPassword = async (raw) => {
    const saltRounds = 12;
    const hash = await bcrypt.hash(raw, saltRounds).then((hash) => {
        return hash;
    }).catch((err) =>{
        return false;
    });
    return hash;
};