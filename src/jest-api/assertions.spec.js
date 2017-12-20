describe('examples of assertions', () => {
    it('shows some examples', () => {
        const result = {
            name: 'Central Waters',
            location: 'Amherst, WI',
            beers: [
                {
                    name: 'Mudpuppy Porter'
                },
                {
                    name: 'Shine On'
                },
                {
                    name: 'Bourbon Barrel Scotch Ale'
                }
            ]
        };

        expect(result.location).toEqual('Amherst, WI');
        expect(result.beers).toHaveLength(3);
        expect(result.name).not.toEqual('Miller');
        expect(result.beers).toEqual(
            expect.arrayContaining([{ name: 'Mudpuppy Porter' }])
        );
    });

    it('shows some more examples', () => {
        const mock = jest.fn();

        mock('an argument');
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith('an argument');
        expect(mock).toHaveBeenCalledWith(expect.any(String));
    });
});
