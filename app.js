class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Flat {
    peopleLiveInFlat = [];

    addPerson(person) {
        this.peopleLiveInFlat.push(person);
    }
}

class House {
    constructor(maxOfFlats) {
        this.maxOfFlats = maxOfFlats;
        this.flats = [];
    }

    addFlat(flat) {
        if (this.flats.length < this.maxOfFlats) {
            this.flats.push(flat);
        } else {
            console.log('This house is full');
        }
    }
}

const person1 = new Person('Arthur', 'male');
const person2 = new Person('Alex', 'female');
console.log(person1, person2);

const flat1 = new Flat();
const flat2 = new Flat();

flat1.addPerson(person1);
flat1.addPerson(person2);
console.log(flat1);

const house1 = new House(1);
house1.addFlat(flat1);
console.log(house1);