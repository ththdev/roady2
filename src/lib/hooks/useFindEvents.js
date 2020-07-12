export default function useFindEvents(events, date) {
    const foundEvents = events.find(e => {
        return date.isSameOrAfter(e.startDate, 'days') && date.isSameOrBefore(e.endDate, 'days');
    });

    return foundEvents
}
