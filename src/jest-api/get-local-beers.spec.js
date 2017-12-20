import { getLocalBeers } from './get-local-beers';
import { callApi } from './api-client';

//note that using import { callApi } requires jest.mock to happen outside the describe/it blocks.
// First: jest.mock needs to happen before a dependendency is imported or required.
// Second: import statements have to happen at the top of a file.
// Third: jest.mock gets hoisted to prevent you from forgetting to always put it before your dependencies.
// Fouth: jest.mock is only hoisted to the top of the current scope (function), NOT the top of the file.
// Put all this together: If we are pulling in dependencies via require,
//  we do that in the scope of the current function, so jest.mock will get hoisted high enough, and you are clear.
//  If we are pulling in dependencies via import, though, jest.mock has to be in the root scope of the file - NOT in a describe or it block -
//   or else it can't get hoisted high enough.
jest.mock('./api-client', () => ({
    callApi: jest.fn()
}));

describe('getLocalBeers', () => {
    beforeEach(() => {
        callApi.mockClear();
    });

    it('calls the imported api', () => {
        const result = getLocalBeers();

        expect(callApi).toHaveBeenCalledTimes(1);
    });

    it('calls the api function passed in', () => {
        const mockApi = jest.fn();

        getLocalBeers(mockApi);

        expect(mockApi).toHaveBeenCalledTimes(1);
    });

    //this test would fail without our beforeEach.
    it('calls the imported api a second time', () => {
        const result = getLocalBeers();

        expect(callApi).toHaveBeenCalledTimes(1);
    });
});
