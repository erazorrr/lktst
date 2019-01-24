<template>
    <div class="app">
        <nav class="app__nav">
            <Card>
                <router-link class="app__nav-item" to="/logs">logs</router-link>
                <router-link class="app__nav-item" to="/data">data</router-link>
                <router-link class="app__nav-item" to="/addData">addData</router-link>
            </Card>
        </nav>
        <div class="app__content">
            <Card>
                <router-view></router-view>
            </Card>
        </div>
    </div>
</template>

<script>
  import Card from './components/card.vue'

  export default {
    name: 'App',
    mounted() {
      console.log('mount')
    },
    components: {
      Card
    }
  }
</script>

<style lang="sass" type="text/scss" scoped>
    body {
        height: 100%;
    }

    * {
        box-sizing: border-box;
    }

    .app {
        color: #292e43;
        height: 100%;

        &__nav {
            position: absolute;
            top: 0;
            bottom: 0;

            width: 300px;
            padding: 12px 16px;

            &-item {
                display: block;
            }
        }

        &__content {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 300px;
            right: 0;

            padding: 12px 16px;
        }
    }
</style>
