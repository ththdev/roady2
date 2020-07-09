import moment from 'moment'

const calendars = [
    {
        name: "Work",
        color: "#FDC105",
        events: [
            {
                name: "Job Interview",
                startDate: moment("20200711"),
                endDate: moment("20200712")
            },
            {
                name: "Test2",
                startDate: moment("20200714"),
                endDate: moment("20200714")
            }
        ]
    },
    {
        name: "Study",
        color: "green",
        events: [
            {
                name: "Test3",
                startDate: moment("20200720"),
                endDate: moment("20200720")
            }
        ]
    }
]

export default calendars