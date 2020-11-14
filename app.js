const persoana = {
    name: 'Vlad',
    age: 34,
    height: 179,
    weight: 87,
};

console.dir(persoana);

const showName = (nume) => {
    return `Buna, numele meu este ${nume}`;
}

console.log(showName(persoana.name));