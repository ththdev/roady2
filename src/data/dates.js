import moment from 'moment'

const dates = [
    moment()
]

for(var i = 1; i<=100; i++) {
    dates.unshift(moment().subtract(i, 'days'));
    dates.push(moment().add(i, 'days'));
}


export default dates