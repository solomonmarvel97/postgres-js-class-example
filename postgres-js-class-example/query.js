const { Pool } = require('pg');
// Configure the database connection
const pool = new Pool({
    user: 'neondb_owner',
    host: 'ep-wild-term-a51ez1c7.us-east-2.aws.neon.tech',
    database: 'crud_db',
    password: 'Yrokv7uzJI9l',
    port: 5432,
    ssl: true
});

// Test the connection
pool.connect((err) => {
    if (err) {
        console.error('Database connection error', err.stack);
    } else {
        console.log('Connected to the database');
    }
});

// Create a new user
exports.createUser = async (name, email, age) => {
    const query = 'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, email, age];

    try {
        const res = await pool.query(query, values);
        console.log('User created:', res.rows[0]);
    } catch (err) {
        console.error('Error creating user:', err.stack);
    }
};


// Get all users
exports.getUsers = async () => {
    const query = 'SELECT * FROM users';

    try {
        const res = await pool.query(query);
        console.log('Users:', res.rows);
    } catch (err) {
        console.error('Error retrieving users:', err.stack);
    }
};



// Update a user by ID
exports.updateUser = async (id, name, email, age) => {
    const query = 'UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4 RETURNING *';
    const values = [name, email, age, id];

    try {
        const res = await pool.query(query, values);
        console.log('User updated:', res.rows[0]);
    } catch (err) {
        console.error('Error updating user:', err.stack);
    }
};


// Delete a user by ID
exports.deleteUser = async (id) => {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING *';
    const values = [id];

    try {
        const res = await pool.query(query, values);
        console.log('User deleted:', res.rows[0]);
    } catch (err) {
        console.error('Error deleting user:', err.stack);
    }
};



