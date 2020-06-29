import Vuex from 'vuex'
import Vue from 'vue'

import currencyExchanger from './currencyExchanger'
import loader from './loader'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        currencyExchanger,
        loader
    }
})