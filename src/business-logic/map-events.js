export default function(apiEvent) {
    return {
        id: apiEvent.eventId,
        name: apiEvent.eventName
    };
}
