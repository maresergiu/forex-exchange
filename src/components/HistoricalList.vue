<template>
    <ul class="historical-list">
        <li
            v-if="historicalDataDays.length"
            class="historical-list_element historical-list_element-headings">
            <span class="historical-list_element-text text font-bold">Date</span>
            <span
                v-for="heading in headings"
                class="historical-list_element-text text">
                {{heading}}
            </span>
        </li>
        <li
            v-else
            class="historical-list_element historical-list_element-headings">
            <p class="text">Please bear with us until we receive the historical data.</p>
        </li>
        <li
            class="historical-list_element"
            v-for="historicalDataDay in historicalDataDays">
            <span class="text historical-list_element-text">{{historicalDataDay.date}}</span>
            <span
                v-for="heading in headings"
                class="text historical-list_element-text">
                {{historicalDataDay.rates[heading]}}
            </span>
        </li>
    </ul>
</template>

<script>
import '../scss/components/historical-list.scss'

export default {
    name: 'HistoricalList',
    props: {
        headings: {            // holds the heading of the table
            type: Array,
            required: true
        },
        historicalDataDays: {  // holds the data of the table
            type: Array,
            required: true
        }
    }
}
</script>