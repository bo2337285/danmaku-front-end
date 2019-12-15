import api from '@/api/app'
import { getQueryMap } from '@/utils'
export default {
  // 提交表单
  async submitForm({ dispatch, state }) {
    const res = await api.addDanmaku({ ...getQueryMap(), text: state.formMsg })
    dispatch('listDanmakus')
  },
  // 喜欢
  async like({ dispatch, state }, { id }) {
    const res = await api.like({ id })
    dispatch('listDanmakus')
  },
  // 更新列表数据
  async listDanmakus({ state, commit }) {
    const { danmakus } = await api.listDanmakus()
    commit('listDanmakus', { danmakus })
  }
}
