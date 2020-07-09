import moment from 'moment'

const dates = [

]

for(var i = 0; i<30; i++) {
    dates.push(
        moment().add(i, 'days')
    );
}


export default dates