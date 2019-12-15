<template>
  <span>
    <el-button type="text" @click="dialogVisible = true">Register</el-button>
    <el-dialog title="登录" :visible.sync="dialogVisible" >
      <span>Register</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </span>
</template>
<script>
export default {
  name: 'Register',
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    }
  }
};
</script>