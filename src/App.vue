<template>
  <Calendar></Calendar>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Calendar from "./components/Calendar.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Calendar,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}
body{
  width: 75%;
  margin: 0 auto;
  background-image: linear-gradient( 95.2deg,  rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% );
}
</style>

