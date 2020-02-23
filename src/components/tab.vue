<template>
  <div id="tab">
    <router-link class="tab-item" tag="div" to="/recommand">
      <span>推荐</span>
    </router-link>
    <router-link class="tab-item" tag="div" to="/rank">
      <span>排行</span>
    </router-link>
    <router-link class="tab-item" tag="div" to="/search">
      <span>搜索</span>
    </router-link>
    <router-link class="tab-item" tag="div" to="/singer">
      <span>歌手</span>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
#tab {

  height: 44px;
  line-height: 44px;
  color: #7a7a7a;
  display: flex;
  .tab-item {
    padding-bottom: 5px;
    flex: 1;
    text-align: center;
  }
  .router-link-active {
    transition: all 0.15s linear;
    color: #eaefed;
  }
}
</style>