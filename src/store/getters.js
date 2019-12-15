import api from '@/api/app'
export default {
  // 提交表单
  getUserAvatar: state => hash => {
    return api.getUserAvatar.replace('{hash}', encodeURIComponent(hash))
  }
}
