const Pet = require('../src/pet');
const pet = new Pet(name);

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        expect(pet.name).toEqual('Fido');
    });

    it('sets the age property', () => {
        expect(pet.age).toEqual(0);
    });

    it('sets the hunger property', () => {
        expect(pet.hunger).toEqual(0);
    });

    it('sets the fitness property', () => {
        expect(pet.fitness).toEqual(10);
    })

});