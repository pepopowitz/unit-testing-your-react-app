import mapApiEventToUiEvent from './map-events';

it('maps api events to ui events', () => {
    const apiEvent = {
        eventName: 'Milwaukee Code Camp',
        eventId: '123456'
    };

    const expectedUiEvent = {
        name: 'Milwaukee Code Camp',
        id: '123456'
    };

    const result = mapApiEventToUiEvent(apiEvent);

    expect(result).toEqual(expectedUiEvent);
});
