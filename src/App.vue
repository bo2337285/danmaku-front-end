<template>
  <div id="app">
    <el-container class="container">
      <el-header height="auto">
        <!-- <div>
            <Login />
            <span>/</span>
            <Register />
        </div> -->
        <Form />
      </el-header>
      <el-main>
        <MsgList />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Form from './components/Form.vue'
import MsgList from './components/MsgList.vue'
import { mapActions } from "vuex";

export default {
  name: 'app',
  components: {
    Form, MsgList,Login,Register
  }, methods: {
    ...mapActions(['listDanmakus'])
  },
  mounted() {
    this.listDanmakus()
  },
}
</script>

  <style lang="stylus">
  html, body
    width 100%
    height 100%
    margin 0
    padding 0
  .item
    margin-bottom 20px
    &:last-child
      margin-bottom 0
  #app
    text-align center
    color #2c3e50
    height 100%
    .container
      padding 20px
      height 100%
      border 1px solid #eee
      .el-row
        margin-bottom 20px
        &:last-child
          margin-bottom 0
</style>

