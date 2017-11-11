describe('examples of assertions', () => {
    it('shows some examples', () => {
        const result = {
            name: 'Milwaukee Code Camp',
            date: 'November 11',
            location: 'Milwaukee',
            speakers: [
                {
                    name: 'Steven Hicks'
                },
                {
                    name: 'David Pine'
                },
                {
                    name: 'Dustin Ewers'
                }
            ]
        };

        expect(result.location).toEqual('Milwaukee');
        expect(result.speakers).toHaveLength(3);
        expect(result.name).not.toEqual('Marty McFly');
        expect(result.speakers).toEqual(
            expect.arrayContaining([{ name: 'Steven Hicks' }])
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
