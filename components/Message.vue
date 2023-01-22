<template>
  <div v-if="!hide" v-bind:class="alertPosition">
    <div v-bind:class="alertStyle" class=" rounded-md py-5 px-6 mb-3 text-base inline-flex items-center w-full" role="alert">
    <slot name="icon">
      <svg v-if="type == 'info'"  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" class="w-4 h-4 mr-2 fill-current " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"></path>
      </svg>
      <svg v-else-if="type == 'success'" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" class="w-4 h-4 mr-2  fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
      </svg>
      <svg v-else-if="type == 'warning'" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" class="w-4 h-4 mr-2  fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
      </svg>
      <svg v-else-if="type == 'danger'" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" class="w-4 h-4 mr-2  fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
      </svg>
      <svg v-else aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" class="w-4 h-4 mr-2  fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"></path>
      </svg>
    </slot>
    <slot name="title">
      <span v-if="title != ''" class="text-lg font-bold mr-3">
        {{title}}
      </span>
    </slot>
    <slot name="message">
      <span>
        {{message}}
      </span>
    </slot>
    <slot name="action">
      <span  v-on:click="hide=true" class="ml-4">
        <svg class="fill-current h-6 w-6" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
      </span>
    </slot>
    </div>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Message',
  props: {
    type: { type: String, required: true},
    position: { type: String, required: true},
    title: { type: String, required: false},
    message: { type: String, required: true},
    tempo: { type: Boolean, required: false},
    tempoTime: { type: Number, required: false},
    // msg: { type: String, required: true }
  },
  data() {
    return {
      hide: false
    }
  },
  methods: {
    show: function(){
      this.hide = false;
    }
  },
  mounted() {
    this.hide=false;
    if(this.tempo){
        const timer = this.tempoTime ? this.tempoTime : 3000;
        setTimeout(() => this.hide = true, timer);
      }
  },
  computed: {
    alertPosition: function(){
      switch (this.position) {
        case "top-full":
          return {
            'fixed': true,
            'top-0': true,
            'w-full': true
          }
          case "top-right":
          return {
            'fixed': true,
            'top-12': true,
            'right-4': true
          }
        default:
          break;
      }
    },  
    alertStyle: function () {
      switch (this.type) {
        case "info":
          return{
            'text-blue-700': true,
            'bg-blue-100': true
          }
        case "success":
          return{
            'text-green-700': true,
            'bg-green-100': true
          }
        case "warning":
        return{
            'text-yellow-700': true,
            'bg-yellow-100': true
          }
        case "danger":
        return{
            'text-red-700': true,
            'bg-red-100': true
          }
        default:
        return{
            'text-indigo-700': true,
            'bg-indigo-100': true
          }
      }
    }
  }
})
</script>