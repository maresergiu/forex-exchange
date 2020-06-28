<template>
    <ul class="description-list">
        <li
            class="description-list_element"
            :class="{'active': activeListElements.indexOf(index) > -1}"
            v-for="(listElement,index) in list"
            :key="`${listElement}-${index}`"
            @click="() => handleClickDescListElem(index)">
            <p class="text">{{listElement.currency}}</p>
            <p class="text">{{listElement.value}}</p>
        </li>
    </ul>
</template>
<script>
import '../scss/components/description-list.scss'
import { mapGetters } from 'vuex'

export default {
    name: 'DescriptionList',
    props: {
        list: { // list of currencies
            type: Array,
            default: {}
        }
    },
    data (){
        return {
            activeListElements: [] // active currencies
        }
    },
    computed: {
        ...mapGetters('currencyExchanger', ['getBaseCurrencyValue'])
    },
    watch: {
        getBaseCurrencyValue (){
            if(this.activeListElements.length) this.activeListElements = []
        }
    },
    methods: {
        // add/remove selected currency from the list
        handleClickDescListElem (index){
            const elementPos = this.activeListElements.indexOf(index)

            if(elementPos === -1){
                this.activeListElements.push(index)
            }else{
                this.activeListElements.splice(elementPos, 1)
            }

            // make aware the parent of the active currency list
            this.$emit('emitDesActiveListElem', this.activeListElements)
        }
    }
}

</script>