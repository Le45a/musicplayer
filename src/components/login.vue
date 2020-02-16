<template>
  <div class="login">
    <div class="MIcon">
      <span>Le</span>
    </div>
    <div @click='UserLogin' class="LBtn">手机号登录</div>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    document
      .querySelector('body')
      .setAttribute(
        'style',
        'margin: 0 auto; width: 100%; background-color: #c92c2c; overflow-x: hidden;height: 100%;'
      )
  },
  methods: {
    async UserLogin() {
      await this.$http
        .get('/login/cellphone?phone=15354528755&password=assaaas.')
        .then(res => {
             window.sessionStorage.setItem('token', res.data.token)
            this.$router.push('/home')
        })
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  width: 100%;
  height: 100%;
}
.MIcon {
  width: 100%;
  height: 400px;
  text-align: center;
  span {
    display: block;
    height: 40px;
    width: 40px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-left: -30px;
    margin-top: -30px;
    line-height: 40px;
    font-size: 30px;
    padding: 10px;
    border-radius: 50%;
    background-color: #dd2a2a;
    color: #c5c5c5;
  }
}
.LBtn {
  width: 60%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  text-align: center;
  margin-top: 100px;
  background-color: #ebebeb;
  color: #c92c2c;
  border-radius: 50px;
  cursor: pointer;
}
</style>