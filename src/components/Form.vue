<template>
  <div>
    <el-card>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-input type="textarea" :rows="2" placeholder="msg..." v-model="formMsg"></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4" >
          <el-button size="mini" @click="handleSubmit" type="success">submit</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: 'Form',
  data() {
    return {
    }
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch('submitForm')
    }
  },
  computed: {
    // ...mapState({
    //   formMsg: state => state.formMsg
    // })
    formMsg: {
      get(){
        return this.$store.state.formMsg
      },
      set(value){
        this.$store.commit('setFormMsg',value)
      },
    }
  }
};
</script>