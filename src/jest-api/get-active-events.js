import { callApi } from './api-client';

export function getActiveEvents() {
    callApi();
}

export function buildRequest(requestBuilder, source) {
    const request = requestBuilder(source);

    return request;
}
