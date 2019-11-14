
<template>
  <div id="main">
    <Header title="喵喵电影" />
    <TabBar />
  </div>
</template>


<script>


import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
console.log(Header);

export default {
    name : 'Movie',
    components : {
        Header,
        TabBar
    }
}
</script>

<style lang='stylus' scoped>

</style>
