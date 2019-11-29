<!-- loading组件 -->
<template>
  <div class="loading bar">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.loading {
  // width:100px;
  // height:100px;
  width: 50px;
  height: 50px;
  // margin:30px auto;
  // position:relative;
  // align-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
}

.bar {
  > div {
    /*   width: 10px;
    height: 30px;
    position: absolute;
    top: 35px;
    left: 45px; */
    width: 4px;
    height: 10px;
    position: absolute;
    top: 17px;
    left: 22px;
    opacity: 1;
    -webkit-animation: fadeit 0.6s linear infinite;
    animation: fadeit 0.6s linear infinite;

    &:nth-child(1) {
      background: #fa5858;
      -webkit-transform: rotate(0deg) translate(0, -15px);/* translate(0, -15px)中-15px可改大小 */
      transform: rotate(0deg) translate(0, -15px);
      -webkit-animation-delay: 0.05s;
      animation-delay: 0.05s;
    }
    &:nth-child(2) {
      background: #faac58;
      -webkit-transform: rotate(30deg) translate(0, -15px);
      transform: rotate(30deg) translate(0, -15px);
      -webkit-animation-delay: 0.1s;
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      background: #f4fa58;
      -webkit-transform: rotate(60deg) translate(0, -15px);
      transform: rotate(60deg) translate(0, -15px);
      -webkit-animation-delay: 0.15s;
      animation-delay: 0.15s;
    }
    &:nth-child(4) {
      background: #9afe2e;
      -webkit-transform: rotate(90deg) translate(0, -15px);
      transform: rotate(90deg) translate(0, -15px);
      -webkit-animation-delay: 0.2s;
      animation-delay: 0.2s;
    }
    &:nth-child(5) {
      background: #58faac;
      -webkit-transform: rotate(120deg) translate(0, -15px);
      transform: rotate(120deg) translate(0, -15px);
      -webkit-animation-delay: 0.25s;
      animation-delay: 0.25s;
    }
    &:nth-child(6) {
      background: #2efef7;
      -webkit-transform: rotate(150deg) translate(0, -15px);
      transform: rotate(150deg) translate(0, -15px);
      -webkit-animation-delay: 0.3s;
      animation-delay: 0.3s;
    }
    &:nth-child(7) {
      background: #2e9afe;
      -webkit-transform: rotate(180deg) translate(0, -15px);
      transform: rotate(180deg) translate(0, -15px);
      -webkit-animation-delay: 0.35s;
      animation-delay: 0.35s;
    }
    &:nth-child(8) {
      background: #2e2efe;
      -webkit-transform: rotate(210deg) translate(0, -15px);
      transform: rotate(210deg) translate(0, -15px);
      -webkit-animation-delay: 0.4s;
      animation-delay: 0.4s;
    }
    &:nth-child(9) {
      background: #ac58fa;
      -webkit-transform: rotate(240deg) translate(0, -15px);
      transform: rotate(240deg) translate(0, -15px);
      -webkit-animation-delay: 0.45s;
      animation-delay: 0.45s;
    }
    &:nth-child(10) {
      background: #a901db;
      -webkit-transform: rotate(270deg) translate(0, -15px);
      transform: rotate(270deg) translate(0, -15px);
      -webkit-animation-delay: 0.5s;
      animation-delay: 0.5s;
    }
    &:nth-child(11) {
      background: #fa58f4;
      -webkit-transform: rotate(300deg) translate(0, -15px);
      transform: rotate(300deg) translate(0, -15px);
      -webkit-animation-delay: 0.55s;
      animation-delay: 0.55s;
    }
    &:nth-child(12) {
      background: #fa58ac;
      -webkit-transform: rotate(330deg) translate(0, -15px);
      transform: rotate(330deg) translate(0, -15px);
      -webkit-animation-delay: 0.6s;
      animation-delay: 0.6s;
    }
  }
}

@-webkit-keyframes fadeit {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
@keyframes fadeit {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}
</style>
