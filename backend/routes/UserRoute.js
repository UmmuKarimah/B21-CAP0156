const { addUser, getUser, updateUser, deleteUser } = require("../handlers/UserHandler");

module.exports = [{
        method: 'POST',
        path: '/user',
        handler: addUser
    },
    {
        method: 'GET',
        path: '/user/{email}',
        handler: getUser
    },
    {
        method: 'PUT',
        path: '/user/{id}',
        handler: updateUser
    },
    {
        method: 'DELETE',
        path: '/user/{id}',
        handler: deleteUser
    },
]