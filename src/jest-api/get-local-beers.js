import { callApi } from './api-client';

export function getLocalBeers(specifiedApiCall) {
    if (specifiedApiCall) {
        return specifiedApiCall();
    }

    callApi();
}
