import mapApiEventToUiEvent from './map-events';

it('maps api events to ui events', () => {
    const apiEvent = {
        eventName: 'MidwestJs',
        eventId: '123456'
    };

    const expectedUiEvent = {
        name: 'MidwestJs',
        id: '123456'
    };

    const result = mapApiEventToUiEvent(apiEvent);

    expect(result).toEqual(expectedUiEvent);
});
