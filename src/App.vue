
<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <loading></loading>
    </div>
</template>

<script>
import Loading from "../index";
export default {
    name: "app",
    components: { Loading }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
