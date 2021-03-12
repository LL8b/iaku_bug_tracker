<template>
  <div id="app">
    <nav id="navbar_dark">
    <h3 id="navigation">IAKU BUG TRACKING TOOL</h3>
      <div id="nav_row" >
        <button id="nav_button" @click="$router.push('/')">Home</button>
        <button id="nav_button" @click="$router.push('/add')">New Report</button>
        <button id="nav_button" @click="$router.push('/about')">About</button>
        <br>
      </div>
    </nav>

    <div >
      <router-view />
    </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
