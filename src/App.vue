<template>
  <div id="nav">
    <router-link v-for="item of paths" :key="item" :to="item">
      {{ item.substr(1) }} |</router-link
    >
  </div>
  <router-view />
</template>
<script>
import { getFilesPaths } from "@/utils/router";
export default {
  setup() {
    const paths = getFilesPaths()
      .map(item => item.join(""))
      .filter(item => !item.includes("index"));
    console.log("paths :>> ", paths);
    return {
      paths
    };
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
