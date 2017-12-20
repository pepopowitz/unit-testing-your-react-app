import mapApiBeerToUiBeer from './map-beers';

it('maps api beers to ui beers', () => {
    const apiBeer = {
        beerName: 'Mudpuppy Porter',
        beerId: '123456'
    };

    const expectedUiBeer = {
        name: 'Mudpuppy Porter',
        id: '123456'
    };

    const result = mapApiBeerToUiBeer(apiBeer);

    expect(result).toEqual(expectedUiBeer);
});
