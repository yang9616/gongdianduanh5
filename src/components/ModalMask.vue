<template>
    <div class='mask' v-on:click="hide()"></div>
</template>
<script>
import tips from '../helper/tips';
export default {
  methods: {
      hide(){
          tips.hide();
      }
  }
}
</script>

<style>
.mask
{
    z-index: 2001;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
} 
</style>
