<template>
    <div class="app">
        <nav class="nav">
            <router-link to="/logs">logs</router-link>
            <router-link to="/data">data</router-link>
            <router-link to="/addData">addData</router-link>
        </nav>
        <div class="app__content">
            <h1>Это шаблон, который не будет меняться</h1>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped>

</style>
