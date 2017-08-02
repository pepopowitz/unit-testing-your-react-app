export default function(events) {
    return events.filter(event => event.isActive);
}
