import filterBeers from './filter-beers';

it('filters out beers that aren`t porters', () => {
    const beers = [
        {
            brewery: 'Central Waters',
            name: 'Mudpuppy Porter',
            beerStyle: 'Porter'
        },
        {
            brewery: 'New Glarus',
            name: 'Spotted Cow',
            beerStyle: 'Farmhouse'
        }
    ];

    const result = filterBeers(beers);

    expect(result).toHaveLength(1);
    expect(result[0].name).toEqual('Mudpuppy Porter');
});
