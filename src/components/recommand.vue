<template>
  <div class="recommand">
    <div class="bgcolor"></div>
    <banner class="ban" />
    <div></div>
  </div>
</template>

<script>
import Banner from './banner'
export default {
  components: {
    Banner
  }
}
</script>

<style lang='less' scoped>
.recommand {
  position: relative;
}
.bgcolor {
  width: 100%;
  height: 120px;
  background-color: #464646;
}
.ban {
  position: absolute;
  top: 0;
}
</style>