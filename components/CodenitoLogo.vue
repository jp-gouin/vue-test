<template>
    <div class="">
        <div :class="size" class="codenito-logo bg-clip-text text-transparent bg-gradient-to-r from-secondary-dark dark:from-secondary via-secondary dark:via-secondary to-primary dark:to-primary">
            Codenito
        </div>
    </div>
</template>
  
<style>
  .codenito-logo {
    font-family: 'Comfortaa';
    font-weight: bold;
  }

  .large {
    font-size: xx-large;
  }

  .small {
    font-size: x-small;
  }
</style>
  
<script>
export default {
  name: 'CodenitoLogo',
  props: {
    size: String
  }
}
</script>
  