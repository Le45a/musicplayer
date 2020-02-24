<template>
  <div class="recommand">
    <div class="bgcolor"></div>
    <banner class="ban" />
    <div>
      <div class="recommand-list-container">
        <span>推荐歌单</span>
        <div class="recommand-list">
          <div v-for="item in recommandList" :key="item.id" class="recommand-list-item">
            <a :href="item.creator.avatarUrl">
              <img :src="item.picUrl" />
              <p>{{item.name}}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './banner'
export default {
  data() {
    return {
      recommandList: []
    }
  },
  components: {
    Banner
  },
  created() {
    this.getRecommandList()
  },
  methods: {
    async getRecommandList() {
      this.$http({
        method: 'get',
        url: '/recommend/resource',
        withCredentials: true
      }).then(res => {
        this.recommandList = res.data.recommend
        window.console.log(this.recommandList)
      })
    }
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
.recommand-list-container {
  width: 100%;
  margin-top: 30px;
  .recommand-list {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      //去除滚动条，设置滚动条的背景颜色为透明
      background-color: transparent;
      display: none;
    }
    .recommand-list-item {
      height: 200px;
      width: 100px;
      margin-left: 20px;
      a {
        text-decoration: none;
        color: #7a7a7a;
      }
      img {
        height: 100px;
        width: 100px;
        border-radius: 3px;
      }
    }
    .recommand-list-item:last-child{
      padding-right: 20px;
    }
  }
}

</style>