<template>
  <div id="app">
    <div>
      <router-view/>
    </div>

  </div>
</template>

<script>
export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>


<style lang="scss">
#app {
  height: 100vh;
}
</style>
