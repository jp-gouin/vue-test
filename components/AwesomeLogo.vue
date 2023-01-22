<template>
    <div class="flex justify-center items-center flex-col lg:flex-row rounded-lg drop-shadow-xl logo ">
        <img class=" max-w-sm md:max-w-lg lg:max-w-full" src="../assets/img/Logo_min.png" alt="">
    </div>
</template>
<style scoped lang="scss">
img{
    background-size: cover;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "AwesomeLogo",
    setup() {
        
    },
})
</script>
