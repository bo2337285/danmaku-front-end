export default {
  listDanmakus(state, { danmakus }) {
    state.msgItemList = danmakus
  },
  setFormMsg(state, value) {
    state.formMsg = value
  }
}
