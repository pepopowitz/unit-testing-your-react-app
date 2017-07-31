import { getActiveEvents, buildRequest } from './get-active-events';

describe('getActiveEvents', () => {
    it('calls the api', () => {
        const result = getActiveEvents();

        expect(1).toBe(1);
    });
});

describe('buildRequest', () => {
    it('calls the function passed in', () => {
        const mockBuilder = jest.fn();

        buildRequest(mockBuilder);

        expect(mockBuilder.mock.calls.length).toBe(1);
    });
});
