
<template>
  <div id="main">
    <Header title="Cc电影" />

    <div id="content">
      <div class="movie_menu">
        <router-link to="/movie/city" tag="div" class="city_name">
          <span>{{$store.state.city.nm}}</span>
          <i class="iconfont icon-lower-triangle"></i>
        </router-link>
        <div class="hot_swtich">
          <router-link to="/movie/nowPlaying" tag="div" class="hot_item">正在热映</router-link>
          <router-link to="/movie/comingSoon" tag="div" class="hot_item">即将上映</router-link>
        </div>
        <router-link to="/movie/search" tag="div" class="search_entry">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </div>
      <!-- 子组件中间内容 显示  -->

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <TabBar />
    <router-view name="detail" />
  </div>
</template>


<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import { messageBox } from "@/components/JS";

export default {
  name: "Movie",
  data() {
    return {
      ismsgBox: true
    };
  },
  components: {
    Header,
    TabBar
    // MessageBox
  },
  mounted() {
    setTimeout(()=>{
       this.axios.get("/api/getLocation").then(res => {
      console.log(res.data.data);
      let nm = res.data.data.nm;
      let id = res.data.data.id;
      window.localStorage.setItem("oneIp", 1);
     

      if(this.$store.state.city.id==id && window.localStorage.getItem("oneIp")==1 ){return}//只定位一次
      messageBox({
        title: "定位",
        content: nm,
        cancel: "取消",
        ok: "切换定位",
        handleCancel() {
          console.log('取消定位');
        },
        handleOk() {
          window.localStorage.setItem("nowNm", nm);
          window.localStorage.setItem("nowId", id);
          window.location.reload();
        }
      });
    });

    },3000)
   
  }
};
</script>

<style  scoped>
#content .movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .city_name.active {
  color: #47c0e5;
  border-bottom: 2px #47c0e5 solid;
}
.movie_menu .city_name.router-link-active {
  color: #47c0e5;
  border-bottom: 2px #47c0e5 solid;
}
.movie_menu .hot_swtich {
  display: flex;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .hot_item.active {
  color: #47c0e5;
  border-bottom: 2px #47c0e5 solid;
}
.movie_menu .hot_item.router-link-active {
  color: #47c0e5;
  border-bottom: 2px #47c0e5 solid;
}
.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry.active {
  color: #47c0e5;
  border-bottom: 2px #47c0e5 solid;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: rgb(0, 140, 255);
}
</style>
