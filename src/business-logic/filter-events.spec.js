import filterEvents from './filter-events';

it('filters out inactive events', () => {
    const events = [
        {
            name: 'Milwaukee Code Camp',
            isActive: true
        },
        {
            name: 'BaconFest',
            isActive: false
        }
    ];

    const result = filterEvents(events);

    expect(result).toHaveLength(1);
    expect(result[0].name).toEqual('Milwaukee Code Camp');
});
