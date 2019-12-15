<template>
  <div>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="4">
          <!-- 头像 -->
          <el-popover placement="right" width="160" trigger="hover">
            <Author :info="item.author" />
            <el-avatar slot="reference" size="large" :src="getUserAvatar(item.author.avatarHash)"></el-avatar>
          </el-popover>
        </el-col>
        <el-col :span="20">
          <!-- 输入框 -->
          <el-input readonly type="textarea" :rows="2" placeholder="msg..." :value="item.text"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">{{item.name}}</el-col>
        <el-col :span="16" style="text-align:right">
          <!-- 星数 -->
          <el-popover placement="bottom" width="160" trigger="hover">
            <div class="liked-users">
                <el-avatar style="margin-right: 5px;" slot="reference" v-for="(user, index) in item.likeUsers" :key="index" size="small" :src="getUserAvatar(user.avatarHash)"></el-avatar>
            </div>
            <el-button
              slot="reference"
              type="text"
              size="mini"
              icon="el-icon-star-on"
            >{{item.likeUsers.length}}</el-button>
          </el-popover>
        </el-col>
        <el-col :span="4">
          <!-- 喜欢 -->
          <el-button type="danger" size="mini" icon="el-icon-check" @click="handleLike">like</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import Author from "./Author";
import { mapGetters } from "vuex";
export default {
  name: 'MsgItem',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getUserAvatar'
    ])
  },
  props: [
    'item'
  ],
  methods: {
    handleLike() {
      this.$store.dispatch('like', this.item.id)
    }
  },
  components: { Author }
};
</script>