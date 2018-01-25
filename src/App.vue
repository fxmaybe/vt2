<template>
  <div id="app">
    <div>
      <router-link to="/">Home</router-link>&nbsp;&nbsp;<router-link to="/nav">nav</router-link>
    </div>
    <br />
    <br />
    <router-view name="modA" />

    <router-view name="modB" />

    <keep-alive>
      <router-view name="modC" />
    </keep-alive>

    <router-view name="modD" />
  </div>
</template>

<script>
export default {
  name: 'App'
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
