const bcrypt = require('bcryptjs');

const password = 'password123'; // Replace this with the password you want to hash
const hashedPassword = bcrypt.hashSync(password, 10);

console.log(`Hashed password: ${hashedPassword}`);
