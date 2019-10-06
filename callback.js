const getUserById = (id, callback) => {
    const user = {
        name: 'Dani',
        id
    };

    if (id === 20) {
        callback(`User with ${id} does not exist`)
    } else {
        callback(null, user);
    }
};



getUserById(20, (err, user) => {
    if (err) {
        return console.log(err);
    } else {
        console.log('User BBDD', user);
    }
});