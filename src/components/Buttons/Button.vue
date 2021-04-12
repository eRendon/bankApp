<template>
  <button :disabled="disabled" @click="$emit('click')" class="bg-yellowAqua-50 button flex justify-center items-center">
    <div class="button__text">
      {{ text }}
    </div>
    <div class="button__dot ml-3"></div>
  </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Button",
  props: {
    text: {
      type: String,
      default: 'Click'
    },
    disabled : {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style scoped lang="scss">
 .button {
   height: 65px;
   //width: 315px;
   border-radius: 10px;

   &__text {
    font-size: 16px;
     @apply text-black font-bold;
   }

   &__dot {
     width: 12px;
     height: 12px;
     background: #FF6310;
     border-radius: 50%;
   }
 }

 .button:disabled {
   background: #d9d7d5;
   > div {
     color: #a9a8a7;
  }
 }

</style>
