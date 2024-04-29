import bcrypt from 'bcrypt';

export async function login(req, res) {
    // Remeber to check/sanitize input so that SQL injection cant happen
    // Knex might itself, but double checking cant hurt

    // Hash password
}