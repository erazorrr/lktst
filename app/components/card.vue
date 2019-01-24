<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'Card'
  }
</script>

<style lang="sass" type="text/scss" scoped>
    .card {
        display: block;
        border-radius: 8px;
        box-shadow: 0 0 30px 0 #ccc;
        padding: 12px 16px;

        width: 100%;
        height: 100%;
    }
</style>
