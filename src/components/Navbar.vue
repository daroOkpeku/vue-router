<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="bar">
 <RouterLink to="/"><h3>home</h3></RouterLink>   
 <RouterLink to="/about"><h3>about</h3></RouterLink>   
    </div>
</template>
<style >
.bar{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* margin:0px 4px; */
}
</style>
