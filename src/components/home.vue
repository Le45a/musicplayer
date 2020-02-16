<template>
  <div>
    <m-header />
    <tab />
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
      .setAttribute(
        'style',
        'background-color: #272727;'
      )
  }
}
</script>

<style>
</style>