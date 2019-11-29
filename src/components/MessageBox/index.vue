<template>
  <div class="page-msgbox">
    
    <div class="page-msgbox-wrapper">
      <mt-button @click.native="openConfirm" size="large">打开 confirm 提示框</mt-button>
     
    </div>
  </div>
</template>

<style>
  /*  @component-namespace page {
    @component msgbox {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute 50% * * *;
        width: 100%;
        transform: translateY(-50%);
        button:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }  */
</style>

<script type="text/babel">
import { MessageBox } from 'mint-ui';
  export default {
    methods: {
      openConfirm() {
         
       MessageBox.confirm('福州1', '定位');
MessageBox.confirm('福州11').then(action => {
    console.log(action)
    console.log(1111111)
    console.log(action)
});
      }
      }
    
  };
</script>
