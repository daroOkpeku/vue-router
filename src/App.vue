<script setup>
import Homeview from './view/Homeview.vue';
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
// RouterView enables the user to navigate to different pages on the web application
</script>
<template>
    <Navbar/>
<div>
<RouterView/>
</div>
</template>

<style scoped>

</style>
