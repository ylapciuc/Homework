const person = {
    firstname: 'Jack'
};

const jack = person;

jack.firstname = 'Jack';
jack.lastName = 'Kushner';


console.log(jack.firstname,jack.lastName);

