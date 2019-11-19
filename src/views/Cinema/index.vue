
<template>
  <div id="main">
    <Header title="附近影院" />
    <div id="content">
      <div class="cinema_menu">
        <div class="city_switch">
          全城
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="brand_swtich">
          品牌
          <i class="iconfont icon-lower-triangle"></i>
        </div>
        <div class="feature_switch">
          特色
          <i class="iconfont icon-lower-triangle"></i>
        </div>
      </div>

      <!--
       如果是子组件则以应写 
            <keep-alive>
              <router-view></router-view>     子组件显示的地方
            </keep-alive>
      -->

      <CiList/>  <!-- 影院组件内容 -->

    </div>
    
   
    <TabBar />
  </div>
</template>


<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import CiList from "@/components/CiList";

export default {
  name: "cinema1",
  components: {
    Header,
    TabBar,
    CiList
  }
};
</script>

<style  scoped>
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
</style>
