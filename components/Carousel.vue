<template>

<div class="relative slide self-center">
   
    <div class="carousel-inner relative overflow-hidden w-full">
      <div v-for="(item, i) in items" :id="`slide-${i}`" :key="i" :class="`${active === i ? 'active' : 'left-full'}`" class="carousel-item inset-0 relative w-full transform transition-all duration-500 ease-in-out">
        <div class="rounded-full bg-accent text-center text-white font-bold m-auto w-10 h-10 p-2 mb-8">
          {{ i + 1 }}
        </div>
        <p class="text-center m-auto text-2xl font-bold text-primary-dark">
          {{ item }}
        </p>
      </div>
    </div>

  </div>
  
 </template>
  
<script>
  // import slider components
  
  export default {

    name: 'Carousel',
    data () {
      return {
        items: [
          "Choose your programing language and create your project. You can also create a new project based on an existing repository on Github.",
          "Bring your code.",
          "Launch it, that's all, we take care of the rest for you."
        ],
        active: 0
      }
    },
    mounted() {
      let slideId = 0;
      setInterval(() => {
        if (slideId > this.items.length - 1) {
          slideId = 0;
        }
        this.active = slideId;
        slideId++;
        this.$emit("slideId", slideId)
      }, 4000);
    }
  }
</script>

<style>
.left-full {
  left: -100%;
}

.carousel-item {
  float: left;
  position: relative;
  display: block;
  width: 100%;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  left: 0;
}
</style>
