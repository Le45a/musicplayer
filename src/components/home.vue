<template>
  <div>
    <div class="sta">
      <m-header />
      <tab />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from './header'
import Tab from './tab'

export default {
  components: {
    MHeader,
    Tab
  },
  beforeCreate() {
    document
      .querySelector('body')
      .setAttribute('style', 'background-color: #272727;')
  }
}
</script>

<style lang='less' scoped>
.sta{
  background-color:#474747;
}
</style>