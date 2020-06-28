import moment from 'moment'

const methods = {
    generateLasNumberOfDays: (numOfDays) => {
        const dates = []

        for (let i = 0; i < numOfDays; i++) {
            let date = moment();

            date = date.subtract(i, 'day').format('YYYY-MM-DD');

            dates.push(date);
        }

        return dates
    }
}

export default {
    methods
}