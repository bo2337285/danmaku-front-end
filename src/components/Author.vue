<template>
  <div class="form-list">
    <div class="form-item" v-for="(item, index) in formItem" :key="index">
      <el-row>
        <el-col :span="8">{{item.label}}</el-col>
        <el-col :span="16">{{item.val}}</el-col>
      </el-row>
    </div>
    <!-- <div class="form-item">
      <el-row>
        <el-col :span="12">email </el-col>
        <el-col :span="12">{{info.email}}</el-col>
      </el-row>
      <el-row>
        <el-col :span="12">name </el-col>
        <el-col :span="12">{{info.name}}</el-col>
      </el-row>
    </div>-->
  </div>
</template>
<script>
export default {
  name: 'Author',
  props: ['info'],
  data() {
    return {
        // 展示字段
      displayKeys: ['name', 'email', 'uuid']
    }
  },
  computed: {
    formItem() {
      return Object.keys(this.info).filter(key => {
        return this.displayKeys.includes(key)
      }).map((key) => {
        return { label: key, val: this.info[key] }
      })
    }
  }
};
</script>