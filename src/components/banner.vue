<template>
  <div class="banner">
    <swiper v-if="banners.length" :options="swiperOption">
      <swiper-slide v-for="item in banners" v-bind:key="item.url">
        <div>
        <a :href="item.url">
          <img :src="item.imageUrl" alt="图片" />
        </a>
        <span>{{item.typeTitle}}</span>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      banners: [],
      swiperOption: {
        loop: true,
        spaceBetween: 30,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    this.getBanner()
  },
  methods: {
    async getBanner() {
      this.$http({
        method: 'get',
        url: '/banner',
        withCredentials: true
      }).then(res => {
        this.banners = res.data.banners
      })
    }
  }
}
</script>

<style lang="less" scoped>
.banner {
  position: relative;
  margin-top: 20px;
  width: 100%;
  .swiper-container {
    width: 90%;
    height: 125px;
    margin: 0 auto;
    .swiper-slide {
      border-radius: 5px;
      overflow: hidden;
      a {
        img {
          width: 100%;
          height: 100%;
        }
      }
      span{
        background-color: #27acc4;
        position: absolute;
        right:0px;
        bottom:0px;
        padding:3px 6px;
        color:#f8f6f6;
        border-top-left-radius: 5px;
        font-size: 12px;
      }
    }
  }
}
</style>