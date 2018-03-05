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

            describe('feed', () => {
                it('sets the hunger property to reduce by 3, no less than 0', () => {
                    const pet = new Pet('fido');
                    pet.hunger = 5;
                    pet.feed();
                    expect(pet.hunger).toEqual(2);

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