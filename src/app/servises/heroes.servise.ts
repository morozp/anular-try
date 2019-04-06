import { Hero } from '../heroes/models/hero';

const heroesSet: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

const HeroesServise = {
    getHeroes: () => heroesSet,
    asyncGetHeroes: () => Promise.resolve(HeroesServise.getHeroes()),
    getHero: (heroId: number) => heroesSet.find((hero) => hero.id === heroId),
    asyncGetHero: (heroId: number) => Promise.resolve(HeroesServise.getHero(heroId)),
    addHero: (hero: Hero) => {
        const newId = heroesSet.sort((a, b) => a.id - b.id)[heroesSet.length - 1].id + 1;
        const generatedHero = { ...hero, id: newId };
        heroesSet.push(generatedHero);
    },
    removeHero: (heroId: number) => {
        const removedIndex = heroesSet.findIndex((hero) => hero.id === heroId);
        if (removedIndex) {
            heroesSet.splice(removedIndex, 1);
        } else {
            throw Error('Not found hero with this id');
        }
    }
};

export {
    HeroesServise,
};
