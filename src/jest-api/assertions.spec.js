describe('examples of assertions', () => {
    it('shows some examples', () => {
        const result = {
            name: 'MidwestJs',
            date: 'August 16 - 18',
            location: 'Twin Cities',
            speakers: [
                {
                    name: 'Steven Hicks'
                },
                {
                    name: 'Safia Abdalla'
                },
                {
                    name: 'Abraham Williams'
                }
            ]
        };

        expect(result.location).toEqual('Twin Cities');
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
