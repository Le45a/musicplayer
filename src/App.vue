<template>
  <div>
    <m-header />
    <tab />
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from './components/header'
import Tab from './components/tab'
export default {
  components: {
    MHeader,
    Tab
  }
}
</script>

<style lang="less">
@import './common/normalize.css';
@import './common/index.css';
</style>