const Pet = require('../src/pet');
const pet = new Pet(name);

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    describe('name', () => {
        it('sets the name property', () => {
            expect(pet.name).toEqual('Fido');
        });

        describe('age', () => {
            it('sets the age property', () => {
                expect(pet.age).toEqual(0);
            });

            describe('hunger', () => {
                it('sets the hunger property', () => {
                    expect(pet.hunger).toEqual(0);
                });

                describe('fitness', () => {
                    it('sets the fitness property', () => {
                        expect(pet.fitness).toEqual(10);
                    });

                    describe('walk', () => {
                        it('increases fitness to a maximum of 10', () => {
                            const pet = new Pet('fido');
                            pet.fitness = 8;
                            pet.walk();
                            expect(pet.fitness).toEqual(10);
                        });
                    });
                });
            });
        });
    });
});