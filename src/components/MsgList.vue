<template>
  <div class="list">
    <MsgItem class="item" v-for="(item, index) in msgItemList" :item="item" :key="index" />
  </div>
</template>
<script>
import MsgItem from "./MsgItem";
import { mapState } from "vuex";
export default {
  name: 'MsgList',
  data() {
    return {}
  },
  computed: {
    ...mapState(['msgItemList'])
  },
  components: {
    MsgItem
  }
};
</script>
