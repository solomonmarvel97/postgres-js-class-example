
const {createUser, getUsers, updateUser, deleteUser} = require('./query')


const testFunction = async () => {
     // Test createUser
     await createUser('John Doe', 'john@example.com', 28);

     // Test getUsers
     await getUsers();
 
     // Test updateUser
     await updateUser(1, 'Jane Doe', 'jane@example.com', 30);
 
     // Test deleteUser
     await deleteUser(1);
 
     // Close the database connection when done
     pool.end();
}


testFunction()