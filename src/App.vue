<template>
    <div id="app">
        <header id="site-header">
            <div class="holder">
                <h1 class="sub-title">FreeAgent UI Code Challenge</h1>
            </div>
        </header>
        <main id="main">
            <CurrencyExchanger />
            <Loader />
        </main>
        <footer id="site-footer">
            <div class="holder">
                <p class="text">FreeAgent UI Code Challenge</p>
            </div>
        </footer>
    </div>
</template>

<script>
import './scss/main.scss'
import './scss/libs/normalize.scss'

import CurrencyExchanger from './components/CurrencyExchanger.vue'
import Loader from './components/Loader.vue'

export default {
    name: 'App',
    components: {
        CurrencyExchanger,
        Loader
    }
}
</script>
