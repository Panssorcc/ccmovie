<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <slot></slot>
    <!--这里插入父组件在引用子组件内部的内容 -->
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: "Scrollerr",
  data() {
    return {};
  },
  props:{
        handleToScroll : {
            type : Function,
            default : function(){}
        },
        handleToTouchEnd : {
            type : Function,
            default : function(){}
        }
    },
  mounted() {
    var scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      probeType: 1
    });

    this.scroll = scroll;

    scroll.on("scroll", pos => {//触发时机：滚动过程中，具体时机取决于选项中的 probeType。
      this.handleToScroll(pos);
    });

    scroll.on("touchEnd", pos => {// 触发时机：鼠标/手指离开。
      this.handleToTouchEnd(pos);
    });
  },
  methods: {
    /*  
      scrollTo(x, y, time, easing) -> 滚动到指定的位置;
        x: X轴位置;
        y: Y轴位置;
        time: 到达指定位置所需时间，单位ms; 
        easing: 动画函数(一般不建议修改)
      */
    toScrollTop(y) {
      this.scroll.scrollTo(0, y);
    }
  }
};
</script>

<style scoped>
  .wrapper{ height:100%;}
</style>
