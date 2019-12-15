<template>
  <span>
    <el-button type="text" @click="dialogVisible = true">Login</el-button>
    <el-dialog title="登录" :visible.sync="dialogVisible" >
      <span>登录表单</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </span>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
  }
};
</script>