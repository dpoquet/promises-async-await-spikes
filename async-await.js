

const getName = async() => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve('Dani');
        }, 3000);
    });
};

const sayHello = async() => {
    const name = await getName();
    return `Hello my friend, ${name}!`;
}


sayHello().then(msg => {
    console.log(msg);
});

