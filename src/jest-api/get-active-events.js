import { callApi } from './api-client';

export function getActiveEvents(specifiedApiCall) {
    if (specifiedApiCall) {
        return specifiedApiCall();
    }

    callApi();
}
