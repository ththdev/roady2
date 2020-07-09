import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window');

const theme = {
    cellSize: 35,
    calendarViewWidth: width - 35 * 2,
    colors: {
        gray: "#909090"
    }
}

export default theme