const namespaced = true;

const state = {
    baseCurrencyValue: 0
}

const mutations = {
    SET_BASE_CURRENCY_VALUE: (state, baseCurrencyValue) => {
        state.baseCurrencyValue = baseCurrencyValue
    }
}

const actions = {
    setBaseCurrencyValue: ({ commit }, baseCurrencyValue) => {
        commit('SET_BASE_CURRENCY_VALUE', baseCurrencyValue)
    }
}

const getters = {
    getBaseCurrencyValue: state => state.baseCurrencyValue
}

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
