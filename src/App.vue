<template>
  <div id="app" class="app">
    <mary-options />
    <mary-composition />
  </div>
</template>

<script>
import MaryOptions from './components/MaryOptions'
import MaryComposition from './components/MaryComposition'

export default {
  name: 'app',
  components: {
    MaryOptions,
    MaryComposition
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
